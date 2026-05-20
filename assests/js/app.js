const todocontainer = document.getElementById('todocontainer')
const addTodo = document.getElementById("addTodo")
const updateTodo = document.getElementById("updateTodo")

const todoItemControl= document.getElementById('todoItem');
const todoForm=document.getElementById('todoForm')

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



function ontodoSubmit(ele){ 
     console.log(ele);
    ele.preventDefault()
    
    let todo_obj = {
      todoItem: todoItemControl.value,
      todoId: Date.now() .toString()
    }
    console.log(todo_obj);
    todoArr.push(todo_obj);


    let li =document.createElement('li');
    li.className= 'list-group-item d-flex justify-content-between';
    li.id=todo_obj.todoId;
    li.innerHTML=`   <strong>${todo_obj.todoItem}</strong>
                        <div>
                                 <i type="button" onclick="OnEdit(this)" class="fa-solid fa-pen-to-square  text-primary fa-2x"></i>
                                 <i type="button" onclick="Onremove(this)" class="fa-solid fa-trash text-danger fa-2x"></i>
                        </div>`
                        
    todocontainer.append(li);
     swal.fire({ 
           title:'New todo added Successfully ', 
           icon:'success',
           timer:3000

     })

   todoForm.reset();

                               
  
  }
  todoForm.addEventListener('submit',ontodoSubmit);