const KEYS = new keyHandler;

export default class Player {
    constructor(){
        this.position = {x: 0, y: 0};
        this.velocity = {x: 0, y: 0};
        this.speed = 1.5 + 2/3;
    }
}
let isOnFloor = false

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

setInterval(update, 1000/frameRate)