function blockCollisionsAndDrawing(): void {
    world.forEach((object : any) => {
        let x = object.x*scale+screen_offset.x*scale*(1920/2/scale)
        let y = object.y*scale+screen_offset.y*scale*(1080/2/scale)
        switch (object.id) {
            case 0:
                handleSolidBlock(player, object)
                ctx.fillStyle = 'rgb(0, 0, 0, .5)'
                draw.rect(x, y, object.w*scale, object.h*scale)
                break;
            case 1:
                handleSolidBlock(player, object)
                ctx.fillStyle = 'black'
                draw.rect(x, y, object.w*scale, object.h*scale)
                break;
            case 2:
                if(isColliding(player, object)){
                    player.gravity = 0.005
                } else {
                    player.gravity = 0.05
                }
                ctx.fillStyle = 'rgb(0, 0, 0, .25)'
                draw.rect(x, y, object.w*scale, object.h*scale)
                break;
            case 3:
                if(!player.spawned){
                    player.spawned = true;
                    player.x = object.x;
                    player.y = object.y;
                }
                ctx.fillStyle = 'rgb(0, 255, 0, .75)'
                draw.circ(x+scale/2, y+scale/2, scale/2)
                break;
            case 4:
                ctx.fillStyle = 'yellow'
                draw.circ(x+scale/2, y+scale/2, scale/2)
                if(isColliding(player, object)){
                
                    ctx.fillStyle = 'red'
                    draw.circ(x+scale/2, y+scale/2, scale/2)

                    if(keys.isPressed("KeyW")){
                        player.yv = -.75;
                    }
                        
                }
                break;
            case 5:
                ctx.fillStyle = 'purple'
                draw.rect(x,y,scale*object.w,scale*object.h);
                if(isColliding(player, object)){
                    player.yv = -.5
                }
            case 6:
                ctx.fillStyle = 'yellow';
                draw.rect(x,y,scale*object.w,scale*object.h);
                if(isColliding(player, object)){
                    player.yv = -.75;
                }
                break;
            default:
                break;
        }
    });
}