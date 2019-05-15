var canvasref = document.getElementById("mycanvas")

var ctx = canvasref.getContext("2d")

ctx.moveTo(0, 0)
ctx.lineTo(300, 300)
ctx.stroke()

var animateText = function() {
    ctx.font = "44px serif"
    ctx.strokeText("Hello Canvas", x, y)
    y++
    window.requestAnimationFrame(animateText)
}
ctx.fillStyle = "rgba(200, 0, 0, 0.5)"
ctx.fillRect(50, 50, 100, 100)

ctx.fillStyle = "rgba(100,0,0,10)"
ctx.fillRect(150, 150, 100, 100)


ctx.beginPath()
ctx.arc(225, 80, 40, 0, Math.PI * 2, false)
ctx.stroke()

window.requestAnimationFrame(animateText)