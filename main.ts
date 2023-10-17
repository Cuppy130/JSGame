function createObject(type){
    switch (type){
        default:
            break;
    }
}

void function render(){

}

const ctx = $("#gameWindow")[0].getContext('2d');
const camera = new camera2D(ctx, ()=>{render()});

void function updateLoop(){
    camera.update();
    requestAnimationFrame(updateLoop)
}