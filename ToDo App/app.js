var inputBox = document.getElementById("inputBox")
var containerList = document.getElementById("listContainer")
function addTask(){
    if(inputBox.value.trim() === ""){
        swal("It Cant be Empty", {
            buttons: ["Cancel", "OK"],
          });
    }else{
        var li = document.createElement("li")
        li.innerHTML = inputBox.value
        containerList.appendChild(li)
        var span = document.createElement("span")
        span.innerHTML = "\u00d7" ;
        li.appendChild(span)
    }
    inputBox.value ="";
    saveData();
}
containerList.addEventListener("click",function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked")
        saveData();
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false)

function saveData(){
    localStorage.setItem("data",containerList.innerHTML)
}
function showTask(){
    containerList.innerHTML = localStorage.getItem("data");
}
showTask();
