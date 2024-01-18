class Rectangle{
    id: number = 0;

    x: number = 0;
    y: number = 0;
    h: number = 0;
    w: number = 0;
    xv: number = 0;
    yv: number = 0;

    t: number = this.y;
    ot: number = this.t;
    b: number = this.y+this.h;
    ob: number = this.b+this.h;
    l: number = this.x;
    ol: number = this.x;
    r: number = this.x+this.w;
    or: number = this.x+this.w;

    constructor(setting : any = {}){
        let v = $.extend({x: 0, y: 0, w: 1, h: 1, xv: 0, yv: 0},setting);
        this.id = v.id;
        this.x = v.x;
        this.y = v.y;
        this.w = v.w;
        this.h = v.h;
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