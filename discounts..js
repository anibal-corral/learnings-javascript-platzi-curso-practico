function calculatePriceWithDiscount(price,discount){
    const percentagePriceWithDiscount=100-discount;
    const priceWithDiscount=(price*percentagePriceWithDiscount)/100;
    return priceWithDiscount;
}

function onClickCalculatePriceWithDiscount(){
    const price = document.getElementById("InputPrice").value;
    const discount = document.getElementById("InputDiscount").value;

    const finalPrice= calculatePriceWithDiscount(price,discount);
    document.getElementById("PrecioWithDiscount").innerText=`Final price is ${finalPrice}`;
}