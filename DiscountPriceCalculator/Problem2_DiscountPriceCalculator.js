
function discountPriceCalculator(price){
    
    if(price>20){

        let discountedPrice = price * (10/100);
        
        let finalPrice = price - discountedPrice;

        return finalPrice;

    }
    else if(price<=20){

        return price

    }

}

console.log(discountPriceCalculator(25));
console.log(discountPriceCalculator(20));
console.log(discountPriceCalculator(15));
