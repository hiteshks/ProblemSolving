
function discountPriceCalculator(price){ 
    
    //Function to calculate discount price with price as a parameter
    
    if(price>20){                                  //Checking cutoff amount value for discount eligibility
 
        let discountedPrice = price * (10/100);           //Calculating discount amount
        
        let finalPrice = price - discountedPrice;         //Final price after deducting discount amount

        return "The final price of the item is: " + price;              //Returing the final price/amount

    }
    else if(price == 20){

        return "No discount applied. \n"+"The final price of the item is: " + price;
        
    }
    else if(price<0){
        return "Invalid price, the price must be a non-negative number.";
    }
    else{                               //if price if below the cutoff amount

        return "No discount applied. \n"+"The final price of the item is: " + price;                  //returning the price amount

    }

}

//Function call for different test cases
console.log(discountPriceCalculator(25));        //Test Case 1
console.log(discountPriceCalculator(20));        //Test Case 2
console.log(discountPriceCalculator(15));        //Test Case 3

console.log(discountPriceCalculator(20));        //Edge case 1
console.log(discountPriceCalculator(-24));       //Edge case 2

