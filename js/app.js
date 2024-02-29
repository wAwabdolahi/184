let $ = document;
let addTodoBtn = $.getElementById('add_btn');
let modal = $.getElementById('todo_form');
let closeModal = $.getElementsByClassName('close-modal');
let submitModal = $.getElementById('todo_submit');
let modalInput = $.getElementById('todo_input');
let noStatusSection = $.getElementById('no_status');
let TodoStatus = $.querySelectorAll('.status')
// modal section
addTodoBtn.addEventListener('click',()=>{
    modal.classList.add('active')
})
closeModal[0].addEventListener('click',()=>{
    modal.classList.remove('active')
})
// adding new todo
submitModal.addEventListener('click',()=>{
    let newTodo = document.createElement('div');
    newTodo.setAttribute('class','todo');
    newTodo.setAttribute('draggable','true');
    newTodo.setAttribute('id',modalInput.value)
    newTodo.innerHTML = modalInput.value;
    let closeButton = document.createElement('span')
    closeButton.setAttribute('class','close')
    closeButton.innerHTML = "&times;"
    newTodo.append(closeButton)
    modalInput.value ="";
    modal.classList.remove('active');
    noStatusSection.append(newTodo);
    // deleting process
    let closeButtons = $.querySelectorAll('.close')
    closeButtons.forEach(deleteItem => {
        deleteItem.addEventListener('click',x=>{
            x.target.parentNode.remove()
        })
    });
    let todoItems = $.querySelectorAll('.todo')
    todoItems.forEach(selectedTodo=>{
        selectedTodo.addEventListener('dragstart',x=>{
            x.dataTransfer.setData('todoInfo',x.target.id)
        })
       
    })
})
// 
TodoStatus.forEach(stat=>{
    stat.addEventListener('dragover',x=>{
        x.preventDefault()
    })
    stat.addEventListener('drop',x=>{
        let selectedTodo = $.getElementById(x.dataTransfer.getData('todoInfo'));
        if(x.target.id == 'stat'){
            x.target.append(selectedTodo);
        }
            
        
       

    })
})