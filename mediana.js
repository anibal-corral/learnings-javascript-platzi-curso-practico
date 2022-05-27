 const list1 = [100,200,500,400000];
let sumList1 =0;
for(let i=0;i<list1.length;i++){
    sumList1=sumList1+list1[i];
}

function isPar(num){
    if(num%2===0){
        return true;
    }else{
        return false;
    }
}

function calcMediana(list){
    list.sort((a,b)=>a-b);
    
    const halfList = parseInt(list.length/2);

    if(isPar(list.length)){
        const element1 = list[halfList-1];
        const element2 = list[halfList];
        return calcAverage([element1,element2]);
    }else{
        return list[halfList];
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