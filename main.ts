const canvas : any = document.getElementById("canvas");
const ctx = canvas.getContext('2d')
canvas.width = 1920/2;
canvas.height = 1080/2;

let scale = 30;
let screen_position = {
    x: 0,
    y: 0
} // multiply by scale
let screen_offset = {
    x: 0,
    y: 0
}
const game = {
    mode: 'gameplay' //'gameplay' or 'editor'
}
const mouse = {
    x: 0,
    y: 0,
    mode: 0,
    isHeld: false,
    currentBlock: {x: 0, y: 0}
}

const keys = new InputHandler()
const player = new Player(0)
function clamp ( v: number, m: number, x: number ) {return Math.max(Math.min(v, x), m)}

player.x = -1
player.y = 0

let currentLevel: number = 0;
function nextLevel(){
    currentLevel++;
}

nextLevel()
loadWorld(currentLevel)

const draw = {
    rect: (x:number, y:number, w:number, h:number)=>{
        ctx.save();
        ctx.fillRect(x, y, w, h);
        ctx.restore();
    },
    circ: (x:number, y:number, r:number) => {
        ctx.save();
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 360*Math.PI/180);
        ctx.fill();
        ctx.restore();
    }
}

function main () {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    screen_position.x = -Math.floor(player.x/(1920/2)*scale)
    screen_position.y = -Math.floor(player.y/(1080/2)*scale)

    let screen_velocity = {x: 0, y: 0}
    screen_velocity.x = ((screen_offset.x - screen_position.x) / 4) * -2
    screen_velocity.y = ((screen_offset.y - screen_position.y) / 4) * -2
    
    screen_offset.x += screen_velocity.x;
    screen_offset.y += screen_velocity.y;
    {
        const gamespeed = 1
        player.isOnFloor = false
        player.update(gamespeed)
        let speed = .5 + 1/3
        speed/=20


        blockCollisionsAndDrawing();
        
        if(keys.isPressed("KeyA")){
            player.xv-=speed * gamespeed;
        } else if(keys.isPressed("KeyD")){
            player.xv+=speed * gamespeed;
        }
        
        if(!player.isOnFloor){
            player.yv += player.gravity
        } else {
            player.yv = 0;
            if(keys.isPressed("KeyW")){
                player.yv = player.jpower;
                player.isOnFloor = false;
            }
        }
    }
    player.draw()

}

setInterval(main, 1000/60);