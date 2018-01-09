'use strict';

const todoView = document.querySelector('.todo-list_view');
const todoInput = document.querySelector('.todo-list_input');
const todoButton = document.querySelector('.todo-list_add-item');

function createTodoItem(title) {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'todo-list_checkbox';
    // checkbox.id = todoItem.children + 1 + '';

    const label = document.createElement('label');
    label.textContent = title;
    label.className = 'todo-list_label';

    const checkboxTitle = document.createElement('div');
    checkboxTitle.className = 'todo-list_checkbox-title';
    checkboxTitle.appendChild(checkbox);
    checkboxTitle.appendChild(label);

    const editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.className = 'todo-list_edit-input';

    const editButton = document.createElement('button');
    editButton.textContent = 'Изменить';
    editButton.className = 'todo-list_edit-btn';

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Удалить';
    deleteButton.className = 'todo-list_delete-btn';

    const editTodo = document.createElement('div');
    editTodo.className = 'todo-list_edit';
    editTodo.appendChild(editButton);
    editTodo.appendChild(deleteButton);

    const todoItem = document.createElement('li');
    todoItem.className = 'todo-list_item';
    todoItem.appendChild(checkboxTitle);
    todoItem.appendChild(editInput);
    todoItem.appendChild(editTodo);

    return todoItem;

}

function addTodo(event) {
    event.preventDefault();

    if (todoInput.value === '') {
        return alert('Введите название задачи!');
    }

    const listItem = createTodoItem(todoInput.value);

    todoView.appendChild(listItem);

    todoInput.value = '';

}

todoButton.addEventListener('click', addTodo);


