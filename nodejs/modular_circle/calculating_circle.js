function circleArea(radius) {
    return Math.PI * (radius ** 2);
}

function circleCircumference(radius) {
    return 2 * Math.PI * radius;
}

module.exports = {
    circleArea,
    circleCircumference
}