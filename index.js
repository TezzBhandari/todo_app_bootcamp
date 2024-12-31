document.addEventListener("DOMContentLoaded", () => {
    const todoInput = document.querySelector("#todo_input");
    const todoBtn = document.querySelector("#add_todo");
    const todoList = document.querySelector("#todo_list");

    const addTodo = (e) => {
        e.preventDefault();
        if (todoInput.value === "") {
            return;
        }
        // creating  li tag for todo list
        const todoItem = document.createElement("li");
        todoItem.classList.add("todo_item");

        // creating checbox for idicating completion
        const checkBoxInput = document.createElement("input");
        checkBoxInput.setAttribute("type", "checkbox");

        const todoTitle = document.createElement("p");
        todoTitle.textContent = todoInput.value;

        checkBoxInput.addEventListener("click", function() {
            if (checkBoxInput.checked) {
                todoTitle.style.textDecoration = "line-through";
            } else {
                todoTitle.style.textDecoration = "none";
            }
        });

        const deleteTodoBtn = document.createElement("button");
        deleteTodoBtn.innerHTML = "x";

        deleteTodoBtn.addEventListener("click", function() {
            todoItem.remove();
        });

        todoItem.appendChild(checkBoxInput);
        todoItem.appendChild(todoTitle);
        todoItem.appendChild(deleteTodoBtn);

        // todoItem.textContent = todoInput.value;
        todoList.appendChild(todoItem);
        todoInput.value = "";
    };

    todoBtn.addEventListener("click", addTodo);
});
