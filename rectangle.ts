class Rectangle{
    settings;
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
        this.settings = setting;
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