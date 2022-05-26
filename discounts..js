const originalPrice =100;
const discount =15;

function calculatePriceWithDiscount(price,discount){
    const percentagePriceWithDiscount=100-discount;
    const priceWithDiscount=(price*percentagePriceWithDiscount)/100;
    return priceWithDiscount;
}