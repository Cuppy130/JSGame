class playerClass{
    constructor(keys){
        this.keys = keys
        this.posision = []
        this.keybinds = {
            left: "KeyA",
            right: "KeyD",
            up: "KeyW",
            down: "KeyS"
        }
        //this.vel
    }
    update(){
        let keys = this.keys
        let kb = this.keybinds
        if(keys.pressed(kb['left'])){
            pos-=spd
        }
    }
}