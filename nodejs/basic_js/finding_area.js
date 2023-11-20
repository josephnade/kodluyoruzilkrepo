const arguments = process.argv.slice(2);

class Circle {
    constructor(r) {
        this.r = r;
        this.area = Math.PI * (r ** 2);
    }
}

let circle = new Circle(arguments[0] * 1);
console.log(`Yarıçapı ${circle.r} olan dairenin alanı: ${circle.area}`);