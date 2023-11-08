const element = $("#main");
const ctx = element[0].getContext('2d');
element[0].width = 1920/3
element[0].height = 1080/3

ctx.fillRect(0,0, 20, 20)

worldItems = {
    blocks: [
        {
            id: 1,
            x: 0,
            y: 0,

        }
    ]
}

for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 50; j++) {
        worldItems.blocks.push({
            id: 1,
            x: i,
            y: j
        })
    }
}