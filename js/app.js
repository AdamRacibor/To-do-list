task.createTask();

form.panel.addEventListener('submit', (e) => {
  e.preventDefault();
  if(form.inputValidator()) {
    task.addToTasksArray(form.input.value);
    form.panel.reset();
  }
});
