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
    //% blockIdentity=images._tile
    export const tile1 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . f . . . . . . . . . . . . 
. . . f . . . . . . . . . . . . 
. . . f . . . . . . . . . . . . 
. . . f f f f f f f f . . . . . 
. . . f f . . . . . . f . . . . 
. . . f f . . . . . . f f . . . 
. . . f f . f . . . . . f . . . 
. . . f . f . . . . . . f . . . 
. . . . f f f . . . . f f . . . 
. . . . f f . f f f f . . . . . 
. . . . . f f f . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`
    //% blockIdentity=images._tile
    export const tile3 = img`
c c c c c c c c 9 c c c c c c c 
c c c c c c c c 9 c c c c c c c 
c c c c c c c c 9 c c c c c c c 
c c c c c c c c 9 c c c c c c c 
c c c c c c c c 9 c c c c c c c 
c c c c c c c c 9 c c c c c c c 
c c c c c c c c 9 c c c c c c c 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
c c c c c c c c 9 c c c c c c c 
c c c c c c c c 9 c c c c c c c 
c c c c c c c c 9 c c c c c c c 
c c c c c c c c 9 c c c c c c c 
c c c c c c c c 9 c c c c c c c 
c c c c c c c c 9 c c c c c c c 
c c c c c c c c 9 c c c c c c c 
c c c c c c c c 9 c c c c c c c 
`
}
controller.onGesture(ControllerGesture.TiltDown, function () {
    if (1 == vy) {
        ball.vy = 0
        vy = 0
    }
    ball.ay = speed
})
controller.onGesture(ControllerGesture.ScreenDown, function () {
    ball.vx = 0
    ball.vy = 0
    ball.ay = 0
    ball.ax = 0
})
controller.onGesture(ControllerGesture.TiltRight, function () {
    if (0 == vx) {
        ball.vx = 0
        vx = 1
    }
    ball.ax = speed
})
controller.onGesture(ControllerGesture.TiltLeft, function () {
    if (1 == vx) {
        ball.vx = 0
        vx = 0
    }
    ball.ax = speed * -1
})
controller.onGesture(ControllerGesture.ScreenUp, function () {
    ball.vx = 0
    ball.vy = 0
    ball.ay = 0
    ball.ax = 0
})
controller.onGesture(ControllerGesture.TiltUp, function () {
    if (0 == vy) {
        ball.vy = 0
        vy = 1
    }
    ball.ay = speed * -1
})
let speed = 0
let vx = 0
let vy = 0
let ball: Sprite = null
ball = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . 6 6 6 6 . . . . . . 
. . . . 6 6 6 a a 6 6 6 . . . . 
. . . d d d d 6 6 6 6 6 6 . . . 
. . 6 d d d d 8 8 8 1 1 6 6 . . 
. . d d d d d 8 8 8 1 1 a 6 . . 
. 6 d d d d 8 8 8 8 8 a 3 6 6 . 
. 6 d d d 8 8 8 1 1 1 1 3 6 6 . 
. 6 6 d d 8 8 1 1 1 1 1 1 6 6 . 
. 6 8 d d 8 8 1 1 1 1 1 1 6 6 . 
. . 6 8 d d 8 1 1 1 1 1 8 6 . . 
. . 6 8 8 d 8 8 1 1 1 8 6 6 . . 
. . . 6 8 8 8 8 8 8 8 8 6 . . . 
. . . . 6 6 8 8 8 8 6 6 . . . . 
. . . . . . 6 6 6 6 . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
ball.setFlag(SpriteFlag.StayInScreen, true)
vy = 0
vx = 0
speed = 100
tiles.setTilemap(tiles.createTilemap(
            hex`10000c00070707070707070702070707020707070702020202020202020702020202020707070707070707070207020707070207020202070202020702070202020707070707070707070207020702070707020702070202020202070207020702020207020702070707070707070707020207070207020702020202020702070702070202070707020707070707020707020702020202020202020202070202020207020702070207070707070702070707070207070707070202020202020702020202`,
            img`
. . . . . . . . 2 . . . 2 . . . 
. 2 2 2 2 2 2 2 2 . 2 2 2 2 2 . 
. . . . . . . . 2 . 2 . . . 2 . 
2 2 2 . 2 2 2 . 2 . 2 2 2 . . . 
. . . . . . 2 . 2 . 2 . . . 2 . 
2 . 2 2 2 2 2 . 2 . 2 . 2 2 2 . 
2 . 2 . . . . . . . . . 2 2 . . 
2 . 2 . 2 2 2 2 2 . 2 . . 2 . 2 
2 . . . 2 . . . . . 2 . . 2 . 2 
2 2 2 2 2 2 2 2 2 . 2 2 2 2 . 2 
. 2 . 2 . . . . . . 2 . . . . 2 
. . . . . 2 2 2 2 2 2 . 2 2 2 2 
`,
            [myTiles.tile0,sprites.castle.tileGrass2,sprites.dungeon.floorDark0,sprites.dungeon.darkGroundWest,sprites.dungeon.floorLight2,myTiles.tile1,myTiles.tile2,myTiles.tile3],
            TileScale.Sixteen
        ))
tiles.placeOnRandomTile(ball, myTiles.tile0)
