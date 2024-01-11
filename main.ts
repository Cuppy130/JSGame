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


player.x = 1920/4/scale
player.y = 0

function main () {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    screen_position.x = -Math.floor(player.x/(1920/2)*scale)
    screen_position.y = -Math.floor(player.y/(1080/2)*scale)*(1080/2/scale)

    screen_offset.x = (((screen_offset.x - screen_position.x ) / 4) * -2)
    {
        player.isOnFloor = false
        player.update()
        let speed = .5 + 1/3
        speed/=20


        world.forEach(object => {
            switch (object.id) {
                case 0:
                    if(isColliding(player, object)){
                        player.isOnFloor = true
                        player.y = object.y-player.h
                        player.yv = 0;

                    }
                    ctx.save()
                    ctx.fillStyle = 'rgb(0, 0, 0, .5)'
                    ctx.fillRect(object.x*scale+screen_position.x*scale, object.y*scale+screen_position.y*scale, object.w*scale, object.h*scale)
                    ctx.restore()
                    break;
                case 1:
                    if(isColliding(player, object)){
                        player.isOnFloor = true
                        if (player.y <= object.y+object.h) {
                            player.isOnFloor = true
                            player.y = object.y-player.h
                            player.yv = 0;
                        }

                    }
                    ctx.save()
                    ctx.fillStyle = 'red'
                    let x = object.x*scale+screen_offset.x*scale*(1920*1.5/scale)
                    let y = object.y*scale+screen_offset.y*scale*(1080*1.5/scale)
                    ctx.fillRect(x, y, object.w*scale, object.h*scale)
                    ctx.restore()
                    break;
                case 9:
                    if(isColliding(player, object)){
                        player.isOnFloor = true;
                    }
                    ctx.save()
                    ctx.fillStyle = 'cyan'
                    ctx.fillRect(object.x*scale+screen_offset.x*scale, object.y*scale+screen_offset.y*scale, object.w*scale, object.h*scale)
                    ctx.restore()
                    break;
            
                default:
                    break;
            }
        });
        ctx.save();
        ctx.fillRect(0, 0, 80, 40)
        ctx.fillStyle = 'white'
        ctx.fillText(Math.floor(player.x/(1920/2)*scale), 0, 30, 30)
        ctx.restore();
        if(keys.isPressed("KeyA")){
            player.xv-=speed;
        } else if(keys.isPressed("KeyD")){
            player.xv+=speed;
        }
        if(player.isOnFloor&&keys.isPressed("KeyW")){
            player.jump()
        }
    }
    player.draw()

}

loadWorld(0)
setInterval(main, 1000/60);