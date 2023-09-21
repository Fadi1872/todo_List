/* let todoO = [
    "go to school",
    "go to karmes",
    "attending the course"
];
localStorage.setItem("todo", JSON.stringify(todoO)); */


function getTodo() {
    let todo = localStorage.getItem("todo");
    if (todo){
        return JSON.parse(todo);
    }else{
        localStorage.setItem("todo" , JSON.stringify([]));
        return [];
    }
}

function displayTodo() {
    let todo = getTodo();
    let list = document.querySelector('#list');
    list.innerHTML = '';

    todo.forEach( (item, index) => {
        list.innerHTML = list.innerHTML + `
        <li class="d-flex justify-content-between align-items-center my-2">
            <p>${item}</p>
            <div>
                <button type="button" class="btn btn-warning" onclick="editTodo(${index})">Edit</button>
                <button type="button" class="btn btn-danger" onclick="deleteTodo(${index})">Delete</button>
            </div>
        </li>
        `;
    });
};
displayTodo();


function addTodo() {
    let todo = getTodo();
    const addInput = document.querySelector('#add');

    todo.push(addInput.value);
    localStorage.setItem("todo", JSON.stringify(todo));

    displayTodo();
    addInput.value = "";
};


function editTodo(index) {
    let todo = getTodo();
    let newTodo = prompt("edit your task :" , todo[index]);

    if (newTodo != null){
        todo[index] = newTodo;
        localStorage.setItem("todo", JSON.stringify(todo));
        displayTodo();
    }
};


function deleteTodo(index) {
    let todo = getTodo();
    let newTodo = todo.filter((item, indexfilter) => {
        return index != indexfilter;
    });
    localStorage.setItem("todo", JSON.stringify(newTodo));
    displayTodo();
}