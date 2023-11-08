const KEYS = new keyHandler;
let position = [0, 0];
let velocity = [0, 0];
let speed = 1.5 + 2/3;
let gravity = 3;
let frameRate = 60;
let jumppower = gravity * -2;

let doubleJumpEnabled = false;
let doubleJump = false

let isOnFloor = false

function moveLeft(){
    velocity[0] -= speed;
}

function moveRight(){
    velocity[0] += speed;
}

function jump(){
    velocity[1] -jumppower;
}

function update(){
    for (let i = 0; i < 2; i++) {
        position[i] += velocity[i];
    }

    KEYS.pressed("KeyA") ?? moveLeft();
    KEYS.pressed("KeyD") ?? moveRight();
    KEYS.pressed("KeyW") ?? jump();
    KEYS.pressed("Space") ?? jump();

    draw();
}

function draw() {
    ctx.clearRect();
    ctx.fillRect(0, 0, 20, 20);
    
    drawWorld()
}

function drawWorld() {
    
}

setInterval(update, 1000/frameRate)