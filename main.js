console.log('loading classes');
console.log("creating player")
console.log("creating player Camera")

let zoom = 1.0;

const keys = new keyHandler;

const clamp = (val, min, max) => {
    return Math.max(Max.min(val, max), min);
}

class Player {
    constructor(){
        this.pos=[0,0]
        this.vel={x,y}
    } 
    update(){
        if(keys.pressed("KeyA")){
            this.vel.x--;
        }
        if (keys.pressed("KeyD")){
            this.vel.x++;
        }
        if(!keys.pressed("KeyD") && !keys.pressed("KeyA")){
            this.vel.x /= 3;
        }

        if(keys.pressed('KeyA')){
            this.vel.y--;
        }
        if(keys.pressed('KeyS')){
            this.vel.y++;
        }
        if(!keys.pressed("KeyW") && !keys.pressed("KeyS")){
            this.vel.x /= 3;
        }
    }
}

class camera {
    constructor(player){
        this.pos = [0,0];
        this.vel = [0,0];
        this.follow = player.pos
    }
    update(){
        this.vel[0] = this.pos[0] + this.follow[0] / 3
    }
}
class invisPlayer {

}