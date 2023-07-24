const { Triangle, Square, Circle, Heart, Rectangle, Oval, Hexagon } = require("./shapes.js");

//Unit testing for a triangle with a color background of blue using a hexadecimal of #0040ff.
describe("Triangle test", () => {
    test("Tests for a triangle with hexadecimal color background of blue (#0040ff)", () => {
        const shape = newTriangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual(
            `<polygon points="150, 18 244, 182 56, 182" fill="#0040ff" />`
        );
    });
});