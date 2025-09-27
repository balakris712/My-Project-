class Shape {
  constructor(name) {
    this.name = name;
  }

  info() {
    console.log(`Shape is: ${this.name}`);
  }
}

class Circle extends Shape {
  constructor(radius) {
    super('Circle');
    this.radius = radius;
  }

  area() {
    console.log(
      `Circle area is: ${(Math.PI * this.radius * this.radius).toFixed(2)}`
    );
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super('Rectangle');
    this.width = width;
    this.height = height;
  }

  area() {
    console.log(
      `Rectangle area is: ${this.width * this.height}`
    );
  }
}

// Usage
let a = new Circle(8);
a.info();
a.area();

let b = new Rectangle(10, 5);
b.info();
b.area();
