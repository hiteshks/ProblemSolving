function numberComparison(num1, num2){      //function to compare numbers, accepting two parameters

    if(num1>num2){                               //Checking if num1 is greater than num2

        return num1+" is larger than "+num2;      //returing relevant message

    }
    else if(num1<num2){                           //Checking if num1 is less than num2

        return num2+" is larger than "+num1;         //Returning relevant message

    }
    else if(num1 == num2){                        //Checking if both numbers are equal
        
        return "Both numbers are equal";             //Returining relvant message

    }
    

}

//Function calls with different test cases
console.log(numberComparison(10, 5));           //Test case 1
console.log(numberComparison(7, 7));            //Test case 2
console.log(numberComparison(-1, -10));         //Test case 3


console.log(numberComparison(0, 0));            //Edge case 1
console.log(numberComparison(-3, -22));         //Edge case 2
