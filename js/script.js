/// Temporary data storage for todo items
let todos =[];

/// Function to add a new todo item
function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoDate = document.getElementById('todo-date');

   /// Basic validation to ensure both fields are filled
    if (todoInput.value.trim() === '' || todoDate.value === '') {
        alert('Please enter a todo item and select a due date.');
    } else {
        // Create a new todo object and it to the todos array
        const newTodo ={
            text: todoInput.value,
            date: todoDate.value
        };

        // Add the new todo to the array
        todos.push(newTodo);
    }
}

function displayTodos() { }

function deleteTodo() { }

function filterTodos() { }