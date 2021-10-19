const myTextArea = document.getElementById('my-textarea');
const remainingCharsText = document.getElementById('my-textarea-remaining-chars');
const MAX_CHARS = 500;
myTextArea.addEventListener('input', () => {
  const remaining = MAX_CHARS - myTextArea.value.length;
  const color = remaining < MAX_CHARS * 0.1 ? 'red' : null;
  remainingCharsText.textContent = `${remaining} caracteres disponibles`
  remainingCharsText.style.color = color;
});


(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()
