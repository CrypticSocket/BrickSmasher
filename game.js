import Paddle from "./paddle.js"
import Ball from "./ball.js"
import { level, buildLevel } from "./level.js"

import InputHandler from "./input.js"

const GAMESTATE = {
    PAUSED : 0, 
    RUNNING : 1,
    MENU : 2, 
    GAMEOVER : 3, 
    WINNER : 4
}

export default class Game {
    constructor(w, h, context)
    {
        this.context = context
        this.width = w
        this.height = h
        this.paddle = new Paddle(this)
        this.ball = new Ball(this)
        new InputHandler(this.paddle, this)
        this.currentLevel = 0
        this.bricks = []
        this.loadLevel()
        this.object = [this.paddle, this.ball, ...this.bricks]
        this.gameState = GAMESTATE.MENU
        this.lives = 3
        this.remBricks = this.bricks.length
    }

    loadLevel()
    {
        this.bricks = buildLevel(this, level[this.currentLevel])
        this.object = [this.paddle, this.ball, ...this.bricks]
        this.remBricks = this.bricks.length
    }

    togglePause()
    {
        if(this.gameState == GAMESTATE.RUNNING)
        {
            this.gameState = GAMESTATE.PAUSED
        }
        else{
            this.gameState = GAMESTATE.RUNNING
        }
    }

    start()
    {
        if(this.gameState == GAMESTATE.WINNER)
        {
            this.gameState = GAMESTATE.MENU
            this.currentLevel = 0
        }
        else if(this.gameState == GAMESTATE.GAMEOVER)
        {
            return;
        }
        else{
            this.gameState = GAMESTATE.RUNNING
        }
    }

    draw()
    {
        this.object.forEach(obj => {
            obj.draw(this.context)
        })

        if(this.gameState == GAMESTATE.PAUSED)
        {
            this.context.fillStyle = 'rgba(0,0,0,0.5)'
            this.context.fillRect(0, 0, this.width, this.height)
            this.context.font = "30px Arial"
            this.context.textAlign = 'center'
            this.context.fillStyle = 'white'
            this.context.fillText('PAUSED', this.width/2, this.height/2)
        }

        if(this.gameState == GAMESTATE.MENU)
        {
            this.context.fillStyle = 'rgba(0,0,0,1)'
            this.context.fillRect(0, 0, this.width, this.height)
        
            this.context.font = "80px Arial"
            this.context.textAlign = 'center'
            this.context.fillStyle = '#F2AA4C'
            this.context.fillText('BRiCK BReakER!', this.width/2, 100)

            this.context.font = "50px Arial"
            this.context.fillStyle = '#F2AA4C'
            this.context.fillText('Press RETURN to start!', this.width/2, this.height/2 - 40)

            this.context.fillStyle = '#E94B3C'
            this.context.font = "50px Arial"
            this.context.fillText('You have 3 Lives', this.width/2, this.height/2 +40)

            this.context.font = "40px Arial"
            this.context.fillStyle = 'white'
            this.context.fillText('Press ESC to Pause', this.width/2, this.height - 100)

            this.context.font = "30px Arial"
            this.context.fillText('LEFT ARROW KEY to move left', 300, this.height - 40)
            this.context.fillText('RIGHT ARROW KEY to move right', this.width - 300, this.height - 40)
        }

        if(this.gameState == GAMESTATE.GAMEOVER)
        {
            this.context.fillStyle = 'rgba(100,0,0,0.8)'
            this.context.fillRect(0, 0, this.width, this.height)
            this.context.font = "30px Arial"
            this.context.textAlign = 'center'
            this.context.fillStyle = 'white'
            this.context.fillText('GAME OVER', this.width/2, this.height/2)
        }

        if(this.gameState == GAMESTATE.WINNER)
        {
            this.context.fillStyle = 'rgba(0,0,100,0.8)'
            this.context.fillRect(0, 0, this.width, this.height)
            this.context.font = "30px Arial"
            this.context.textAlign = 'center'
            this.context.fillStyle = 'white'
            this.context.fillText('Winner!', this.width/2, this.height/2)
        }

    }

    update(deltaTime)
    {
        if(this.gameState == GAMESTATE.PAUSED || this.gameState == GAMESTATE.MENU || this.gameState == GAMESTATE.GAMEOVER || this.gameState == GAMESTATE.WINNER)
        {
            return;
        }

        this.object.forEach(obj =>{
            obj.update(deltaTime)
        })

        if(this.lives == 0)
        {
            this.gameState = GAMESTATE.GAMEOVER
        }
        this.object = this.object.filter(obj => !obj.markedForDeletion)

        if(this.remBricks == 0)
        {
            this.currentLevel++
            if(this.currentLevel == level.length)
            {
                this.gameState = GAMESTATE.WINNER
            }
            else{
                this.loadLevel()
                this.ball.start()
                this.draw()
            }
        }
    }
}