const priorityTask = document.querySelector("#container_one_priority__list");
const newTask = document.querySelector("#container_one_text__field");
const objOptions = {
    priorityTask,
    newTask,
    addTask : document.querySelector("#container_one_button_click"),
    listTask : document.querySelector(".container_three")
}
const tasks = [];
objOptions.addTask.onclick = () => {
    const priority = objOptions.priorityTask.value
    const task = objOptions.newTask.value;
        if (!task || !priority) {
            alert ("Данные введены некорректно");
        } else {
            addTask(task, tasks);
        }
}

//добавление задачи
function addTask(text, list){
    let date = new Date();
    let timestamp = Date.now();
    const objTask = {
        id: timestamp,
        priority: priorityTask.value,
        text,
        dataCreation: date.toLocaleString(),
        isComplite : false,
    }
    list.push(objTask);
    priorityTask.value = "";
    newTask.value = "";
    priorityTask.focus();
    outputTask(tasks);
}

//вывод задач
function outputTask (list){
    let htmlList = "";
    list.forEach( (objTask) => {
        htmlList += `
        <div class="container_three_output" id="${objTask.id}">
        <label class="container_three_checkbox" checked="${objTask.isComplite}">
            <input type = "checkbox">
            <div></div>
        </label>
        <div class="container_three__priority">${objTask.priority}</div>
        <div class="container_three__text" id="container_three__text">${objTask.text} <br> ${objTask.dataCreation}
        </div>
        <img class = "container_three__removal__icon" id = "container_three__removal" src = "https://cdn-icons-png.flaticon.com/512/1345/1345823.png" alt = "">
    </div>`;
    })
    objOptions.listTask.innerHTML = htmlList;
}

objOptions.listTask.onclick = (event) => {
    const target = event.target;
    const isChangeEl = target.classList.contains("container_three__text");
    const isDeleteEl = target.classList.contains("container_three__removal__icon");

    if (isChangeEl) {
        const task = target.parentElement;
        const taskId = task.getAttribute('id');
        ChangeTask(taskId, tasks);
    }

    if (isDeleteEl) {
        const task = target.parentElement;
        const taskId = task.getAttribute('id');
        deleteTask(taskId, tasks);
    }
}

// удаление задачи
function deleteTask(id, list){

    list.forEach((objTask, idx) => {
        
        if (objTask.id == id) {
            delete list[idx];
        }
    })
    outputTask(list);
} 

//map
// const foundedTaskIndex = list.findIndex(objTask => objTask.id === id);
function ChangeTask(id, list){ //id который тыкнули
    list.forEach((objTask) => {
        if (objTask.id == id) {
            document.getElementById("container_three__text").style.display = "none";
            document.getElementById("container_three__newText").style.display = "inline-block";
            // let newText = document.querySelector(".container_three__newText");
            // console.log(newText);
            
            // objTask.text.innerHTML = newText;
            // document.getElementById("container_three__newText").style.display == "inline-block";
            // objTask.text = newText.value;
            // console.log(newText);
            // console.log(objTask.text);
            // const new_tasks = tasks.map(function editText( currentValue[, index[, array]]) {
                // Возвращает элемент для new_array
        //     })
         }
    })
} 


// const taskPriorityList = document.querySelector("#container_one_priority__list");
// const taskText = document.querySelector("#container_one_text__field");
// let newTask = {
//   text: "",
//   priorityId: "",
//   dataCreation: "",
// };
// let date = new Date();
// let newTasks = [];
// let item;
// function addTask() {
//   if (!taskPriorityList.value || !taskText.value) {
//     alert("Данные введены некорректно");
//   } else {
//     newTask = {
//       text: taskText.value,
//       priorityId: taskPriorityList.value,
//       dataCreation: date.toLocaleString(),
//     }
//     newTasks.push(newTask);
//     outputMessages(newTasks)
//     };
//   }
//   function outputMessages(){
//     let outputMessage = "";
//     newTasks.forEach((item) => {
//       outputMessage += `
//       <div class = "container_three_output" id = "container_three_output">
//       <p class = "container_three__priority" id = "container_three__priority">
//       ${item.priorityId} 
//       </p>
//       <p class = "container_three__text" id = "container_three__text" onclick = "editTask()">
//       ${item.text}<br>
//       <br>
//       ${item.dataCreation}
//       </p>
//       <img class = "container_three__removal__icon" id = "container_three__removal" onclick = "deleteTask()" src = "https://cdn-icons-png.flaticon.com/512/1345/1345823.png" alt = "">
//       </div>
//       `;
//       item.innerHTML = outputMessage;
//       document.getElementById("container_three").innerHTML = outputMessage;
//       taskText.value = "";
//       taskPriorityList.value = "";
//       taskPriorityList.focus();
//       // document.getElementById("container_one_text__field").value = '';
//       // document.getElementById("container_one_priority__list").value = '';
//     });
//   }
//   function editTask(){
//     console.log(newTask);
//     }
//     function deleteTask(){
      
//       console.log(newTask);
//       }
