import { initializeApp } from 'firebase/app';

function clamp (val, min, max) {return Math.min(Math.max(val, min), max)}

const keys = new keyHandler;
const camera = new camera2D;
const player = new Player(keys);
const ctx = $("#gameWindow")[0].getContext('2d');

void function updateLoop(){
    camera.update();
    camera.render(ctx)
    requestAnimationFrame(updateLoop)
}

