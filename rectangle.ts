class Rectangle{
    x: number = 0;
    y: number = 0;
    h: number = 0;
    w: number = 0;
    xv: number = 0;
    yv: number = 0;

    t = this.y;
    ot = this.t;
    b = this.y + this.h;
    ob = this.b;

    constructor(setting : Object = {}){
        let v = $.extend({x: 0, y: 0, w: 1, h: 1},setting);
        
        this.x = v.x
        this.y = v.y
    }
    
    setTop(v: number){this.y=v}
    setBottom(v: number){this.y=v-this.h}
    setLeft(v: number){this.x=v}
    setRight(v: number){this.y=v-this.w}

    update(){
        this.x+=this.xv;
        this.y+=this.yv;
    }
}