const form = (function() {
  const panel = document.querySelector('#form');
  const input = document.querySelector('#taskName');
  const statusMsg = document.querySelector('#statusMsg');

  panel.addEventListener('submit', (e) => {
    e.preventDefault();
    inputValidator();
  });

  function inputValidator() {
    if(input.value === '') {
      statusMsg.classList.add('app-form__text-info--error');
      return false;
    } else {
      statusMsg.classList.remove('app-form__text-info--error');
      return true;
    }
  }

  return {
    panel: panel,
    input: input,
    inputValidator, inputValidator
  }
})();
