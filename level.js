import Brick from "./brick.js"

const level1 = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]

const level2 = [
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]

const level3 = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]
]

const level4 =[
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0]
]

const level5 = [
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]

export const level = [level1, level2, level3, level4, level5];

export function buildLevel(game, level) {
    let posx = 0
    let posy = 0
    let refBrick = new Brick(game, 0, 0)
    let w = refBrick.width
    let h = refBrick.height;
    let bricks = []
    level.forEach(row => 
        {
            row.forEach((item, itemNum) => {
                if(item!=0)
                {
                    let brick = new Brick(game, posx, posy)
                    bricks.push(brick)
                }
                posx += w
            })
            posx = 0
            posy += h
        })
    return bricks
}