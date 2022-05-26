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
    return parseInt((sideA+sideB)+base);
}
console.log(`Perimeter of triangle ${trianglePerimeter(triangleSideA,triangleSideB,triangleBase)}`);
function triangleArea(base, height){
    return (base*height)/2;
}
function isoscelesTriangleArea(sideA, sideB, sideC){
    const s = (sideA+sideB+sideC)/2;
return Math.sqrt(s*(s-sideA)*(s-sideB)*(s-sideC))


}
function isoscelesTriangleHeight(sideA, sideB,sideC){
    if(sideA!=sideB) return 'SideA must be equal SideB';
    const h = Math.sqrt(sideA^2 - ((sideB^2)/4))
return h;


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

function calculateSquarePerimeter(){
    // const value = document.getElementById("SquareInput").value;
    alert(`${squarePerimeter(document.getElementById("SquareInput").value)}`)
}
function calculateSquareArea(){
    alert(`${squareArea(document.getElementById("SquareInput").value)}`)
}
function calculateTrianglePerimeter(){
    const sideA = document.getElementById("TriangleInputSideA").value
    const sideB = document.getElementById("TriangleInputSideB").value
    const base = document.getElementById("TriangleInputBase").value
    alert(`Perimeter is ${trianglePerimeter(sideA,sideB,base)}`);
}
function calculateTriangleArea(){
    const base = document.getElementById("TriangleInputBase").value
    const height = document.getElementById("TriangleInputHeight").value
    alert(`${triangleArea(base,height)}`)
}
function calculateCirclePerimeter(){
    // const value = document.getElementById("SquareInput").value;
    alert(`${perimeterCircle(document.getElementById("CircleInput").value)}`)
}
function calculateCircleArea(){
    alert(`${areaCircle(document.getElementById("CircleInput").value)}`)
}
function calculateIsoscelesTrianglePerimeter(){
    const sideA = document.getElementById("IsoscelesTriangleInputSideA").value
    const sideB = document.getElementById("IsoscelesTriangleInputSideB").value
    const base = document.getElementById("IsoscelesTriangleInputBase").value
    alert(`Perimeter is ${trianglePerimeter(sideA,sideB,base)}`);
}
function calculateIsoscelesTriangleArea(){
    const sideA = document.getElementById("IsoscelesTriangleInputSideA").value
    const sideB = document.getElementById("IsoscelesTriangleInputSideB").value
    const sideC = document.getElementById("IsoscelesTriangleInputBase").value
    alert(`${isoscelesTriangleArea(sideA,sideB,sideC)}`)
}
function calculateIsoscelesTriangleHeight(){
    const sideA = document.getElementById("IsoscelesTriangleInputSideA").value
    const sideB = document.getElementById("IsoscelesTriangleInputSideB").value
    const sideC = document.getElementById("IsoscelesTriangleInputBase").value
    alert(`${isoscelesTriangleHeight(sideA,sideB,sideC)}`)
}