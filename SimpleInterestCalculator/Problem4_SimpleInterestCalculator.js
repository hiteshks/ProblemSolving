function simpleInterestCal(P, R, T){        //Function to calculate simple interest


    if(P<0 || R<0 || T<0){                         //Checking if the function parameters are negative

        return "Invalid input, all values must be non-negative.";    //Returing relevant message.

    }else{                                             //If the function parameters are non negative

        let SI = (P*R*T)/100;                          //Calculating simple interest
        
        return "The simple interest is: "+SI.toFixed(1);     //Returining the result
    }
    
}

//Function calls with test case values
console.log(simpleInterestCal(1000,5,3));      //Text case 1
console.log(simpleInterestCal(1500,7,5));      //Text case 2
console.log(simpleInterestCal(0,6,2));         //Text case 3

console.log(simpleInterestCal(10000,0,2));     //Edge case 2
console.log(simpleInterestCal(-10000,6,2));    //Edge case 2