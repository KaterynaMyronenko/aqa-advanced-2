//declaration
function culculateArea(width, height) {
    const area = width * height
    console.log('Area:', area)
}
culculateArea(4, 6)

//expression
const area1 = function (width, height) {
    const area1 = width * height
    console.log('Area:', area1)
}
area1(5, 2)

//arrow
const area2 = (width, height) => {
    const area2 = width * height
    console.log('Area:', area2)
}
area2(5, 3)
