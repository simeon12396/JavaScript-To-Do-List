const form = document.querySelector('form'),
      taskInput = document.querySelector('.task-input'),
      ul = document.querySelector('.collection'),
      clearTaskBtn = document.querySelector('.clear-tasks');

form.addEventListener('submit', addTaskToList);
ul.addEventListener('click', removeTaskToList);
clearTaskBtn.addEventListener('click', clearAllTasks);

function addTaskToList(e) {

  if(taskInput.value === '') {

    alert('Enter the task!');

  } else {

    const li = document.createElement('li');

    li.className = 'list-item';

    li.appendChild(document.createTextNode(taskInput.value));

    const link = document.createElement('a');

    link.innerHTML = '<i class="fa fa-remove text-danger"></i>';

    li.appendChild(link);

    ul.appendChild(li);

    taskInput.value = '';
  }

  e.preventDefault();
}


function removeTaskToList(e) {
  if(e.target.className === 'fa fa-remove text-danger') {
    if(confirm('Are you sure? ')) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

function clearAllTasks(e) {

  while(e.target.previousElementSibling.firstChild) {
    e.target.previousElementSibling.firstChild.remove();
  }
  
}


