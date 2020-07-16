import { detectCollision } from "./bounds.js"

export default class Ball {
    constructor(game)
    {
        this.context = game.context
        this.game = game
        this.size = 10
        this.w = game.width
        this.h = game.height
        

        this.start()
    }

    start()
    {
        this.position = {
            x : 40, 
            y : 100
        }
        this.speed = {
            x : 8,
            y : -2
        }
    }

    draw()
    {
        this.context.beginPath();
        this.context.arc(this.position.x, this.position.y, this.size, 0, 2*Math.PI)
        this.context.fillStyle = 'red'
        this.context.fill()
        this.context.closePath();
    }

    update(deltaTime)
    {
        if(this.position.x > this.w - this.size || this.position.x < 0 + this.size)
        {
            this.speed.x = -this.speed.x
        }
        if(this.position.y <= 0 + this.size || detectCollision(this, this.game.paddle))
        {
            this.speed.y = -this.speed.y
        }
        if(this.position.y > this.h - this.size)
        {
            this.game.lives -= 1
            this.start()
        }
        this.position.x += this.speed.x
        this.position.y += this.speed.y
    }
}