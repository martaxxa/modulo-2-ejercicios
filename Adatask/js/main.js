'use strict'

const add = document.querySelector('.js_add');
const btnAdd = document.querySelector('.btn-add');
const listTask = document.querySelector('.task-ul');
const check = document.querySelector ('.checkbox');

const tasks = [
  { name: "Recoger setas en el campo", completed: true, id: 1 },
  { name: "Comprar pilas", completed: true, id: 2 },
  { name: "Poner una lavadora de blancos", completed: true, id: 3 },
  {
    name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
    completed: false,
    id: 4,
  },
];

for (const addObj of tasks) {
    
  if(addObj.completed === true){  
      listTask.innerHTML += `<li><input class="checkbox" type="checkbox" id="checkBox" checked>` + ' ' + `${addObj.name}</li>`;
  }
  else{
      listTask.innerHTML += `<li><input class="checkbox" type="checkbox" id="checkBox">` + ' ' + `${addObj.name}</li>`;
  }
};

btnAdd.addEventListener('click' , (ev) => {
  ev.preventDefault();
  listTask.innerHTML += `<li><input class="checkbox" type="checkbox" id="checkBox">` + ' ' + `${add.value}</li>`;
  add.value = " ";
});






/*btnAdd.addEventListener ('click' , (ev) => {
  ev.preventDefault();
  listTask.innerHTML += `<li><input class="checkbox" type="checkbox" id="checkBox">` + ' ' + `${add.value}</li>`;
  add.value = " ";
});

check.addEventListener ('click' , (ev) => {
  
});*/