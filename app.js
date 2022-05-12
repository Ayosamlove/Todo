const addNew = document.querySelector('.add');
const list = document.querySelector('.todos');
hides = document.querySelector('.hides');
// const del = document.querySelector('.delete')

const generateTemplate = (todo) => {

    const html =`
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
      </li>
    `
    list.innerHTML += html; 
};

addNew.addEventListener('submit', (e) => {
    e.preventDefault();
    const todo = addNew.add.value.trim();

    if(todo.length){
        generateTemplate(todo);
        addNew.reset();
        hides.style.display = 'none';
    } else {
        hides.style.display = 'block';
    }

});

list.addEventListener('click', (e) => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    };
});

