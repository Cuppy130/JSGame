class camera2D {
    constructor(ctx, renderCallback=()=>{}){
        this.pos = [0,0];
        this.following = [0,0];
        this.ctx = ctx || new CanvasRenderingContext2D;
        this.callback = renderCallback;
    }
    update(){
        for (let i = 0; i < this.pos.length; i++) {
            this.pos[i] = (this.pos[i] + this.following[i]) / 2;
        }
    }
    render(){
        this.ctx.translate(pos[0], pos[1]);
        this.callback();
    }
}