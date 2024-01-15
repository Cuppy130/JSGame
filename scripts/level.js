"use strict";
var world = [];
function parseWorld(a, b) {
    switch (a) {
        case 1: return { 'id': parseFloat(b) };
        case 2: return { 'x': parseFloat(b) };
        case 3: return { 'y': parseFloat(b) };
        case 4: return { 'w': parseFloat(b) };
        case 5: return { 'h': parseFloat(b) };
        case 6: return { 'r': parseFloat(b) };
    }
}
function loadWorld(id) {
    if (id === void 0) { id = 0; }
    $.get("/levels/" + id + ".json", function (data) {
        world = [];
        data.forEach(function (item) {
            world.push($.extend({ id: 1, x: 0, y: 0, xv: 0, yv: 0 }, item));
        });
    });
}
