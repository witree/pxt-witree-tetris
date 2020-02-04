controller.onGesture(ControllerGesture.TiltDown, function () {
    if (1 == vy) {
        ball.vy = 0
        vy = 0
    }
    ball.ay = 20
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
    ball.ax = 20
})
controller.onGesture(ControllerGesture.TiltLeft, function () {
    if (1 == vx) {
        ball.vx = 0
        vx = 0
    }
    ball.ax = -20
})
controller.onGesture(ControllerGesture.TiltUp, function () {
    if (0 == vy) {
        ball.vy = 0
        vy = 1
    }
    ball.ay = -20
})
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
