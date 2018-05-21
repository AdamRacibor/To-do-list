const task = (function() {
  const list = document.querySelector('#taskList');
  const tasksArray = JSON.parse(localStorage.getItem('Tasks')) || [];


  function addToTasksArray(value) {
    const item = {
      text: value,
      done: false
    }
    tasksArray.push(item);
    localStorage.setItem('Tasks', JSON.stringify(tasksArray));
    createTask();
  }

  function createTask() {
    list.innerHTML = tasksArray.map((el) => {
      return `<li class="task-list__item ${el.done ? 'task-list__item--complete': ''}"><p class="task-name">${el.text}</p>
              <div class="btn-panel">
                <button class="btn-remove" type="button" title="Remove task">
                  <svg class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                    <path d="M14.348,14.849c-0.469,0.469-1.229,0.469-1.697,0L10,11.819l-2.651,3.029c-0.469,0.469-1.229,0.469-1.697,0
                    c-0.469-0.469-0.469-1.229,0-1.697l2.758-3.15L5.651,6.849c-0.469-0.469-0.469-1.228,0-1.697c0.469-0.469,1.228-0.469,1.697,0
                    L10,8.183l2.651-3.031c0.469-0.469,1.228-0.469,1.697,0c0.469,0.469,0.469,1.229,0,1.697l-2.758,3.152l2.758,3.15
                    C14.817,13.62,14.817,14.38,14.348,14.849z"/>
                  </svg>
                </button>
                <button class="btn-check" type="button" title="Check task">
                  <svg class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                   viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                    <path d="M8.294,16.998c-0.435,0-0.847-0.203-1.111-0.553L3.61,11.724c-0.465-0.613-0.344-1.486,0.27-1.951
                    c0.615-0.467,1.488-0.344,1.953,0.27l2.351,3.104l5.911-9.492c0.407-0.652,1.267-0.852,1.921-0.445
                    c0.653,0.406,0.854,1.266,0.446,1.92L9.478,16.34c-0.242,0.391-0.661,0.635-1.12,0.656C8.336,16.998,8.316,16.998,8.294,16.998z"/>
                  </svg>
                </button>
              </div>
            </li>`
    }).join('');
  }

  function removeTask(taskToRemove) {
    const liToRemove = taskToRemove.closest('li');
    const allTaskInList = Array.from(document.querySelectorAll('.task-list__item'));
    allTaskInList.forEach((el) => {
      if(el === liToRemove) {
        tasksArray.splice(allTaskInList.indexOf(el),1);
        localStorage.setItem('Tasks', JSON.stringify(tasksArray));
        list.removeChild(liToRemove);
      }
    });
  }

  function checkTask(taskToCheck) {
    const liToCheck = taskToCheck.closest('li');
    const allTaskInList = Array.from(document.querySelectorAll('.task-list__item'));
    allTaskInList.forEach((el) => {
      if(el === liToCheck) {
        tasksArray[allTaskInList.indexOf(el)].done = !tasksArray[allTaskInList.indexOf(el)].done;
        el.classList.toggle('task-list__item--complete');
        localStorage.setItem('Tasks', JSON.stringify(tasksArray));
      }
    });
  }

  list.addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if(btn.className === 'btn-remove') {
      removeTask(btn);
    } else if(btn.className === 'btn-check'){
      checkTask(btn);
    }
  });

  return {
    addToTasksArray: addToTasksArray,
    createTask: createTask
  }
})()
