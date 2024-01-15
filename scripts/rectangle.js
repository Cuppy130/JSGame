"use strict";
var Rectangle = (function () {
    function Rectangle(setting) {
        if (setting === void 0) { setting = {}; }
        this.x = 0;
        this.y = 0;
        this.h = 0;
        this.w = 0;
        this.xv = 0;
        this.yv = 0;
        this.t = this.y;
        this.ot = this.t;
        this.b = this.y + this.h;
        this.ob = this.b;
        var v = $.extend({ x: 0, y: 0, w: 1, h: 1 }, setting);
        this.x = v.x;
        this.y = v.y;
    }
    Rectangle.prototype.setTop = function (v) { this.y = v; };
    Rectangle.prototype.setBottom = function (v) { this.y = v - this.h; };
    Rectangle.prototype.setLeft = function (v) { this.x = v; };
    Rectangle.prototype.setRight = function (v) { this.y = v - this.w; };
    Rectangle.prototype.update = function () {
        this.x += this.xv;
        this.y += this.yv;
    };
    return Rectangle;
}());
