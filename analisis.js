const salariesChile =chile.map(
    (person)=>person.salary
);

const salariesChileSorted = salariesChile.sort(
    (a,b)=>a-b
);

function isPar(num){
  return (num%2===0);
}

function medianaSalaries(list){
    
    
    const half = parseInt(list.length/2);

    if(isPar(list.lengh)){
        const halfPerson1 = list[half-1];
        const halfPerson2 = list[half];
        return calcAverage(halfPerson1, halfPerson2)
    }else{
        return list[half];
    }
}
function calcAverage(list){
    const sumList = list.reduce(
        (accumulatedValue=0, newElement)=>{
            return accumulatedValue + newElement;
        }
    )
    return sumList/list.length;
    }
const medianaGeneralChile=medianaSalaries(salariesChileSorted);


//Mediana top 10%

const spliceStart=parseInt((salariesChileSorted.length*90)/100);
const spliceCount=salariesChileSorted.length-spliceStart;
const top10SalariesChile=salariesChileSorted.splice(spliceStart,spliceCount);
const medianaTop10Chile=medianaSalaries(top10SalariesChile);
console.log(medianaGeneralChile,medianaTop10Chile);


    