namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.oceanSand8, function (sprite, location) {
    うちゅうせん.destroy(effects.fire, 500)
    game.over(false, effects.dissolve)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    かくど = "ひだり"
    うちゅうせん.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 . . 
. . . . . 2 c 2 2 2 2 2 2 4 2 . 
. . . . 2 c c 2 2 2 2 2 2 4 c 2 
. . d 2 4 c c 2 4 4 4 4 4 4 c c 
. d 2 2 4 c b e e e e e e e 2 c 
. 2 2 2 4 b e e b b b e b b e 2 
. 2 2 2 2 2 e b b b b e b b b e 
. 2 2 2 2 e 2 2 2 2 2 e 2 2 2 e 
. 2 d d 2 e f e e e f e e e e e 
. d d 2 e e e f e e f e e e e e 
. e e e e e e e f f f e e e e e 
. e e e e f f f e e e e f f f f 
. . . e f f f f f e e f f f f f 
. . . . f f f f . . . . f f f . 
. . . . . . . . . . . . . . . . 
`)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (かくど == "まっすぐ") {
        うちゅうせん.setVelocity(0, -20)
    } else if (かくど == "ひだり") {
        うちゅうせん.setVelocity(-6, -20)
    } else {
        うちゅうせん.setVelocity(6, -20)
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    かくど = "みぎ"
    うちゅうせん.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . 2 2 2 2 2 2 2 2 . . . . 
. . . 2 4 2 2 2 2 2 2 c 2 . . . 
. . 2 c 4 2 2 2 2 2 2 c c 2 . . 
. 2 c c 4 4 4 4 4 4 2 c c 4 2 d 
. 2 c 2 e e e e e e e b c 4 2 2 
. 2 2 e b b e b b b e e b 4 2 2 
. 2 e b b b e b b b b e 2 2 2 2 
. e e 2 2 2 e 2 2 2 2 2 e 2 2 2 
. e e e e e e f e e e f e 2 d d 
. e e e e e e f e e f e e e 2 d 
. e e e e e e f f f e e e e e e 
. e f f f f e e e e f f f e e e 
. . f f f f f e e f f f f f e . 
. . . f f f . . . . f f f f . . 
. . . . . . . . . . . . . . . . 
`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    if (かくど == "まっすぐ") {
        game.over(true, effects.starField)
    } else {
        うちゅうせん.destroy(effects.fire, 500)
        game.over(false, effects.dissolve)
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    かくど = "まっすぐ"
    うちゅうせん.setImage(img`
. . . . . . . c d . . . . . . . 
. . . . . . . c d . . . . . . . 
. . . . . . . c d . . . . . . . 
. . . . . . . c b . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . c 2 . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . e 2 . . . . . . . 
. . . . . . e e 4 e . . . . . . 
. . . . . . e 2 4 e . . . . . . 
. . . . . c c c e e e . . . . . 
. . . . e e 2 2 2 4 e e . . . . 
. . c f f f c c e e f f e e . . 
. c c c c e e 2 2 2 2 4 2 e e . 
c c c c c c e e 2 2 2 4 2 2 e e 
c c c c c c e e 2 2 2 2 4 2 e e 
`)
})
let かくど = ""
let うちゅうせん: Sprite = null
tiles.setTilemap(tiles.createTilemap(
            hex`1400080005060506060505050505060600000000000000000606060000060606060606000000000000000000060600000000060606060600000000000000000000000000000000000606000000000000000000000000000606000000000000000000000000000000000006060606000000000000000000000000000000060606060606000000060000000000000000000402030606060606000606000000000007000000`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . 
2 2 2 . . 2 2 2 2 2 2 . . . . . . . . . 
2 2 . . . . 2 2 2 2 2 . . . . . . . . . 
. . . . . . . . 2 2 . . . . . . . . . . 
. . . 2 2 . . . . . . . . . . . . . . . 
. . 2 2 2 2 . . . . . . . . . . . . . . 
. 2 2 2 2 2 2 . . . 2 . . . . . . . . . 
. 2 2 2 2 2 2 2 . 2 2 . . . . . . . . . 
`,
            [myTiles.tile0,sprites.castle.rock1,sprites.builtin.oceanSand14,sprites.builtin.oceanSand15,sprites.dungeon.collectibleRedCrystal,sprites.builtin.oceanSand12,sprites.builtin.oceanSand8,sprites.dungeon.collectibleBlueCrystal],
            TileScale.Sixteen
        ))
うちゅうせん = sprites.create(img`
. . . . . . . c d . . . . . . . 
. . . . . . . c d . . . . . . . 
. . . . . . . c d . . . . . . . 
. . . . . . . c b . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . c 2 . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . e 2 . . . . . . . 
. . . . . . e e 4 e . . . . . . 
. . . . . . e 2 4 e . . . . . . 
. . . . . c c c e e e . . . . . 
. . . . e e 2 2 2 4 e e . . . . 
. . c f f f c c e e f f e e . . 
. c c c c e e 2 2 2 2 4 2 e e . 
c c c c c c e e 2 2 2 4 2 2 e e 
c c c c c c e e 2 2 2 2 4 2 e e 
`, SpriteKind.Player)
うちゅうせん.setPosition(6, 102)
うちゅうせん.setFlag(SpriteFlag.StayInScreen, true)
うちゅうせん.ay = 30
かくど = "まっすぐ"
scene.cameraFollowSprite(うちゅうせん)
