import Game from "./game.js"

const gBox = document.getElementById('gameBox')
const context = gBox.getContext('2d')

let gWIDTH = gBox.width = window.innerWidth - 20;
let gHEIGHT = gBox.height = window.innerHeight - 20;


let timeStamp = 0
let currentTime = 0
let game = new Game(gWIDTH, gHEIGHT, context)



function gameLoop(timeStamp)
{
    let deltaTime = timeStamp + currentTime
    currentTime = timeStamp
    context.clearRect(0, 0, gWIDTH, gHEIGHT)
    game.draw()
    game.update(deltaTime)
    requestAnimationFrame(gameLoop)
}

requestAnimationFrame(gameLoop)