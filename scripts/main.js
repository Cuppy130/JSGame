"use strict";
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');
canvas.width = 1920 / 2;
canvas.height = 1080 / 2;
var scale = 30;
var screen_position = {
    x: 0,
    y: 0
};
var screen_offset = {
    x: 0,
    y: 0
};
var game = {
    mode: 'gameplay'
};
var mouse = {
    x: 0,
    y: 0,
    mode: 0,
    isHeld: false,
    currentBlock: { x: 0, y: 0 }
};
var keys = new InputHandler();
var player = new Player(0);
function clamp(v, m, x) { return Math.max(Math.min(v, x), m); }
function isColliding(a, b) { return (a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y); }
function handleSolidBlock(plr, rect) {
    if (isColliding(plr, rect)) {
        if (plr.l <= rect.x + rect.w && plr.ol > rect.x + rect.w) {
            plr.setLeft(rect.x + rect.w + 0.01);
            plr.xv = 0;
        }
        else if (plr.r >= rect.x && plr.or < rect.x) {
            plr.setRight(rect.x - 0.01);
            plr.xv = 0;
        }
        else if (plr.b >= rect.y && plr.ob < rect.y) {
            plr.setBottom(rect.y - 0.01);
            plr.isOnFloor = true;
        }
        else if (plr.t <= rect.y + rect.h && plr.ot > rect.y + rect.h) {
            plr.setTop(rect.y + rect.h + 0.01);
            plr.yv = 0;
        }
    }
}
player.x = 1920 / 4 / scale;
player.y = 0;
var currentLevel = 0;
function nextLevel() {
    currentLevel++;
}
nextLevel();
loadWorld(currentLevel);
var draw = {
    rect: function (x, y, w, h) {
        ctx.save();
        ctx.fillRect(x, y, w, h);
        ctx.restore();
    },
    circ: function (x, y, r) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 360 * Math.PI / 180);
        ctx.fill();
        ctx.restore();
    }
};
function main() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    screen_position.x = -Math.floor(player.x / (1920 / 2) * scale);
    screen_position.y = -Math.floor(player.y / (1080 / 2) * scale);
    var screen_velocity = { x: 0, y: 0 };
    screen_velocity.x = ((screen_offset.x - screen_position.x) / 4) * -2;
    screen_velocity.y = ((screen_offset.y - screen_position.y) / 4) * -2;
    screen_offset.x += screen_velocity.x;
    screen_offset.y += screen_velocity.y;
    {
        var gamespeed = 1;
        player.isOnFloor = false;
        player.update(gamespeed);
        var speed = .5 + 1 / 3;
        speed /= 20;
        world.forEach(function (object) {
            var x = object.x * scale + screen_offset.x * scale * (1920 / 2 / scale);
            var y = object.y * scale + screen_offset.y * scale * (1080 * 1.5 / scale);
            switch (object.id) {
                case 0:
                    handleSolidBlock(player, object);
                    ctx.fillStyle = 'rgb(0, 0, 0, .5)';
                    draw.rect(x, y, object.w * scale, object.h * scale);
                    break;
                case 1:
                    handleSolidBlock(player, object);
                    ctx.fillStyle = 'black';
                    draw.rect(x, y, object.w * scale, object.h * scale);
                    break;
                case 2:
                    if (isColliding(player, object)) {
                        player.gravity = 0.005;
                    }
                    else {
                        player.gravity = 0.05;
                    }
                    ctx.fillStyle = 'rgb(0, 0, 0, .25)';
                    draw.rect(x, y, object.w * scale, object.h * scale);
                    break;
                case 3:
                    if (!player.spawned) {
                        player.spawned = true;
                        player.x = object.x;
                        player.y = object.y;
                    }
                    ctx.fillStyle = 'rgb(0, 255, 0, .75)';
                    draw.circ(x + scale / 2, y + scale / 2, scale / 2);
                    break;
                case 4:
                    ctx.fillStyle = 'purple';
                    draw.circ(x + scale / 2, y + scale / 2, scale / 2);
                    if (isColliding(player, object)) {
                        if (keys.isPressed("KeyW") && !object.isPressed) {
                            object.isPressed = true;
                            player.yv = -.5;
                        }
                    }
                    break;
                case 5:
                    ctx.fillStyle = 'purple';
                    draw.rect(x, y, scale * object.w, scale * object.h);
                    if (isColliding(player, object)) {
                        player.yv = -.5;
                    }
                case 6:
                    ctx.fillStyle = 'yellow';
                    draw.rect(x, y, scale * object.w, scale * object.h);
                    if (isColliding(player, object)) {
                        player.yv = -.75;
                    }
                    break;
                default:
                    break;
            }
        });
        if (keys.isPressed("KeyA")) {
            player.xv -= speed * gamespeed;
        }
        else if (keys.isPressed("KeyD")) {
            player.xv += speed * gamespeed;
        }
        if (!player.isOnFloor) {
            player.yv += player.gravity;
        }
        else {
            player.yv = 0;
            if (keys.isPressed("KeyW")) {
                player.yv = player.jpower;
                player.isOnFloor = false;
            }
        }
    }
    player.draw();
}
setInterval(main, 1000 / 60);
