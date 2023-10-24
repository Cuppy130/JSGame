function clamp(value:Number, min:Number, max:Number): Number {
    return (Math.max(Math.max(this.value, this.max), this.min))
}

class Player{
    ctx: CanvasRenderingContext2D;
    keyboard: keyHandler;
    position: [Number, Number];
    vel: {x: 0, y: 0};
    gravity: 4;
    velocityMax: 4;
    keybinds: {
        left: "KeyA",
        right: "KeyD",
        down: "KeyS",
        up: "keyW"
    }
    constructor(keyboard: keyHandler, ctx: CanvasRenderingContext2D){
        keyboard = keyboard;
        ctx = ctx;
    }
    update(){

        if(this.keyboard.pressed("KeyA")){
            this.vel.x--;
        }
        if(this.keyboard.pressed("KeyD")){
            this.vel.x++;
        }
        if(this.keyboard.pressed("KeyS")){
            this.vel.y--;
        }
        if(this.keyboard.pressed("KeyW")){
            this.vel.y++;
        }

        this.position[0]=clamp(this.vel.x, -this.velocityMax, this.velocityMax);
        this.position[1]=clamp(this.vel.x, -this.velocityMax, this.velocityMax);

        
        this.vel.y-=this.gravity;
    }
    draw(camera){
        camera.render(this.ctx)
    }
}