console.log('loading classes');
function tileImage(imageSource, x, y, ax, ay, bs=30){
    ctx.save()
    var pat = ctx.createPattern(imageSource, "repeat");
    wid = 2/imageSource.width;
    hei = 2/imageSource.height;
    pat.setTransform(new DOMMatrix([wid*bs,0,0,hei*bs,x, y]));
    ctx.fillStyle = pat;
    ctx.fillRect(x*(bs*2), y*(bs*2)*-1, ax * bs*2, ay * bs*2);
    ctx.restore()
}
let zoom = 1.0;
const ctx = $("#gameWindow")[0].getContext('2d')
$("#gameWindow")[0].width = 320
$("#gameWindow")[0].height = 240
const keys = new keyHandler;

const clamp = (val, min, max) => {
    return Math.max(Math.min(val, max), min);
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