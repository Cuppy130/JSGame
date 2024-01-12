const canvas : any = document.getElementById("canvas");
const ctx = canvas.getContext('2d')
canvas.width = 1920/2;
canvas.height = 1080/2;

let scale = 25;
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
function handleSolidBlock(a:any, b:any): void {
    if(isColliding(a, b)){
        if(a.oldy >= b.y - b.h && a.y < b.y){
            a.y = b.y - a.y
        }
        else if(a.oldx = b.x - b.w && a.x <= b.x){
            a.x = b.x - a.w
        }
    }
}

player.x = 1920/4/scale
player.y = 0

function main () {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    screen_position.x = -Math.floor(player.x/(1920/2)*scale)
    screen_position.y = -Math.floor(player.y/(1080/2)*scale)

    screen_offset.x = (((screen_offset.x - screen_position.x ) / 4) * -2)
    screen_offset.y = (((screen_offset.y - screen_position.y ) / 4) * -2)
    {
        player.isOnFloor = false
        player.update()
        let speed = .5 + 1/3
        speed/=20


        world.forEach((object : any) => {
            switch (object.id) {
                case 0:
                    if(isColliding(player, object)){
                        player.isOnFloor = true
                        player.y = object.y-player.h
                        player.yv = 0;

                    }
                    ctx.save()
                    ctx.fillStyle = 'rgb(0, 0, 0, .5)'
                    let x = object.x*scale+screen_offset.x*scale*(1920*1.5/scale)
                    let y = object.y*scale+screen_offset.y*scale*(1080*1.5/scale)
                    ctx.fillRect(x, y, object.w*scale, object.h*scale)
                    ctx.restore()
                    break;
                case 1:
                    handleSolidBlock(player, object)
                    ctx.save()
                    ctx.fillStyle = 'black'
                    x = object.x*scale+screen_offset.x*scale*(1920*1.5/scale)
                    y = object.y*scale+screen_offset.y*scale*(1080*1.5/scale)
                    ctx.fillRect(x, y, object.w*scale, object.h*scale)
                    ctx.restore()
                    break;
            
                default:
                    break;
            }
        });
        ctx.save();
        ctx.fillRect(0, 0, 80, 40)
        ctx.fillStyle = 'white'
        ctx.fillText(Math.floor(player.y/(1080/2)*scale), 0, 30, 30)
        ctx.restore();
        if(keys.isPressed("KeyA")){
            player.xv-=speed;
        } else if(keys.isPressed("KeyD")){
            player.xv+=speed;
        }
        if(keys.isPressed("KeyW")){
            player.yv-=speed;
        } else if(keys.isPressed("KeyS")){
            player.yv+=speed;
        }
    }
    player.draw()

}

loadWorld(0)
setInterval(main, 1000/60);