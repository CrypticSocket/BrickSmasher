export default class Paddle {
    
    constructor(game)
    {
        this.gwidth = game.width
        this.gheight = game.height
        this.context = game.context

        this.width = 200;
        this.height = 20;

        this.fixSpeed = 10;
        this.speed = 0

        this.position = {
            x: this.gwidth/2 - this.width/2,
            y: this.gheight - this.height - 10
        }
    }

    update(deltaTime)
    {
        this.position.x += this.speed
        if(this.position.x < 0 || this.position.x > this.gwidth - this.width)
        {
            this.speed = 0
        }
    }

    draw(context)
    {
        context.fillStyle = '#096'
        context.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    moveLeft()
    {
        if(this.position.x > 0)
        {
            this.speed = -this.fixSpeed
        }
        else{
            this.speed = 0
        }
    }

    moveRight()
    {
        if(this.position.x < this.gwidth - this.width)
        {
            this.speed = this.fixSpeed
        }
        else{
            this.speed = 0
        }
    }

    stop()
    {
        this.speed = 0
    }
}