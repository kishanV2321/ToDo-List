let inputBox = document.getElementById("input-box");
let addbtn = document.getElementById("add-btn");
let todoList = document.getElementById("todo-list");
let todoForm = document.getElementById("todo-form");

todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
});

addbtn.addEventListener("click", (e) => {
    e.preventDefault();
    let inputValue = inputBox.value.trim();

    if (inputValue === "") {
        alert("Write your todo list");
    } else {
        // Create a new list item
        let li = document.createElement("li");
        li.classList.add("list-group-item", "d-flex", "p-2", "position-relative");

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("form-check-input", "mx-2", "checked");

        let label = document.createElement("label");
        label.classList.add("form-check-label");
        label.textContent = inputValue;

        let closeButton = document.createElement("button");
        closeButton.type = "button";
        closeButton.classList.add("btn-close", "position-absolute", "top-25", "end-0", "px-4");

        li.appendChild(checkbox);
        li.appendChild(label);
        li.appendChild(closeButton);

        // Add the new list item to the list
        todoList.appendChild(li);
    }

    inputBox.value = "";
    saveData();
});

todoList.addEventListener("click", (e) => {
    if (e.target.type === "checkbox") {
        const label = e.target.nextElementSibling;
        if (e.target.checked) {
            label.classList.add("text-decoration-line-through");
        } else {
            label.classList.remove("text-decoration-line-through");
        }
    } else if (e.target.classList.contains("btn-close")) {
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData() {
    localStorage.setItem("data", todoList.innerHTML);
}

function showTask() {
    todoList.innerHTML = localStorage.getItem("data");
}
showTask();


// let isChecked = false;

// check.addEventListener("click", (e) => {
//     isChecked = !isChecked;
//     if (isChecked) {
//         lineCut.style.textDecoration = "line-through";
//     } else {
//         lineCut.style.textDecoration = "none";
//     }
// });

// deleteBtn.addEventListener("click", (e)=> {
//     e.preventDefault();
//     addList.innerHTML = localStorage.removeItem("data");
//     addList.innerHTML ="";
// });



// function addTask(e) {
//     if (inputBox.value == "") {
//         e.preventDefault();
//         alert("Write your todo list");
//     } else {
//         e.preventDefault();
//         addList.innerHTML = inputBox.value;
//     }
// }