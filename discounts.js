function calculatePriceWithDiscount(price,discount){
    const percentagePriceWithDiscount=100-discount;
    const priceWithDiscount=(price*percentagePriceWithDiscount)/100;
    return priceWithDiscount;
}
const cupons = [
    {
        name:'cupon10',
        discount:10
    },
    {
        name:'cupon25',
        discount:25
    },
    {
        name:'cupon50',
        discount:50
    },
];

function onClickCalculatePriceWithDiscount(){
    const price = document.getElementById("InputPrice").value;
    const selectedCupon = document.getElementById("SelectDiscount").value;
    const cupon = cupons.find((cupon)=>cupon.name===selectedCupon);
    


    const finalPrice= calculatePriceWithDiscount(price,cupon.discount);
    document.getElementById("PrecioWithDiscount").innerText=`Final price is ${finalPrice}`;
}

