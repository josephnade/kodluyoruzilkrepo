var listDOM = document.getElementById("list");
var inputTask = document.getElementById("task");
var todos = [];
var toastTrigger = document.getElementById('liveToastBtn');
var successToast = new bootstrap.Toast(document.getElementById('successToast'));
var errorToast = new bootstrap.Toast(document.getElementById('errorToast'));
var deleteToast = new bootstrap.Toast(document.getElementById('deleteToast'));


// localStorage'tan 'todos' öğesini alırken eksiklik kontrolü yapın
function reloadFromStorage() {
    var storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
        listDOM.replaceChildren([]);
        todos = JSON.parse(storedTodos);
        todos.forEach((item, index) => {
            var liDOM = document.createElement("li");
            liDOM.className = "list-group-item d-flex justify-content-between align-items-center";
            liDOM.innerHTML = `${item} <button class="btn btn-danger" data-index="${index}" onclick="deleteElement(this)"> Sil </button>`;
            listDOM.appendChild(liDOM);
        });
    }
}
reloadFromStorage();

function newElement(strValue) {
    if (strValue) {
        todos.push(strValue);
        localStorage.clear();
        localStorage.setItem("todos", JSON.stringify(todos));
        reloadFromStorage();
        successToast.show();
        inputTask.value = ""; // Input alanını temizle
    } else {
        errorToast.show();
    }
}

function deleteElement(button) {
    var index = button.getAttribute("data-index");
    if (index !== null) {
        index = parseInt(index, 10);
        console.log(index);
        todos.splice(index, 1);
        localStorage.clear();
        localStorage.setItem("todos", JSON.stringify(todos));
        reloadFromStorage();
        deleteToast.show();

    }
}


toastTrigger.addEventListener('click', function btnClicked() {
    newElement(inputTask.value);
});