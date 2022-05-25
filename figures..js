console.group("Square")
const squareSide=5;
console.log(`Sides of the square measure: ${squareSide} cm`);
const squarePerimeter=(squareSide*4);
console.log(`Perimeter of square: ${squarePerimeter} cm`);
const squareArea=(squareSide*squareSide);
console.log(`Area of square: ${squareArea} cm2`);
console.groupEnd();

console.group("Triangle")
const triangleSideA=6;
const triangleSideB=6;
const triangleSideC=4;
console.log(`Sides of the Triangle measure: ${triangleSideA} cm, ${triangleSideB} cm, ${triangleSideC} cm`);
const triangleHeight=5.5;
console.log(`Height of the Triangle measure: ${triangleHeight} cm`);
const trianglePerimeter=triangleSideA+triangleSideB+triangleSideC;
console.log(`Perimeter of triangl ${trianglePerimeter}`);
const triangleArea=(triangleSideC*triangleHeight)/2;
console.log(`Area of triangl ${triangleArea}`);
console.groupEnd();

console.group("Circle");

const radiusCircle=4;
console.log(`Radius of Circle ${radiusCircle}`);
const diameterCircle=radiusCircle*2;
console.log(`Diameter of Circle ${diameterCircle}`);
// const PI= 3.1415;
const PI = Math.PI;
console.log(`PI ${PI}`);
const perimeterCircle = diameterCircle*PI;
console.log(`Perimeter of Circle ${perimeterCircle}`);
const areaCircle=(radiusCircle*radiusCircle)*PI;
console.log(`Area of Circle ${areaCircle}`);