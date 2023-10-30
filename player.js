class PlayerClass {
    constructor(){
        this.pos = [0, 0];
        this.vel = [0, 0];
        this.size = 2;
        this.speed = 2
        this.speedMax = 20
    }
    update(keys){
        if(keys.pressed("KeyA") && keys.pressed("KeyD")) {
            this.vel[0] /= decelerate;
        } else if (keys.pressed("KeyA")){
            this.vel[0]-=this.speed;
        } else if (keys.pressed("KeyD")){
            this.vel[0]+=this.speed;
        } else {
            this.vel[0] /= decelerate;
        }

        if(keys.pressed("KeyW") && keys.pressed("KeyS")) {
            this.vel[0] /= decelerate;
        } else if (keys.pressed("KeyW")){
            this.vel[0]-=this.speed;
        } else if (keys.pressed("KeyS")){
            this.vel[0]+=this.speed;
        } else {
            this.vel[0] /= decelerate;
        }
        //clamp
        this.vel[0] = clamp(this.vel[0], -this.speedMax, this.speedMax)
        this.vel[1] = clamp(this.vel[1], -this.speedMax, this.speedMax)

        //update
        this.pos[0] += this.vel[0];
        this.pos[1] += this.vel[1];
    }
    draw(){
        ctx.save()
        ctx.translate(this.pos[0, pos[1]])
        ctx.fillRect(-10, -10, 20, 20)
        ctx.restore()
    }
}