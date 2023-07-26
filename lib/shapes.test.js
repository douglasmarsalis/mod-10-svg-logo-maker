const { Triangle, Square, Circle } = require("./shapes.js");

//Unit testing for a triangle with a color background using a hexadecimal of #0040ff.
describe("Triangle test", () => {
    test("Tests for a triangle with hexadecimal color background of blue (#0040ff)", () => {
        const shape = new Triangle();
        shape.setColor("#0040ff");
        expect(shape.render()).toEqual(
            `<polygon points="150, 18 244, 182 56, 182" fill="#0040ff" />`
        );
    });
});

//Unit testing for a square with a color background using a hexadecimal of #66cc00.
describe("Square test", () => {
    test("Tests for a square with hexadecimal color background of green (#66cc00)", () => {
        const shape = new Square();
        shape.setColor("#66cc00");
        expect(shape.render()).toEqual(
            `<rect x="73" y="40" width="160" height="160" fill="#66cc00" />`
        );
    });
});

//Unit testing for a circle with a color background using a hexadecimal of #ff0000.
describe("Circle test", () => {
    test("Tests for a circle with hexadecimal color background of red (#ff0000)", () => {
        const shape = new Circle();
        shape.setColor("#ff0000");
        expect(shape.render()).toEqual(
            `<circle cx="150" cy="115" r="80" fill="#ff0000" />`
        );
    });
});