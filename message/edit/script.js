const input = document.getElementById('textInput');
const output = document.getElementById('outputSpan');
const saveButton = document.getElementById('saveButton');

// Load the saved text from localStorage on page load
output.textContent = localStorage.getItem('savedText') || '';

input.addEventListener('input', (event) => {
  // Update the text in the span element
  output.textContent = event.target.value;
});

saveButton.addEventListener('click', () => {
  // Check if input is not empty
  if (input.value.trim() !== '') {
    // Save the text to localStorage
    localStorage.setItem('savedText', input.value);
    alert('Changes saved!');
  } else {
    alert('حنزر الحقل فاضي هتشغل دماغك عليا ولا اي');
  }
});
