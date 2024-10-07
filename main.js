let form = document.querySelector("form");
let input = document.querySelector("input");
let ul = document.querySelector("ul")






const saveTodo= (event) => {
    event.preventDefault();
    let li = document.createElement("li");
    li.innerText = input.value;
    li.className = "list-group-item my-1 rounded-0";
    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete"; 
    delBtn.className = "btn btn-sm btn-danger rounded-0 float-end";
    li.appendChild(delBtn);
    ul.appendChild(li);
    form.reset();

   
};


form.addEventListener("submit" , saveTodo);

const removeTodo  = (e) => {
    if (e.target.className === "btn btn-sm btn-danger rounded-0 float-end"){
     let li = e.target.parentElement;
     ul.removeChild(li);
        
    }
};


ul.addEventListener("click" , removeTodo);