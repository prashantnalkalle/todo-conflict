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


function Onremove(ele){
  let REMOVE_ID=ele.closest('li').id
  

  
    let getIndex=todoArr.findIndex(todo=>{
      return todo.todoId===REMOVE_ID
    })

    let REMOVED_TODO=todoArr.splice(getIndex,1)
    ele.closest('li').remove()
     Swal.fire({
        title:`The Todo Item ${REMOVED_TODO[0].todoItem} Removed Successfully !!!!`,
        timer:3000,
        icons: 'success'
     })
  

}