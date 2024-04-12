let tasks = [];


    function renderTasks() {
        const taskList = document.getElementById("taskList");
        taskList.innerHTML = "";
        tasks.forEach((task, index) => {
            const taskElement = document.createElement("div");
            taskElement.className = "task";
            taskElement.innerHTML = `
                <span>${task}</span>
                <div class="task-actions">
                    <button onclick="editTask(${index})"><img src="images/edit.png"></button>
                    <button onclick="deleteTask(${index})"><img src="images/delete.png"></button>
                </div>
            `;
            taskList.appendChild(taskElement);
        });
    }

    function openModal() {
        document.getElementById("modal").style.display = "block";
    }

    function closeModal() {
        const taskInput = document.getElementById("taskInput");
        taskInput.value = "";
        document.getElementById("modal").style.display = "none";

    }

    function addTask() {
        const taskInput = document.getElementById("taskInput");
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            tasks.push(taskText);
            renderTasks();
            taskInput.value = "";
            closeModal();
        } else {
            alert("Моля въведете задача!");
        }
    }

   


    function editTask(index) {
        const newTaskText = prompt("Редактирай задача :", tasks[index]);
        if (newTaskText !== null) {
            tasks[index] = newTaskText.trim();
            renderTasks();
        }
    }

    function deleteTask(index) {
        if (confirm("Сигурни ли сте, че искате да изтриете задачата?")) {
            tasks.splice(index, 1);
            renderTasks();
        }
    }


    renderTasks();



