
class InputHandler {
    keys: Array<string>;
    constructor(){
        this.keys = [];
        $(window).keydown((event)=>{if(this.keys.indexOf(event.code)===-1){this.keys.push(event.code)}})
        $(window).keyup((event)=>{this.keys.splice(this.keys.indexOf(event.code),1);console.log(event.code, this.keys)})
    }
    isPressed(kc: string){return this.keys.indexOf(kc) >= 0}
}