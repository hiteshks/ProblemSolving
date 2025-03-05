function main(){

    let s1 = "anagram";
    let s2 = "nag a ram";

    if(detectingAnagram(s1, s2)){
        console.log("True")
    }
    else{
        console.log("False")
    }

}


function detectingAnagram(s1, s2){

    s2 = s2.split(" ").join("");
    s1 = s1.split("").sort((a,b)=> a.localeCompare(b)).join("");
    s2 = s2.split("").sort((a,b)=> a.localeCompare(b)).join("");

    return s1 == s2 ? true : false;

}

main();
