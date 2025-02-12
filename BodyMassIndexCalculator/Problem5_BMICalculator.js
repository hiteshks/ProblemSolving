function BMICalculator(weight, height){        //Function to calculate BMI


    if(weight==undefined || isNaN(weight) || height==undefined || isNaN(height)){    //Checking whether parameters are undefined or not a number

        return "Please enter a valid input";                            //Returining relevant message

    }


    if(weight<0 || height<0){                                           //Checking if parameters are less than zero

        return "Invalid input, height and weight must be positive numbers.";    //Returining relevant message
    }
    else if(height == 0){                                               //Checking if height value causes an divide by zero error

        return "Invalid input, height cannot be zero.";              //Returining relevant message

    }
    else{                                                       //Control will come here if both the parameters are valid

        let bmi = weight/(height*height);                    //Calculating BMI

        return "Your BMI is: "+bmi.toFixed(2);                //Returining relevant message with calculated BMI with 2 decimal value
    }


}


//Function calls with test parameters
console.log(BMICalculator(70,1.75));          //Test case 1
console.log(BMICalculator(55,1.60));          //Test case 2
console.log(BMICalculator(90, 1.80));         //Test case 3

console.log(BMICalculator(70,0));             //Edge case 1
console.log(BMICalculator(-70,1.75));         //Edge case 2