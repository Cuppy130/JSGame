function isColliding(a:any, b:any): boolean { return( a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y )}
function handleSolidBlock(plr: Player, rect: Rectangle): void {
    if(isColliding(plr, rect)){
        if(plr.l <= rect.x+rect.w && plr.ol > rect.x+rect.w){
            plr.setLeft(rect.x+rect.w+0.01);plr.xv=0;
        } else if (plr.r >= rect.x && plr.or < rect.x){
            plr.setRight(rect.x - 0.01);plr.xv=0;
        } else if (plr.b >= rect.y && plr.ob < rect.y){
            plr.setBottom(rect.y - 0.01)
            plr.isOnFloor = true;
        } else if (plr.t <= rect.y+rect.h && plr.ot > rect.y+rect.h){
            plr.setTop(rect.y+rect.h + 0.01);
            plr.yv = 0;
        }
    }
}
