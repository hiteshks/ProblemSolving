function fetchTask(taskID){
    return new Promise((resolve, reject) => {
        let flag = 0;

        let foundTask = tasks.forEach((ele) =>{
            if(ele.id == taskID){
                flag = 1;
                resolve(ele);
            }
            
        })

        if(flag==0){
            reject("Task not found");
        }


        
    }, 2000)
}





let tasksJSON = {
    "tasks": [
      { "id": 101, "title": "Fix login bug", "status": "In Progress" },
      { "id": 202, "title": "Implement dark mode", "status": "Completed" },
      { "id": 303, "title": "Write API documentation", "status": "Pending" }
    ]
  }
  
let TasksJS = JSON.parse(JSON.stringify(tasksJSON));

let tasks = []

TasksJS.tasks.forEach((ele, ) => {
    tasks.push({"id" : ele.id, "title" : ele.title, "status" : ele.status })
})

fetchTask(202)
.then((obj) =>{
    console.log(obj);
})
.catch((error) => {
    console.log(error);
})

