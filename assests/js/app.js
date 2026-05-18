const todocontainer = document.getElementById('todocontainer')


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


function onTodoUpdate(){
  let UPDATE_ID=EDIT_ID;
  let UPDATE_OBJ={
      todoItem:todoItemControl.value,
      todoId:UPDATE_ID
  }
  let GET_INDEX=todoArr.findIndex(t=>t.todoId===UPDATE_ID);
  todoArr[GET_INDEX]=UPDATE_OBJ;

   let li = document.getElementById(UPDATE_ID).firstElementChild;
   li.innerText = UPDATE_OBJ.todoItem;

    todoForm.reset();
    addTodoBtn.classList.remove('d-none');
    updateTodoBtn.classList.add('d-none');
    
    Swal.fire({
      title: `The todoItem ${UPDATE_OBJ.todoItem} is Updated Successfully!!`,
      icon: "success",
      timer: 3000
    });
}


updateTodoBtn.addEventListener('click',onTodoUpdate)