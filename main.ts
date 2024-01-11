const canvas : any = document.getElementById("canvas");
const ctx = canvas.getContext('2d')
canvas.width = 1920/2;
canvas.height = 1080/2;

let scale = 30;
let screen_position = {
    x: 0,
    y: 0
} // multiply by scale

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

let world = [
    {id: 1, x: -64/4, y: 15, w: 64, h: .5},
    {id: 1, x: 3, y: 13, w: 2, h: 1},
    {id: 1, x: 10, y: 13, w: 2, h: 2}
]

player.x = (1920/4/scale)

function main () {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    screen_position.x = -Math.floor(player.x/(1920/2)*scale)*(1920/2/scale)
    screen_position.y = -Math.floor(player.y/(1080/2)*scale)*(1080/2/scale)
    {
        player.isOnFloor = false
        player.update()
        let speed = .5 + 1/3
        speed/=20

        world.forEach(object => {
            switch (object.id) {
                case 1:
                    if(isColliding(player, object)){
                        player.isOnFloor = true
                        if(player.x<(object.x+object.w)/2){
                            player.x = object.x-player.w
                        }
                        if(player.y<object.y+object.h/2){
                            player.y = object.y-player.h
                            player.yv = 0;
                        } else {
                            player.y = object.y+object.h
                            player.yv = 0;
                            player.isOnFloor = false
                        }

                    }
                    ctx.save()
                    ctx.fillStyle = 'red'
                    ctx.fillRect(object.x*scale+screen_position.x*scale, object.y*scale+screen_position.y*scale, object.w*scale, object.h*scale)
                    ctx.restore()
                    break;
            
                default:
                    break;
            }
        });

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
setInterval(main, 1000/60);