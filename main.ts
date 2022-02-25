input.onButtonPressed(Button.A, function () {
    Birds.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    Birds.change(LedSpriteProperty.Y, 1)
})
let EmptyObstacleY = 0
let Birds: game.LedSprite = null
let Ticks = 0
let Obstacle: game.LedSprite[] = []
Birds = game.createSprite(2, 2)
Birds.set(LedSpriteProperty.Blink, 300)
basic.forever(function () {
    let list: number[] = []
    while (Obstacle.length > 0 && list[0] == 0) {
        Obstacle.removeAt(0).delete()
    }
    for (let Obstacle2 of Obstacle) {
        Obstacle2.change(LedSpriteProperty.X, -1)
    }
    if (Ticks % 3 == 0) {
        EmptyObstacleY = randint(0, 4)
        for (let Index = 0; Index <= 4; Index++) {
            if (Index != EmptyObstacleY) {
                Obstacle.push(game.createSprite(4, Index))
            }
        }
    }
    for (let Obstacle3 of Obstacle) {
        if (Obstacle3.get(LedSpriteProperty.X) == Birds.get(LedSpriteProperty.X) && Obstacle3.get(LedSpriteProperty.Y) == Birds.get(LedSpriteProperty.Y)) {
            game.gameOver()
        }
    }
    Ticks += 1
    basic.pause(1000)
})
