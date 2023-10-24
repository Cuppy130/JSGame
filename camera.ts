// written by ExtinctOranges
class camera2D {
    position: {x: 0, y: 0};
    focus: {x: 0, y: 0};
    offset: {x: 0, y: 0}
    constructor(){
        this.position = {x: 0, y: 0};
        this.focus = {x: 0, y: 0};
    }
    update(){
        let v = this.position.x + this.focus.x
        this.position.x += v/2        
    }
    render(ctx: CanvasRenderingContext2D, Callback: Function){
        ctx.translate(this.position.x, this.position.y)
        Callback(this.position.x, this.position.y);
    }
}