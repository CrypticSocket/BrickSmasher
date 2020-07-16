import { detectCollision } from "./bounds.js"

export default class Brick {
    constructor(game, posX, posY)
    {
        this.game = game
        this.gwidth = game.width
        this.context = game.context
        this.width = this.gwidth/11
        this.height = 40
        this.position = {
            x : posX,
            y : posY
        }

        this.markedForDeletion = false
    }

    update()
    {
        if(detectCollision(this.game.ball, this))
        {
            this.game.ball.speed.y = -this.game.ball.speed.y
            this.markedForDeletion = true
            this.game.remBricks--
        }
    }

    draw()
    {
        this.context.beginPath()
        this.context.lineWidth = 3
        this.context.strokeStyle = 'black'
        this.context.fillStyle = 'brown'
        this.context.fillRect(this.position.x, this.position.y, this.width, this.height)
        this.context.strokeRect(this.position.x, this.position.y, this.width, this.height)
        this.context.closePath()
    }

}