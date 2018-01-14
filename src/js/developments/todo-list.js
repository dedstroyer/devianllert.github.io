'use strict';

// ===== imperative style code =====

const todoView = document.querySelector('.todo-list_view');
const todoInput = document.querySelector('.todo-list_input');
const todoButton = document.querySelector('.todo-list_add-item');
const todoItems = document.querySelectorAll('.todo-list_item');

function createTodoItem(title) {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'todo-list_checkbox';
    // checkbox.id = todoItem.children + 1 + ''; // now label not work!!

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
    editButton.textContent = 'Ред.';
    editButton.className = 'todo-list_edit-btn';

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'x';
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

    bindEvents(todoItem);

    return todoItem;

}

function bindEvents(todoItem) {
    const checkbox = todoItem.querySelector('.todo-list_checkbox');
    const editButton = todoItem.querySelector('.todo-list_edit-btn');
    const deleteButton = todoItem.querySelector('.todo-list_delete-btn');

    checkbox.addEventListener('change', toggleTodo);
    editButton.addEventListener('click', editTodo);
    deleteButton.addEventListener('click', deleteTodo);
}

function addTodo(event) {
    event.preventDefault(); // for button.type = 'submit'

    if (todoInput.value === '') {
        return alert('Введите название задачи!');
    }

    const listItem = createTodoItem(todoInput.value);

    todoView.appendChild(listItem);

    todoInput.value = '';

}

function toggleTodo() {
    const todoItem = this.parentNode.parentNode;
    todoItem.classList.toggle('completed');
}

function editTodo() {
    const todoItem = this.parentNode.parentNode;
    const title = todoItem.querySelector('.todo-list_label');
    const editInput = todoItem.querySelector('.todo-list_edit-input');
    const isEditing =  todoItem.classList.contains('editing');

    if (isEditing) {
        if(editInput.value == '') {
            alert('Поле не может быть пустым!');
            return false;
        }
        title.textContent = editInput.value;
        this.textContent = 'Изменить'
    } else {
        editInput.value = title.textContent;
        this.textContent = 'Сохранить';
    }

    todoItem.classList.toggle('editing');
}

function deleteTodo() { 
    const todoItem = this.parentNode.parentNode;
    todoItem.remove();
}

function init() {
    todoButton.addEventListener('click', addTodo);
    todoItems.forEach(item => bindEvents(item));
}



document.addEventListener('DOMContentLoaded', init);



