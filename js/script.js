const todoForm = document.getElementById('todoForm');
const todoInput = document.getElementById('todoInput');
const dateInput = document.getElementById('dateInput');
const todoTableBody = document.querySelector('#todoTable tbody');
const statusFilter = document.getElementById('statusFilter');

let todos = [];

// Add Todo
todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const todoText = todoInput.value.trim();
  const todoDate = dateInput.value;
  if (!todoText || !todoDate) return;

  const newTodo = {
    id: Date.now(),
    text: todoText,
    date: todoDate,
    status: new Date(todoDate) < new Date() ? 'done' : 'pending'
  };

  todos.push(newTodo);
  todoInput.value = '';
  dateInput.value = '';
  renderTodos();
});

// Render Todos
function renderTodos() {
  const filter = statusFilter.value;
  todoTableBody.innerHTML = '';

  todos
    .filter(todo => filter === 'all' ? true : todo.status === filter)
    .forEach(todo => {
      const tr = document.createElement('tr');

      // Check if date passed for auto done
      if (new Date(todo.date) < new Date() && todo.status !== 'done') {
        todo.status = 'done';
      }

      tr.innerHTML = `
        <td>${todo.text}</td>
        <td>${todo.date}</td>
        <td>${todo.status}</td>
        <td>
          ${todo.status === 'pending' ? `<button class="action-btn done-btn" onclick="markDone(${todo.id})">Done</button>` : ''}
          <button class="action-btn delete-btn" onclick="deleteTodo(${todo.id})">Delete</button>
        </td>
      `;
      todoTableBody.appendChild(tr);
    });
}

// Mark Done
function markDone(id) {
  todos = todos.map(todo => {
    if (todo.id === id) todo.status = 'done';
    return todo;
  });
  renderTodos();
}

// Delete Todo
function deleteTodo(id) {
  todos = todos.filter(todo => todo.id !== id);
  renderTodos();
}

// Filter
statusFilter.addEventListener('change', renderTodos);