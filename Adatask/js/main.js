'use strict'

const add = document.querySelector('.js_add');
const btnAdd = document.querySelector('.btn-add');
const listTask = document.querySelector('.task-ul');
const check = document.querySelector ('.checkbox');
const inputSearch = document.querySelector('.input-search');
const btnSearch = document.querySelector('.js_search');

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

const renderAllTasks = (tasksToRender) => {
  listTask.innerHTML = ''; 
  for (const task of tasksToRender) {
    const checked = task.completed ? 'checked' : '';
    listTask.innerHTML += `
      <li>
        <input class="checkbox" type="checkbox" ${checked}>
        ${task.name}
      </li>`;
  }
}; 

renderAllTasks(tasks);

btnAdd.addEventListener('click' , (ev) => {
  ev.preventDefault();
  if (add.value.trim() !== '') {
    tasks.push({ name: add.value.trim(), completed: false, id: tasks.length + 1 });
    renderAllTasks(tasks);
    add.value = ''; 
  }
});

const handleInputSearch = () => { 

  const filterText = inputSearch.value.toLowerCase();
  const filteredTasks = tasks.filter(taskObj => taskObj.name.toLowerCase().includes(filterText));
  renderAllTasks(filteredTasks);
};

btnSearch.addEventListener('click', handleInputSearch);