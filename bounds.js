export function detectCollision(ball, object) {
    let bTop = ball.position.y - ball.size
    let bBottom = ball.position.y + ball.size
    let bLeft = ball.position.x - ball.size
    let bRight = ball.position.x + ball.size

    let oTop = object.position.y
    let oBottom = object.position.y + object.height
    let oLeft = object.position.x
    let oRight = object.position.x + object.width

    if(bTop <= oBottom && bBottom >= oTop && bLeft >= oLeft && bRight <= oRight)
    {
        return true
    }
    else
    {
        return false
    }
}

// export function detectCollisionPaddle(ball, object) {
//     let bTop = ball.position.y - ball.size
//     let bBottom = ball.position.y + ball.size
//     let bLeft = ball.position.x - ball.size
//     let bRight = ball.position.x + ball.size

//     let oTop = object.position.y
//     let oBottom = object.position.y + object.height
//     let oLeft = object.position.x
//     let oRight = object.position.x + object.width

//     if(bLeft <= oRight && bRight >= oLeft)
//     {
//         if(bBottom == oTop)
//         {
//             ball.speed.y = -ball.speed.y
//         }
//     }
//     if(bTop < oBottom && bBottom > oTop){
//         if((bLeft <= oRight && bLeft > oLeft) || bRight >= oLeft && bRight < oRight)
//         {
//             ball.speed.x = -ball.speed.x
//         }
//     }
//     else
//     {
//         return false
//     }
// }