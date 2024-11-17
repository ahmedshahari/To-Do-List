    document.getElementById("addTaskBtn").addEventListener("click", function() {
        const todoText = document.getElementById("todoText").value;
        if (todoText === "") {
            alert("Please enter a task!");
            return;
        }

        const li = document.createElement("li");
        li.textContent = todoText;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete-btn";
        deleteBtn.onclick = function() {
            li.remove();
        };

        li.appendChild(deleteBtn);
        document.getElementById("todoList").appendChild(li);
        document.getElementById("todoText").value = ""; // Clear input field
    });