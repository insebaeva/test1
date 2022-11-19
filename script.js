
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
            addTask(task);
        }
}

const visualTasks = document.querySelectorAll('da');

//добавление задачи
function addTask(text){
    let date = new Date(); 
    let timestamp = Date.now();
    const objTask = {
        id: timestamp,
        priority: priorityTask.value,
        text,
        dataCreation: date.toLocaleString(),
        statusId: 1,
    };
    tasks.push(objTask);
    priorityTask.value = "";
    newTask.value = "";
    priorityTask.focus();
    outputTask(tasks);
}

//вывод задач
function outputTask (){
    let htmlList = "";
    tasks.forEach( (objTask) => {
        htmlList += `
        <div class="container_three_output" id="${objTask.id}">
        
            <div class="container_three__priority">
                ${objTask.priority}
            </div>

            <div class="container_three__task" id="container_three__task">

                <div class="container_three__textData" id="container_three__textData">

                    <div class="text" contenteditable="">
                    ${objTask.text}
                    </div>

                    <div class="data">
                    ${objTask.dataCreation}
                    </div>

                </div>

                <div class="container_three__icons">
                    <img class = "container_completed__icon" onclick=completeTask(${objTask.id}) id = "container_complited__icon" src = "icon/галочка.png" alt = "">
                    <img class = "container_canceled__icon" onclick=cancelTask(${objTask.id}) id = "container_canceled__icon" src = "icon/крестик.png" alt = "">
                </div>
            </div>
        <img class = "container_three__removal__icon" id = "container_three__removal" src = "/icon/1345874.png" alt = "">
    </div>`;
    })
    objOptions.listTask.innerHTML = htmlList;
}

const statusDictionary = {
    '1': 'white',
    '2': 'green',
    '3': 'red'
};


function completeTask(taskId) {
    changeTaskStatus(taskId, 2);
    outputStatusTasks(task, 2);
}
function cancelTask(taskId) {
    changeTaskStatus(taskId, 3);
    outputStatusTasks(task, 3);
}
//изменение статуса
let task;
function changeTaskStatus(taskId, newStatusId) {
    task = tasks.find(t => t.id === taskId);
    task.statusId = newStatusId;
}

//изменение виузальной части
function outputStatusTasks(task, newStatusId) {
    const visualTask = document.querySelectorAll(".container_three_output");
    tasks.forEach((task) => {
            if (task.statusId === newStatusId) {
                outputStatusTask(task, visualTask)
            }
    }
    )
    // outputStatusTask(task, visualTask)
}
    // task.classList.add(`container_three__${statusDictionary[objTask.statusId]}`);


function outputStatusTask(task, visualTask) {
    if (task.statusId === 2) {
        console.log('click')
        console.log(visualTask)
        // visualTask.classList.add(`container_three__${statusDictionary[task.statusId]}`);
        // console.log(task)
        // const taskPriority = task.previousElementSibling;
        // const taskIconComplete = task.lastElementChild.firstElementChild;
        visualTask.classList.replace("container_three__task", "container_three__completeTask");
        visualTask.classList.replace("container_three__canceledTask", "container_three__completeTask");
        // taskPriority.classList.replace("container_three__priority", "container_three__completePriority");
        // taskPriority.classList.replace("container_three__canceledPriority", "container_three__completePriority");
        // taskIconComplete.classList.replace("container_completed__icon", "container_none");
        // console.log(objTask)
    }
    if (task.statusId === 3) {
        console.log(task, visualTask)
    }
}

 //             
            //             }
            //     });
        // objTask.statusId

// objOptions.listTask.onclick = (event) => {
//     const target = event.target;
//     const isChangeTask = target.classList.contains("container_three__text");
//     const isDeleteTask = target.classList.contains("container_three__removal__icon");
//     const isCompleteTask = target.classList.contains("container_completed__icon");
//     const isCanceledTask = target.classList.contains("container_canceled__icon");

//     if (isCompleteTask) {
//         const task = target.parentElement.parentElement;
//         const taskId = task.parentElement.getAttribute('id');
//         outputStatusTasks(taskId, tasks, task);
//     }

//     if (isCanceledTask) {
//         const task = target.parentElement.parentElement;
//         const taskId = task.parentElement.getAttribute('id');
//         outputStatusTasks(taskId, tasks, task);
//         // const taskPriority = task.previousElementSibling;
//         // const taskIconCanceled = task.lastElementChild.lastElementChild;
//         // taskPriority.classList.replace("container_three__priority", "container_three__canceledPriority");
//         // taskPriority.classList.replace("container_three__completePriority", "container_three__canceledPriority");
//         // task.classList.replace("container_three__task", "container_three__canceledTask");
//         // task.classList.replace("container_three__completeTask", "container_three__canceledTask");
//         // taskIconCanceled.classList.replace("container_canceled__icon", "container_none");
//     }

//     if (isChangeTask) {
//         const task = target.parentElement;
//         const taskId = task.getAttribute('id');
//         ChangeTask(taskId, tasks);
//     }

//     if (isDeleteTask) {
//         const task = target.parentElement;
//         const taskId = task.getAttribute('id');
//         let result = confirm("Вы действительно хотите удалить задачу?");
//         if (result) {
//             deleteTask(taskId);
//         }
//     }
// }

// // удаление задачи
// function deleteTask(id){
//     const foundedTaskIndex = tasks.findIndex(objTask => objTask.id == id);
//     tasks.splice(foundedTaskIndex, 1);
//     outputTask();
// } 


// // function completeTask(id, list,task){

// //     list.forEach((objTask) => {
        
// //         if (objTask.id === Number(id)) {
// //             const taskPriority = task.previousElementSibling;
// //             const taskIconComplete = task.lastElementChild.firstElementChild;
// //             task.classList.replace("container_three__task", "container_three__completeTask");
// //             task.classList.replace("container_three__canceledTask", "container_three__completeTask");
// //             taskPriority.classList.replace("container_three__priority", "container_three__completePriority");
// //             taskPriority.classList.replace("container_three__canceledPriority", "container_three__completePriority");
// //             taskIconComplete.classList.replace("container_completed__icon", "container_none");
// //             console.log(objTask)
// //             }
// //     });






