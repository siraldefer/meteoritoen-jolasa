input.onButtonPressed(Button.A, function () {
    jokalari.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    jokalari.change(LedSpriteProperty.X, 1)
})
let meteorito: game.LedSprite = null
let jokalari: game.LedSprite = null
jokalari = game.createSprite(2, 4)
basic.forever(function () {
    basic.pause(randint(1000, 1500))
    meteorito = game.createSprite(randint(1, 4), 1)
    for (let index = 0; index < 4; index++) {
        basic.pause(200)
        meteorito.change(LedSpriteProperty.Y, 1)
    }
    if (meteorito.isTouching(jokalari)) {
        game.gameOver()
    } else {
        game.addScore(1)
        meteorito.delete()
    }
})
