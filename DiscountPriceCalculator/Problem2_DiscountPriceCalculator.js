
function discountPriceCalculator(price){       //Function to calculate discount price with price as a parameter
    
    if(price>20){                                  //Checking cutoff amount value for discount eligibility
 
        let discountedPrice = price * (10/100);           //Calculating discount amount
        
        let finalPrice = price - discountedPrice;         //Final price after deducting discount amount

        return finalPrice;                             //Returing the final price/amount

    }
    else{                               //if price if below the cutoff amount

        return price;                  //returning the price amount

    }

}

//Function call for different test cases
console.log(discountPriceCalculator(25));        //Test Case 1
console.log(discountPriceCalculator(20));        //Test Case 2
console.log(discountPriceCalculator(15));        //Test Case 3

