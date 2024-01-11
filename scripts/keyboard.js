"use strict";
var InputHandler = (function () {
    function InputHandler() {
        var _this = this;
        this.keys = [];
        $(window).keydown(function (event) { if (_this.keys.indexOf(event.code) === -1) {
            _this.keys.push(event.code);
        } });
        $(window).keyup(function (event) { _this.keys.splice(_this.keys.indexOf(event.code), 1); console.log(event.code, _this.keys); });
    }
    InputHandler.prototype.isPressed = function (kc) { return this.keys.indexOf(kc) >= 0; };
    return InputHandler;
}());
