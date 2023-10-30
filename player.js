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
            this.vel[0] /= 1.5;
        } else if (keys.pressed("KeyA")){
            this.vel[0]-=this.speed;
        } else if (keys.pressed("KeyD")){
            this.vel[0]+=this.speed;
        } else {
            this.vel[0] /= 1.5;
        }

        if(keys.pressed("KeyW") && keys.pressed("KeyS")) {
            this.vel[0] /= 1.5;
        } else if (keys.pressed("KeyW")){
            this.vel[0]-=this.speed;
        } else if (keys.pressed("KeyS")){
            this.vel[0]+=this.speed;
        } else {
            this.vel[0] /= 1.5;
        }
    }
}