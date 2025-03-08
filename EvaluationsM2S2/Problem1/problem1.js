function rideEarningAnalyzer(trips){

    let res = trips.filter((ele) => ele.fare>20)
    .reduce((acc, curr) => {

        
        let driverExist = acc.find((ele) => {
            return ele.driver == curr.driver 
        })
        //console.log(driverExist)

        if(driverExist){
            
            driverExist.totalEarnings += curr.fare;
            driverExist.tripsCompleted++;

        }else{
            
            acc.push({driver : curr.driver, totalEarnings : curr.fare, tripsCompleted : 1});
            //console.log(acc)
        }
        

        return acc

    }, [])
    .sort((a, b) => b.totalEarnings - a.totalEarnings)
    

    return res

}







let tripsJSON = [
    { "tripId": 1, "driver": "Alice", "fare": 35 },
    { "tripId": 2, "driver": "Bob", "fare": 15 },
    { "tripId": 3, "driver": "Alice", "fare": 50 },
    { "tripId": 4, "driver": "Charlie", "fare": 8 },
    { "tripId": 5, "driver": "Bob", "fare": 25 },
    { "tripId": 6, "driver": "Alice", "fare": 40 },
    { "tripId": 7, "driver": "Charlie", "fare": 30 },
    { "tripId": 8, "driver": "Alice", "fare": 10 }
]  

  
let trips  = JSON.parse(JSON.stringify(tripsJSON));

console.log(rideEarningAnalyzer(trips));