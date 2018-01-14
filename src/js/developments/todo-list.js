const init = (document => {

    'use strict';

    // ===== imperative style code =====

    const todoView = document.querySelector('.todo-list_view');
    const todoInput = document.querySelector('.todo-list_input');
    const todoButton = document.querySelector('.todo-list_add-item');
    const todoItems = document.querySelectorAll('.todo-list_item');

    function createElement(tag, props, ...children) { // ...children оператор оставшихся параметров
        const element = document.createElement(tag);

        Object.keys(props).forEach(key => element[key] = props[key]); // !! Разобрать все методы в этой строке

        children.forEach(child => {
            if (typeof child === 'string') {
                child = document.createTextNode(child);
            }
            element.appendChild(child);
        })

        return element;
    }

    function createTodoItem(title) {
        const checkbox = createElement('input', {
            type: 'checkbox',
            className: 'todo-list_checkbox'
        });
        // checkbox.id = todoItem.children + 1 + ''; // now label not work!!

        const label = createElement('label', {
            className: 'todo-list_label'
        }, title);

        const checkboxTitle = createElement('div', {
            className: 'todo-list_checkbox-title'
        }, checkbox, label);

        const editInput = createElement('input', {
            type: 'text',
            className: 'todo-list_edit-input'
        });

        const editButton = createElement('button', {
            className: 'todo-list_edit-btn'
        }, 'Ред.');

        const deleteButton = createElement('button', {
            className: 'todo-list_delete-btn'
        }, 'x');

        const editTodo = createElement('div', {
            className: 'todo-list_edit'
        }, editButton, deleteButton);

        const todoItem = createElement('li', {
            className: 'todo-list_item'
        }, checkboxTitle, editInput, editTodo);

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
        const isEditing = todoItem.classList.contains('editing');

        if (isEditing) {
            if (editInput.value == '') {
                alert('Поле не может быть пустым!');
                return false;
            }
            title.textContent = editInput.value;
            this.textContent = 'Ред.'
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

    return init;

})(document);

init()

