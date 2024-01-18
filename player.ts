class Player {
    id: number;

    spawned : Boolean = false;

    rotation: number = 0

    x: number = 0;
    y: number = 0;

    w: number = 0.95;
    h: number = 0.95;

    xv: number = 0;
    yv: number = 0;

    l = this.x;
    ol = this.l;
    r = this.x+this.w;
    or = this.r;
    t = this.y;
    ot = this.t
    b = this.y + this.h;
    ob = this.b

    setTop(v : number) {
        this.y = this.y;
        this.y = v
    }
    setBottom(v : number) {
        this.y = this.y;
        this.y = v - this.h
    }
    setLeft(v : number) {
        this.x = this.x;
        this.x = v
    }
    setRight(v : number) {
        this.x = this.x;
        this.x = v - this.w
    }

    jpower: number = -.5;
    gravity: number = .05;

    isJumping: boolean = false;
    doubleJump: boolean = false;
    doubleJumpEnabled: boolean = false;
    isOnFloor: boolean = false;

    mode: string = 'run' //can either be 'run' for classic gameplay or 'platformer' for new gameplay

    constructor(id: number){
        this.id = id
    }

    draw(){
        ctx.save();
        ctx.fillStyle = "lime"
        ctx.translate(this.x*scale+screen_offset.x*scale*(1920/2/scale), this.y*scale+screen_offset.y*scale*(1080/2/scale));
        if(!this.isOnFloor){
            ctx.rotate(this.rotation*Math.PI/180);
        }
        ctx.fillRect(0, 0, this.w*scale, this.h*scale);
        ctx.restore();
    }

    die(){
        console.log("killing player.")
    }

    update(speed = 1.0){
        this.ot = this.y;
        this.ob = this.y + this.h
        this.ol = this.x;
        this.or = this.x + this.w;

        this.x += this.xv;
        this.y += this.yv;

        this.t = this.y;
        this.b = this.y + this.h;
        this.l = this.x;
        this.r = this.x + this.w;

        this.xv /= 1.2

    }
}