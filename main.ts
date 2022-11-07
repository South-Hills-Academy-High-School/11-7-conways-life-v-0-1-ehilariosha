function drawGrid () {
    gridSprites = []
    currentY = 0
    for (let row of grid) {
        currentX = 0
        for (let gridSpace of row) {
            if (gridSpace == 1) {
                gridSprite = sprites.create(img`
                    3 b b 3 a a b b b 3 
                    b b c c 3 c c a b b 
                    b c a c a c a c a b 
                    b c c a c a c a c 3 
                    3 a a c c a a c c a 
                    a c c a a c c a a 3 
                    3 c a c a c a c c b 
                    b a c a c a c a c b 
                    b b a c c 3 c c b b 
                    3 b b b a a 3 b b 3 
                    `, SpriteKind.Player)
                gridSprite.setPosition(currentX, currentY)
                gridSprites.push(gridSprite)
            }
            currentX += 10
        }
        currentY += 10
    }
}
let gridSprite: Sprite = null
let currentX = 0
let currentY = 0
let gridSprites: Sprite[] = []
let grid: number[][] = []
let rowTemplate = [
0,
1,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0
]
grid = []
for (let index = 0; index < 12; index++) {
    grid.push(rowTemplate)
}
game.onUpdate(function () {
    drawGrid()
})
