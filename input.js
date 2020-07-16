export default class InputHandler {
    constructor(paddle, game)
    {
        document.addEventListener('keydown', target =>
        {
            switch(target.keyCode)
            {
                case 13 : game.start()
                break;
                case 27 : game.togglePause()
                break;
                case 37 : paddle.moveLeft()
                break;
                case 39 : paddle.moveRight()
                break;
            }
        })

        document.addEventListener('keyup', target =>
        {
            switch(target.keyCode)
            {
                case 37 : 
                if(paddle.speed<0)
                    paddle.stop()
                break;
                case 39 :
                if(paddle.speed>0)
                    paddle.stop()
                break;
            }
        })
    }
}