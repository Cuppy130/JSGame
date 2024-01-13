
let world: any = [
]

function parseWorld(a:number, b:string){
    switch(a){
        case 1: return {'id': parseFloat(b)}
        case 2: return {'x': parseFloat(b)}
        case 3: return {'y': parseFloat(b)}
        case 4: return {'w': parseFloat(b)}
        case 5: return {'h': parseFloat(b)}
        case 6: return {'r': parseFloat(b)} // rotation
    }
}

function loadWorld(id=0){
    $.get("/levels/"+id+".txt", data => {
        world = []
        data.split(";").forEach((item : any)=>{
            let object : any = {}
            for(let i=0; i<item.split(",").length; i+=2){
                object = new Object($.extend(object, parseWorld(parseInt(item.split(",")[i]), item.split(",")[i+1])))
            }
            world.push(object)
        })
        world.push({id: 0, x: -5000, w: 10000, y: 16, h: 999, xv: 0, yv: 0})
    })
}