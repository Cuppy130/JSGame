class perframe {
    callback;
    constructor(callback: Function) {
        this.callback = callback;
        this.loop()
    }
    private loop(){
        requestAnimationFrame(this.loop)
    }
}

function tileImageCTX(ctx: CanvasRenderingContext2D, callback: Function): void {
    
}