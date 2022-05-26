console.group("Square")
const squareSide=5;
console.log(`Sides of the square measure: ${squareSide} cm`);
function squarePerimeter(side){
    return side*4;
}
console.log(`Perimeter of square: ${squarePerimeter(squareSide)} cm`);
function squareArea(side){
    return side*side;
}
console.log(`Area of square: ${squareArea(squareSide)} cm2`);
console.groupEnd();

console.group("Triangle")
const triangleSideA=6;
const triangleSideB=6;
const triangleBase=4;
console.log(`Sides of the Triangle measure: ${triangleSideA} cm, ${triangleSideB} cm, ${triangleBase} cm`);
const triangleHeight=5.5;
console.log(`Height of the Triangle measure: ${triangleHeight} cm`);

function trianglePerimeter(sideA, sideB, base){
    return sideA+sideB+base;
}
console.log(`Perimeter of triangle ${trianglePerimeter(triangleSideA,triangleSideB,triangleBase)}`);
function triangleArea(base, height){
    return (base*height)/2;
}

console.log(`Area of triangl ${triangleArea(triangleBase,triangleHeight)}`);
console.groupEnd();

console.group("Circle");
const radiusCircle=4;
console.log(`Radius of Circle ${radiusCircle}`);
function diameterCircle(radius){
return radius*2;
}
    
console.log(`Diameter of Circle ${diameterCircle(radiusCircle)}`);
const PI = Math.PI;
console.log(`PI ${PI}`);
function perimeterCircle(radius){
    return diameterCircle(radius)*PI;
}
console.log(`Perimeter of Circle ${perimeterCircle(radiusCircle)}`);
function areaCircle(radius){
return (radius*radius)*PI;
}
console.log(`Area of Circle ${areaCircle(radiusCircle)}`);