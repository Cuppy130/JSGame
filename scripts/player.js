"use strict";
var Player = (function () {
    function Player(id) {
        this.rotation = 0;
        this.x = 0;
        this.y = 0;
        this.w = 1.0;
        this.h = 1.0;
        this.xv = 0;
        this.yv = 0;
        this.oldx = 0;
        this.oldy = 0;
        this.gravity = .03;
        this.jpower = 0.35;
        this.speed = 0.02;
        this.isJumping = false;
        this.doubleJump = false;
        this.doubleJumpEnabled = false;
        this.isOnFloor = false;
        this.id = id;
    }
    Player.prototype.draw = function () {
        ctx.save();
        ctx.fillStyle = "lime";
        ctx.rotate(this.rotation);
        ctx.translate(this.x * scale + screen_position.x * scale, this.y * scale + screen_position.y * scale);
        ctx.fillRect(0, 0, this.w * scale, this.h * scale);
        ctx.restore();
    };
    Player.prototype.die = function () {
        console.log("killing player.");
    };
    Player.prototype.jump = function () {
        this.yv = -this.jpower;
    };
    Player.prototype.update = function (speed) {
        if (speed === void 0) { speed = 1.0; }
        this.oldx = this.x;
        this.oldy = this.y;
        this.x += this.xv * speed;
        this.y += this.yv * speed;
        if (!this.isOnFloor) {
            this.yv += this.gravity * speed;
        }
        else {
            this.yv = 0;
            if (keys.isPressed("KeyW")) {
                this.yv = -this.jpower;
            }
        }
        this.xv /= 1.2;
    };
    return Player;
}());
