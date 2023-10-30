console.log('loading classes');
function tileImage(imageSource, x, y, ax, ay, bs=30){
    ctx.save()
    var pat = ctx.createPattern(imageSource, "repeat");
    wid = 2/imageSource.width;
    hei = 2/imageSource.height;
    pat.setTransform(new DOMMatrix([wid*bs,0,0,hei*bs,x, y]));
    ctx.fillStyle = pat;
    ctx.fillRect(x*(bs*2), y*(bs*2)*-1, ax * bs*2, ay * bs*2);
    ctx.restore()
}

const ctx = $("#gameWindow")[0].getContext('2d')
const keys = new keyHandler;

const player = new PlayerClass
//const playerCamera =

const clamp = (val, min, max) => {
    return Math.max(Math.min(val, max), min);
}



()=>{
    const perframe = () => {
        player.update(keys);
        player.draw()
    }

    setInterval(()=>{
        perframe()
    }, 1000/144)
}