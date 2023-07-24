class Shape {
    constructor() {
        this.color = "";
    }
    setColor(colorVar) {
    this.color = colorVar;
    }
}

//The Triangle class inherits properties defined in the Shape class. Shape, Size and Color is defined here.
class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

//The Square class inherits properties defined in the Shape class. Shape, Size and Color is defined here.
class Square extends Shape {
    render() {
        return `<square x="73" y="40" width="160" height="160" fill="${this.color}" />`;
    }
}

//The Circle class inherits properties defined in the Shape class. Shape, Size and Color is defined here.
class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
    }
}

//Exports classes 
module.exports = { Triangle, Square, Circle };