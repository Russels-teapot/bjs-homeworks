function parseCount(value) {
    let parsedValue = Number.parseInt(value)
    const parsingErr = new Error("Невалидное значение");
    if (Number.isNaN(parsedValue)) {
        throw parsingErr;
    }
    return parsedValue
}

function validateCount(value) {
    try {
        parseCount(value);
        return parseCount(value)
    }
    catch(e) {
        return e
    }
}


class Triangle {
    constructor (a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.checkTriangle();
    };

    checkTriangle() {
        const sizeErr = new Error("Треугольник с такими сторонами не существует")
        if ((this.a+this.b)<this.c || (this.a+this.c)<this.b || (this.b+this.c)<this.a) {
            throw sizeErr
        }
    };

    getPerimeter() {
        const perimeter = this.a+this.b+this.c
        return perimeter
    };

    getArea () {
        const p = (this.a+this.b+this.c)/2;
        const area = +Math.sqrt(p*(p-this.a)*(p-this.b)*(p-this.c)).toFixed(3);
        return area
    };

};

function getTriangle(a, b, c) {
    try {
        const newTriangle = new Triangle(a, b, c)
        return newTriangle
    }
    catch(e) {
        const triangleError = "Ошибка! Треугольник не существует"
        const emptyObject = {
            getArea() {
                return triangleError
            },
            getPerimeter() {
                return triangleError
            }};
        return emptyObject
    }
}