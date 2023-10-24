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