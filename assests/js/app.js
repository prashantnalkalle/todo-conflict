const todocontainer = document.getElementById('todocontainer')
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
                                 <i type="button" onclick="onEdit(this)" class="fa-solid fa-pen-to-square  text-primary fa-2x"></i>
                                 <i type="button" onclick="onRemove(this)" class="fa-solid fa-trash text-danger fa-2x"></i>
                        </div>`
                        
    todocontainer.append(li);


   todoForm.reset();

                               
  
  }
  todoForm.addEventListener('submit',ontodoSubmit);