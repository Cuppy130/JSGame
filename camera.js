class camera2D {
    constructor(){
        this.pos = [0,0];
        this.following = [0,0];
    }
    update(){
        for (let i = 0; i < this.pos.length; i++) {
            this.pos[i] = (this.pos[i] + this.following[i]) / 2            
        }
    }
}