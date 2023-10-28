console.log('loading classes');

let zoom = 1.0;
const ctx = $("#gameWindow")[0].getContext('2d')
$("#gameWindow")[0].width = 320
$("#gameWindow")[0].height = 240
const keys = new keyHandler;

const clamp = (val, min, max) => {
    return Math.max(Math.min(val, max), min);
}

class playerClass {
    constructor(){
        this.pos=[0,0]
        this.vel=[0, 0]
        this.size = 2
    } 
    update(){
        if(keys.pressed("KeyA")){
            this.vel[0]--;
        }
        if (keys.pressed("KeyD")){
            this.vel[0]++;
        }
        if(!keys.pressed("KeyD") && !keys.pressed("KeyA")){
            this.vel[0] /= 3;
        }

        if(keys.pressed('KeyA')){
            this.vel[1]--;
        }
        if(keys.pressed('KeyS')){
            this.vel[1]++;
        }
        if(!keys.pressed("KeyW") && !keys.pressed("KeyS")){
            this.vel[1] /= 3;
        }
    }
    draw(){
        ctx.save();
        ctx.translate(this.pos[0], this.pos[1]);
        ctx.beginPath();
        ctx.rect(-(this.size/2)*zoom, -(this.size/2)*zoom, this.size, this.size);
        ctx.restore();
    }
}

class camera {
    constructor(player){
        this.pos = [0,0];
        this.vel = [0,0];
        this.follow = player.pos
    }
    update(){
        this.vel[0] = this.pos[0] + this.follow[0] / 1.5
    }
    newFollow(array){
        this.follow = array
    }
    draw(){
        ctx.save();
        ctx.translate(this.pos[0], this.pos[1])
    }
}
class playerFake {
}



const player = new playerClass;
const playerCamera = new camera(player)

console.log("starting loops")

//render loop
setInterval(() => {
    ctx.clearRect(0,0,640/2,480/2)
    player.draw()
    playerCamera.draw()
}, 1000/60);

function loop() {
    player.update()
    playerCamera.update()
    requestAnimationFrame(loop);
}

blocks = {
}

for(let i=0; i<1; i++){
    blocks[i] = new Image;
    blocks[i].src = `blocks/${i}.webp`;
}
ctx.save()
ctx.drawImage(blocks['0'], 20, 20, 20, 20)
ctx.beginPath()
ctx.rect(0, 0, 20, 20)
ctx.restore()