const todocontainer = document.getElementById('todocontainer')
const addTodo = document.getElementById("addTodo")
const updateTodo = document.getElementById("updateTodo")


let todoArr = [
  {
    todoItem: "CSS",
    todoId: "2qwe12-231-231wd-ew112e",
  },
  {
    todoItem: "JS & ES6",
    todoId: "2qwe12-231-231wd-ew1133",
  },
  {
    todoItem: "HTML",
    todoId: "2qwe12-231-231wd-ew11563",
  },
];

function templating(arr){
  let result =``

  arr.forEach(ele=>{
    result+=`<li class="list-group-item d-flex justify-content-between" id='${ele.todoId}'>
              <strong>${ele.todoItem}</strong>
              <div>
                <i class="fa-regular fa-pen-to-square fa-2x text-primary" onclick="OnEdit(this)"></i>
                <i class="fa-solid fa-trash fa-2x text-danger" onclick="Onremove(this)"></i>
              </div>
            </li>`
  })

  todocontainer.innerHTML =result;
}
templating(todoArr)


let EDIT_ID;
function OnEdit(ele){
  EDIT_ID=ele.closest('li').id
  let EDIT_OBJ=todoArr.find(t=>t.todoId===EDIT_ID);
  todoItemControl.value =EDIT_OBJ.todoItem;

  addTodo.classList.add('d-none');
  updateTodo.classList.remove('d-none');
}

