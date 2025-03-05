function main(){

    let str = "abcdxyz";
    let len  = str.length;

    if(len%2==0){

        let s1 = "";
        let s2 = "";

        let halfLen = str.length/2;
        

        for(let i=0;i<len;i++){

            if(i<=halfLen-1){

                s1 += str[i];

            }
            else{
                
                s2 += str[i];

            }

        }
        s1 = reverseStr(s1);
        s2 = reverseStr(s2);

        let recStr = s1.concat(s2);

        console.log(recStr);

    }
    else{

        let s1 = "";
        let s2 = "";
        let midChar  = "";

        let halfLen = Math.floor(str.length/2);

        for(let i=0;i<len;i++){

            if(i<=halfLen-1){
                
                s1 += str[i];


            }
            else if(i==halfLen){
                
                midChar += str[i];

            }
            else if(i>halfLen){

                s2 += str[i];
            }

        }
        s1 = reverseStr(s1);
        s2 = reverseStr(s2);

        let recStr = s1.concat(midChar, s2);

        console.log(recStr)

    }



}

main();


function reverseStr(str){

    let revStr = "";

    for(let i=str.length-1;i>=0;i--){

        revStr += str[i];

    }

    return revStr;

}