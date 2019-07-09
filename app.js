const form = document.querySelector('form'),
      taskInput = document.querySelector('.task-input'),
      ul = document.querySelector('.collection'),
      clearTaskBtn = document.querySelector('.clear-tasks'),
      filterInput = document.querySelector('#filterTasks');

form.addEventListener('submit', addTaskToList);
ul.addEventListener('click', removeTaskToList);
clearTaskBtn.addEventListener('click', clearAllTasks);
filterInput.addEventListener('keyup', filterTasks);


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

function filterTasks(e) {
  const currentFilterValue = e.target.value.toLowerCase(),
        arrayOfListItems = document.querySelectorAll('.list-item');

  arrayOfListItems.forEach((listItem) => {
    const listItemText = listItem.innerText.toLowerCase();

    if(listItemText.indexOf(currentFilterValue) != -1) {
      listItem.style.color = 'green';
    } else {
      listItem.style.display = 'none';
    }
  });
  
  if(currentFilterValue === '') {
    arrayOfListItems.forEach((listItem) => {
      listItem.style.display = 'flex';
      listItem.className = 'list-item';
    })
  }
}


