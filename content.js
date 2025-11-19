// Create the fucking button
const button = document.createElement('button');
button.innerHTML = 'Translate';
button.id = 'translate-launcher';
document.body.appendChild(button);


document.addEventListener('mouseup', (e) => {
  const selection = window.getSelection().toString().trim();
  if (selection.length > 0 && selection.length < 1000) {
    showButton(e);
  } else {
    hideButton();
  }
});


document.addEventListener('mousedown', (e) => {
  if (e.target !== button) {
    hideButton();
  }
});

// THE ACTUAL FUNCTION THAT FUCKING WORKS
button.addEventListener('click', (e) => {
  e.stopPropagation();
  const selection = window.getSelection().toString().trim();
  if (selection) {
  
    const translateUrl = `https://translate.google.com/?sl=auto&tl=en&text=${encodeURIComponent(selection)}&op=translate`;
    window.open(translateUrl, '_blank');
  }
  hideButton();
});

function showButton(e) {
  button.style.display = 'block';
  button.style.top = `${e.pageY + 10}px`;
  button.style.left = `${e.pageX}px`;
}

function hideButton() {
  button.style.display = 'none';
}