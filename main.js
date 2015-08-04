document.getElementById("student-number").addEventListener('keydown', function(evt) {
  console.log(evt.keyCode);
  if (evt.keyCode !== 8) {
    if (evt.keyCode < 48 || evt.keyCode > 57) {
      evt.preventDefault();
    }
  }
});
