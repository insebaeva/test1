const taskPriorityList = document.querySelector("#container_one_priority__list");
const taskText = document.querySelector("#container_one_text__field");
let newTasks = [];
function addTask() {
  if (!taskPriorityList.value || !taskText.value) {
    alert("Данные введены некорректно");
  } else {
    let newTask = {
      text: taskText.value,
      priorityId: taskPriorityList.value,
      dataCreation: "",
    }
    newTasks.push(newTask);
    outputMessagesPriority();
    outputMessagesText();
    };
  }

function outputMessagesPriority(){
  let outputMessagePriority = "";
  newTasks.forEach((item, i) => {
    outputMessagePriority += `
    <p>
    ${item.priorityId}
    
    
    </p>
    `;
    item.priorityId.innerHTML = outputMessagePriority;
    document.getElementById("priority").innerHTML = outputMessagePriority;
  });
}
function outputMessagesText(){
  let outputMessageText = "";
  newTasks.forEach((item, i) => {
    outputMessageText += `
    <p>
    ${item.text}
    

    </p>
    `;
    item.text.innerHTML = outputMessageText;
    document.getElementById("txt").innerHTML = outputMessageText;
  });
}