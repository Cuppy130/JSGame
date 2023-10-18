<<<<<<< HEAD
import { initializeApp } from 'firebase/app';

function clamp (val, min, max) {return Math.min(Math.max(val, min), max)}

const keys = new keyHandler;
const camera = new camera2D;
const player = new Player(keys);
const ctx = $("#gameWindow")[0].getContext('2d');
=======
import {  } from "firebase/app";
import {  } from "firebase/auth";
import {  } from "firebase/database";

class Player{
    constructor(keyboard){
        this.keyboard = keyboard || null;
        this.pos = {x: 0, y: 0};
        this.drag = .6;
        this.vel = {x: 0, y: 0};
        this.gravity = 9.8;
        this.keybinds = {
            left: "KeyA",
            right: "KeyD",
            down: "KeyS",
            up: "keyW"
        };
    }
    update(){
        
    }
}

function createPlayer(keyboard, Callback){
    const player = new Player(keyboard);
    Callback(player)
    return player;
}

function createObject(type){
    switch (type){
        default:
            break;
    }
}

const camera = new camera2D;
>>>>>>> 45b11a0 (push)

void function updateLoop(){
    camera.update();
    camera.render(ctx)
    requestAnimationFrame(updateLoop)
}

