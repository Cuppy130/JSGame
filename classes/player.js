function rotate(radians){
    return radians*Math.PI/180
}

const session = {
    'songs': [],
    'selected': {},
    audioElement: new Audio
}

$.getJSON('./levels', data => {
    console.log(`Loading ${data.length} songs...`); //["doc1.jpg", "doc2.jpg", "doc3.jpg"] 
    data.forEach(element=>{
        session['songs'].push(element)
    })
});

function loadSong(songString){
    $.getJSON(`./levels/${songString}`, data => {
        console.log(`Loading ${songString} ...`);
        data.forEach(e=>{
            if(e.endsWith(".sm")){
                const path = `./levels/${songString}/${e}`;
                $.get(path, res=>{
                    result = {}
                    session.selected = res.split('\n');
                    session.selected.forEach(item=>{
                        var itemA = `${item.split("#")[1]}`.toString().split(';')[0];
                        var itemB = itemA.split(":")
                        if(itemB[0] != 'undefined'){
                            switch (itemB[0]){
                                case 'OFFSET':
                                    itemB[1] = Number(itemB[1])
                            }
                            result[itemB[0]] = itemB[1]
                        }
                    })
                    session.selected = {
                        data: result
                    }
                })
            }
        })
    });
    
}