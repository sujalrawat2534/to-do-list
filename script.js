const main = document.getElementById("main");
const ipt = document.getElementById("ipt");
const add = document.getElementById("add");

// Add new todo
add.addEventListener("click", () => {

    let newTodo = {
        id: Date.now(),
        title: ipt.value,
        completed: false
    };

    todos = [...todos, newTodo];
    display();
    ipt.value = "";
});


// Store all todos
let todos = [];

// Delete todo
function delTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    display();
}


// Complete / uncomplete todo
function toggleTodo(id) {

    todos = todos.map(todo => {
        if (todo.id === id) {
            return {
                ...todo,
                completed: !todo.completed
            };
        }
        return todo;
    });
    display();
}


// Display todos
function display() {
    main.innerHTML = "";
    todos.map((todo) => {
        const todoDiv =
            document.createElement("div");


        // Creating checkbox
        const check =
            document.createElement("input");
        check.type = "checkbox";
        check.checked = todo.completed;
        todoDiv.appendChild(check);


        // Toggle todo
        check.addEventListener("change", () => {
            toggleTodo(todo.id);

        });


        // Creating title
        const title =
            document.createElement("span");
        title.textContent = todo.title;
        if (todo.completed) {
            title.classList.add("done");
        }
        todoDiv.appendChild(title);


        // Creating delete button
        const delBtn =
            document.createElement("button");
        delBtn.textContent = "Delete";
        todoDiv.appendChild(delBtn);


        // Delete todo
        delBtn.addEventListener("click", () => {
            delTodo(todo.id);
        });
        main.appendChild(todoDiv);
    });

}
// Run when page loads
display();