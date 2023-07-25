input.onButtonPressed(Button.A, function () {
    Bird.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    Bird.change(LedSpriteProperty.Y, 1)
})
let emptyobstaclesY = 0
let Ticks = 0
let Bird: game.LedSprite = null
let Index = 0
let Obstacles: game.LedSprite[] = []
Bird = game.createSprite(0, 2)
Bird.set(LedSpriteProperty.Blink, 300)
basic.forever(function () {
    while (Obstacles.length > 0 && Obstacles[0].get(LedSpriteProperty.X) == 0) {
        Obstacles.removeAt(0).delete()
    }
    for (let obstacles2 of Obstacles) {
        obstacles2.change(LedSpriteProperty.X, -1)
    }
    if (Ticks % 2 == 0) {
        emptyobstaclesY = randint(0, 4)
        for (let Index2 = 0; Index2 <= 4; Index2++) {
            if (Index2 != emptyobstaclesY) {
                Obstacles.push(game.createSprite(4, Index2))
            }
        }
    }
    for (let obstacles3 of Obstacles) {
        if (obstacles3.get(LedSpriteProperty.X) == Bird.get(LedSpriteProperty.X) && obstacles3.get(LedSpriteProperty.Y) == Bird.get(LedSpriteProperty.Y)) {
            game.gameOver()
        }
    }
    Ticks += 1
    basic.pause(700)
})
