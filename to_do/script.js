document.addEventListener("DOMContentLoaded", () => {
    const newTaskInput = document.getElementById("new-task");
    const addtaskbutton = document.getElementById("add-task-button");
    const taskList = document.getElementById("task-List");
  
    addtaskbutton.addEventListener("click", addTask);
  
    function addTask() {
      const taskTest = newTaskInput.value.trim();
  
      if (taskTest !== "") {
        const listItem = document.createElement("li");
        const taskSpan = document.createElement("span");
        taskSpan.textContent = taskTest;
  
        const editbtn = document.createElement("button");
        editbtn.textContent = "Edit";
        editbtn.className = "edit-button";
  
        editbtn.addEventListener("click", () => editTask(listItem, taskSpan));
  
        const deletebtn = document.createElement("button");
        deletebtn.textContent = "Delete";
        deletebtn.className = "delete-button";
        deletebtn.addEventListener("click", () => deleteTask(listItem));
  
        listItem.appendChild(taskSpan);
        listItem.appendChild(editbtn);
        listItem.appendChild(deletebtn);
        taskList.appendChild(listItem);
        newTaskInput.value = "";
      }
    }
    function editTask(listItem, taskSpan) {
      const currentText = taskSpan.textContent;
      const input = document.createElement("input");
      input.type = "text";
      input.value = "currentText";
  
      listItem.replaceChild(input, taskSpan);
      input.focus();
  
      input.addEventListener("blur", () => {
        taskSpan.textContent = input.value.trim() || currentText;
        listItem.replaceChild(taskSpan, input);
      });
  
      input.addEventListener("keypress", () => {
        taskSpan.textContent = input.value.trim() || currentText;
        listItem.replaceChild(taskSpan, input);
      });
      
    }
    function deleteTask(listItem) {
      taskList.removeChild(listItem);
    }
  });
