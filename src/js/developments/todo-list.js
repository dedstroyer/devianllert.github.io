;
const todo = (document => {

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
            className: 'todo-list_checkbox',
            id: 'task' + (todoView.children.length + 1)
        });
        // checkbox.id = todoItem.children + 1 + ''; // now label not work!!

        const labelText = createElement('span', {
            className: 'todo-list_label-title'
        }, title)

        const label = createElement('label', {
            className: 'todo-list_label',
        }, labelText);
        label.setAttribute('for','task' + (todoView.children.length + 1))

        const checkboxTitle = createElement('div', {
            className: 'todo-list_checkbox-title'
        }, checkbox, label);

        const editInput = createElement('input', {
            type: 'text',
            className: 'todo-list_edit-input'
        });

        const editButton = createElement('button', {
            className: 'todo-list_edit-btn'
        });

        const deleteButton = createElement('button', {
            className: 'todo-list_delete-btn'
        });

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

        // проверка id для уже существующих элементов
        for (let i = 0; i < todoView.children.length; i++) {
            todoView.children[i].querySelector('.todo-list_checkbox').id = 'task' + (i + 1);
            todoView.children[i].querySelector('.todo-list_label').setAttribute('for','task' + (i + 1))
        }
        
        checkbox.addEventListener('change', toggleTodo);
        editButton.addEventListener('click', editTodo);
        deleteButton.addEventListener('click', deleteTodo);
    }

    function addTodo(event) {
        event.preventDefault(); // for button.type = 'submit'

        // const limit = 10;
        const listItem = createTodoItem(todoInput.value);
        const titles = document.querySelectorAll('.todo-list_label-title');
        // const todoItems = document.querySelectorAll('.todo-list_item');

        if (todoInput.value === '') {
            return alert('Введите название задачи!');
        }

        // if (todoItems.length >= limit) {
        //     alert(`Вы не можете создать больше ${limit} задач`);
        //     return false;
        // }

        for (let i = 0; i < titles.length; i++) {
            if (todoInput.value == titles[i].textContent) {
                alert ('Такая задача уже есть!');
                return false;
            }
        }

        todoView.appendChild(listItem);

        todoInput.value = '';

    }

    function toggleTodo() {
        const todoItem = this.parentNode.parentNode;
        todoItem.classList.toggle('completed');
    }

    function editTodo() {
        const todoItem = this.parentNode.parentNode;
        const title = todoItem.querySelector('.todo-list_label-title');
        const editInput = todoItem.querySelector('.todo-list_edit-input');
        const isEditing = todoItem.classList.contains('editing');
        const titles = document.querySelectorAll('.todo-list_label-title');

        if (isEditing) {
            if (editInput.value == '') {
                alert('Поле не может быть пустым!');
                return false;
            }

            for (let i = 0; i < titles.length; i++) {
                if (editInput.value == titles[i].textContent) {
                    alert ('Такая задача уже есть!');
                    return false;
                }
            }

            title.textContent = editInput.value;
        } else {
            editInput.value = title.textContent;
        }

        todoItem.classList.toggle('editing');
    }

    function deleteTodo() {
        const todoItem = this.parentNode.parentNode;
        
        todoItem.remove();

        for (let i = 0; i < todoView.children.length; i++) {
            todoView.children[i].querySelector('.todo-list_checkbox').id = 'task' + (i + 1);
            todoView.children[i].querySelector('.todo-list_label').setAttribute('for','task' + (i + 1))
        }

    }

    function init() {
        todoButton.addEventListener('click', addTodo);
        todoItems.forEach(item => bindEvents(item));

        // window.onbeforeunload = function() {
        //     return "Данные не сохранены. Точно перейти?";
        //   };
    
    }

    return init;

})(document);

todo()

