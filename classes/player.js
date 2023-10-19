class playerClass{
    constructor(keys){
        this.keys = keys
        this.posision = []
        this.keybinds = {
            left: "KeyA",
            right: "KeyD",
            up: "KeyW",
            down: "KeyS",
            jump: "Space"
        }
        //this.vel
    }
    update(){
        let spd = 2;


        let keys = this.keys;
        let kb = this.keybinds;
        if(keys.pressed(kb['left'])){
            pos-=spd;
        }
        if (keys.pressed(kb['right'])){
            pos-=spd;
        }
    }
}