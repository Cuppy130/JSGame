
let world = [
    {id: 1, x: -64/4, y: 15, w: 9999, h: .5, yv: 0, xv: 0},
]

function parseWorld(a:number, b:string){
    switch(a){
        case 1:
            return {'id': parseFloat(b)}
        case 2:
            return {'x': parseFloat(b)}
        case 3:
            return {'y': parseFloat(b)}
        case 6:
            return {'r': parseFloat(b)} // rotation
    }
}

function loadWorld(id=0){
    $.get("/levels/"+id+".txt", data => {
        world = []
        data.split(";").forEach((item : any)=>{
            let object : any = {}
            for(let i=0; i<item.split(",").length; i+=2){
                object = new Object($.extend(object, parseWorld(parseInt(item.split(",")[i]), item.split(",")[i+1]), {w: 1, h: 1}))
            }
            console.log(object)
            world.push(object)
        })
        world.push({id: 0, x: -5000, w: 10000, y: 20, h: 20, xv: 0, yv: 0})
    })
}