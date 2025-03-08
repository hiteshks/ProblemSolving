function asyncFileReader(files, callBack){

    let totalWordsCount = 0;
    let filesCount = 0;

    setTimeout(() => {
        

        files.forEach((ele) =>{
            let arr = ele.content.split(" ");
            ///console.log(arr)
            totalWordsCount += arr.length;
            filesCount++;

            if(filesCount==files.length){
                callBack(totalWordsCount);
            }
        })


    }, 4000)

    
}

function readWords(arr){

    return arr.length;

}



let filesJSON = {
    "files": [
      { "name": "file1.txt", "content": "Hello world! This is a test." },
      { "name": "file2.txt", "content": "JavaScript is asynchronous and powerful." },
      { "name": "file3.txt", "content": "Callbacks, Promises, and Async/Await" }
    ]
}
  
let filesJS = JSON.parse(JSON.stringify(filesJSON));

//console.log(filesJS)

let files = [];

filesJS.files.forEach((ele) =>{
    files.push({"name" : ele.name, "content" : ele.content})
})

//console.log(files);

asyncFileReader(files, totalWordsCount =>{

    console.log("Total Words : ", totalWordsCount)

})