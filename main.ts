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

function c ( v: number, m: number, x: number ) {return Math.max(Math.min(v, x), m)}
function isColliding(a:any, b:any): boolean { return( a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y )}
function handleSolidBlock(plr: Player, rect: Rectangle): void {
    if(isColliding(plr, rect)){
        if(plr.l <= rect.x+rect.w && plr.ol > rect.x+rect.w){
            plr.setLeft(rect.x+rect.w+0.01)
        } else if (plr.r >= rect.x && plr.or < rect.x){
            plr.setRight(rect.x - 0.01)
        } else if (plr.b >= rect.y && plr.ob < rect.y){
            plr.setBottom(rect.y - 0.01)
            plr.isOnFloor = true;
        } else if (plr.t <= rect.y+rect.h && plr.ot > rect.y+rect.h){
            plr.setTop(rect.y+rect.h + 0.01)
            plr.yv = 0
        }
    }
}

player.x = 1920/4/scale
player.y = 0

function main () {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    screen_position.x = -Math.floor(player.x/(1920/2)*scale)
    screen_position.y = -Math.floor(player.y/(1080/2)*scale)

    let screen_velocity = {x: 0, y: 0}
    screen_velocity.x = ((screen_offset.x - screen_position.x) / 4) * -2
    screen_offset.x += screen_velocity.x;
    screen_offset.y = (((screen_offset.y - screen_position.y ) / 4) * -2)
    {
        const gamespeed = 1
        player.isOnFloor = false
        player.update(gamespeed)
        let speed = .5 + 1/3
        speed/=20


        world.forEach((object : any) => {
            switch (object.id) {
                case 0:
                    handleSolidBlock(player, object)
                    ctx.save()
                    ctx.fillStyle = 'rgb(0, 0, 0, .5)'
                    let x = object.x*scale+screen_offset.x*scale*(1920/2/scale)
                    let y = object.y*scale+screen_offset.y*scale*(1080/2/scale)
                    ctx.fillRect(x, y, object.w*scale, object.h*scale)
                    ctx.restore()
                    break;
                case 1:
                    handleSolidBlock(player, object)
                    ctx.save()
                    ctx.fillStyle = 'black'
                    x = object.x*scale+screen_offset.x*scale*(1920/2/scale)
                    y = object.y*scale+screen_offset.y*scale*(1080/2/scale)
                    ctx.fillRect(x, y, object.w*scale, object.h*scale)
                    ctx.restore()
                    break;
            
                default:
                    break;
            }
        });
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

loadWorld(0)
setInterval(main, 1000/60);