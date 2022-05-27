 const list1 = [100,200,300,500];
let sumList1 =0;
for(let i=0;i<list1.length;i++){
    sumList1=sumList1+list1[i];
}
const averageList1 = sumList1/list1.length;

function calcAverage(list){
//     let sumList =0;
// for(let i=0;i<list.length;i++){
//     sumList=sumList+list[i];
// }
const sumList = list.reduce(
    (accumulatedValue=0, newElement)=>{
        return accumulatedValue + newElement;
    }
)
return sumList/list.length;

}