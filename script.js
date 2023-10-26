//your JS code here. If required.
let elem = document.getElementById('colorSelect');
let btn = document.querySelector('input');
let selectedOption = '';

// console.log(btn.previousElementSibling);
// console.log(elem[0]);
btn.addEventListener('click',() => {
    elem.removeChild(selectedOption);
})



elem.addEventListener('click', function() {
  const selectedIndex = this.selectedIndex; // Get the index of the selected option
  selectedOption = this.options[selectedIndex]; // Get the selected option element
});