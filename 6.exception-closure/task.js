// 1 задание.

const parseCount = number => {

    const parsedNumber = Number.parseFloat(number);

    if (isNaN(parsedNumber)) {
        let error = new Error("Невалидное значение");
        throw error;
    }
    return parsedNumber;
}
function validateCount(number) {

    try {
        if (isNaN(parseCount(number))) {
            throw error;
        } else {
            return parseCount(number);
        }
    } catch (error) {
        return error;
    }
}

// 2 задание
class Triangle {

    constructor(side1, side2, side3) {

        if (side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1) {
            throw new Error("Треугольник с такими сторонами не существует")
        } else {
            this._side1 = side1;
            this._side2 = side2;
            this._side3 = side3;
        }
    }
    get perimeter() {

            const perimetr = this._side1 + this._side2 + this._side3;
            return perimetr;
    }

    get area() {

        const p = 0.5 * (this._side1 + this._side2 + this._side3);
        const s = Number((Math.sqrt(p * (p - this._side1) * (p - this._side2) * (p - this._side3))).toFixed(3))
        return s;
    }
}
function getTriangle(side1, side2, side3) {
    try {
        const triangle = new Triangle(side1, side2, side3);

        Object.freeze({
            perimeter: triangle.perimeter,
            area: triangle.area
        });
        return triangle;
    } catch (error) {
        return Object.freeze({
            perimeter: "Ошибка! Треугольник не существует",
            area: "Ошибка! Треугольник не существует"
        });
    }
}