/*const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write somthing!")
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData()

}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
        saveData()
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
function showcase() {
    if (localStorage.getItem("data")) {
        listContainer.innerHTML = localStorage.getItem("data");
    }
}
showcase();

*/
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ""){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerText = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}
 
listContainer.addEventListener("click", function(event){
    if(event.target.tagName === "LI"){
        event.target.classList.toggle("checked");
        saveData();
    }
    else if(event.target.tagName === "SPAN"){
        event.target.parentElement.remove();
        saveData();
    }
}, false);

const resetButton = document.getElementById("reset-button");
const showAllButton = document.getElementById("show-all-button");
const showCompletedButton = document.getElementById("show-completed-button");
const showIncompleteButton = document.getElementById("show-incomplete-button");

resetButton.addEventListener("click", function(){
    listContainer.innerHTML = "";
    localStorage.removeItem("data");
    inputBox.value = "";
});

showAllButton.addEventListener("click", function(){
    showTask();
});

showCompletedButton.addEventListener("click", function(){
    filterTasks(true);
});

showIncompleteButton.addEventListener("click", function(){
    filterTasks(false);
});

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

function filterTasks(showCompleted){
    const tasks = listContainer.children;
    for(let i = 0; i < tasks.length; i++){
        if(showCompleted){
            if(tasks[i].classList.contains("checked")){
                tasks[i].style.display = "block";
            } else {
                tasks[i].style.display = "none";
            }
        } else {
            if(tasks[i].classList.contains("checked")){
                tasks[i].style.display = "none";
            } else {
                tasks[i].style.display = "block";
            }
        }
    }
}

showTask();
