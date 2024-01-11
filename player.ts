class Player {
    id: number;

    rotation: number = 0

    x: number = 0;
    y: number = 0;

    w: number = 1.0;
    h: number = 1.0;

    xv: number = 0;
    yv: number = 0;

    oldx: number = 0;
    oldy: number = 0;

    gravity: number = .03;
    jpower: number = 0.35;
    speed: number = 0.02

    isJumping: boolean = false;
    doubleJump: boolean = false;
    doubleJumpEnabled: boolean = false;
    isOnFloor: boolean = false;


    constructor(id: number){
        this.id = id
    }

    draw(){
        ctx.save();
        ctx.fillStyle = "lime"
        ctx.rotate(this.rotation);
        ctx.translate(this.x*scale+screen_position.x*scale, this.y*scale+screen_position.y*scale);
        ctx.fillRect(0, 0, this.w*scale, this.h*scale);
        ctx.restore();
    }

    die(){
        console.log("killing player.")
    }

    jump(){
        this.yv = -this.jpower
    }

    update(speed = 1.0){
        this.oldx = this.x;
        this.oldy = this.y;

        this.x += this.xv * speed;
        this.y += this.yv * speed;

        if(!this.isOnFloor){
            this.yv += this.gravity * speed
        } else {
            this.yv = 0;
            if(keys.isPressed("KeyW")){
                this.yv = -this.jpower;
            }
        }
        this.xv /= 1.2
    }
}