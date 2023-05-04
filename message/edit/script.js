const input = document.getElementById('textInput');
const output = document.getElementById('outputSpan');
const saveButton = document.getElementById('saveButton');
const maxChars = 300;

// Load the saved text from localStorage on page load
output.textContent = localStorage.getItem('savedText') || '';

input.addEventListener('input', (event) => {
  // Update the text in the span element
  output.textContent = event.target.value;
  
  // Check the length of the input value
  const charsLeft = maxChars - event.target.value.length;
  const charsLeftSpan = document.getElementById('charsLeftSpan');
  
  // Update the characters left message
  if (charsLeft >= 0) {
    charsLeftSpan.textContent = charsLeft + ' فاضل';
  } else {
    charsLeftSpan.textContent = 'Maximum character limit reached';
  }
});

saveButton.addEventListener('click', () => {
  // Check if input is not empty
  if (input.value.trim() !== '') {
    // Save the text to localStorage
    localStorage.setItem('savedText', input.value);
    alert('تم الحفظ');
  } else {
    alert('حنزر الحقل فاضي هتشغل دماغك عليا ولا اي');
  }
});




