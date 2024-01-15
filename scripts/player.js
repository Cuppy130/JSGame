"use strict";
var Player = (function () {
    function Player(id) {
        this.spawned = false;
        this.rotation = 0;
        this.x = 0;
        this.y = 0;
        this.w = 0.95;
        this.h = 0.95;
        this.xv = 0;
        this.yv = 0;
        this.l = this.x;
        this.ol = this.l;
        this.r = this.x + this.w;
        this.or = this.r;
        this.t = this.y;
        this.ot = this.t;
        this.b = this.y + this.h;
        this.ob = this.b;
        this.jpower = -.5;
        this.gravity = .05;
        this.isJumping = false;
        this.doubleJump = false;
        this.doubleJumpEnabled = false;
        this.isOnFloor = false;
        this.mode = 'run';
        this.id = id;
    }
    Player.prototype.setTop = function (v) {
        this.y = this.y;
        this.y = v;
    };
    Player.prototype.setBottom = function (v) {
        this.y = this.y;
        this.y = v - this.h;
    };
    Player.prototype.setLeft = function (v) {
        this.x = this.x;
        this.x = v;
    };
    Player.prototype.setRight = function (v) {
        this.x = this.x;
        this.x = v - this.w;
    };
    Player.prototype.draw = function () {
        ctx.save();
        ctx.fillStyle = "lime";
        ctx.translate(this.x * scale + screen_offset.x * scale * (1920 / 2 / scale), this.y * scale + screen_offset.y * scale * (1080 * 1.5 / scale));
        if (!this.isOnFloor) {
            ctx.rotate(this.rotation * Math.PI / 180);
        }
        ctx.fillRect(0, 0, this.w * scale, this.h * scale);
        ctx.restore();
    };
    Player.prototype.die = function () {
        console.log("killing player.");
    };
    Player.prototype.update = function (speed) {
        if (speed === void 0) { speed = 1.0; }
        this.ot = this.y;
        this.ob = this.y + this.h;
        this.ol = this.x;
        this.or = this.x + this.w;
        this.x += this.xv * speed;
        this.y += this.yv * speed;
        this.t = this.y;
        this.b = this.y + this.h;
        this.l = this.x;
        this.r = this.x + this.w;
        this.xv /= 1.2;
    };
    return Player;
}());
