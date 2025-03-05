function main(){

    let marks = [16, 17, 4, 3, 5, 2];
    let resMarksStr = "";
    

    for(let i=0;i<marks.length;i++){
        let flag = 1;

        for(let j=i+1;j<marks.length;j++){

            console.log(marks[i], marks[j])

            if(marks[j]>marks[i]){

                flag = 0;
                break;

            }

        }

        if(flag==1){

            resMarksStr += marks[i] + " ";
            
        }
    }

    console.log(resMarksStr);

}


main();