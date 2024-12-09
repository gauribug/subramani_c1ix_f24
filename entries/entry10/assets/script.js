document.addEventListener('DOMContentLoaded', () => {
  const hoverElements = document.querySelectorAll('.hover-element');
  const textBox = document.getElementById('text-box');

  hoverElements.forEach(element => {
    element.addEventListener('mouseover', (event) => {
      const text = event.target.dataset.text; 
      const rect = event.target.getBoundingClientRect(); 

  
      textBox.style.display = 'block';
      textBox.style.top = `${rect.top - textBox.offsetHeight - 10}px`;
      textBox.style.left = `${rect.left + rect.width / 2 - textBox.offsetWidth / 2}px`;
      textBox.innerHTML = text; 
    });

    element.addEventListener('mouseout', () => {
      textBox.style.display = 'none'; 
    });
  });

  
  window.addEventListener('resize', () => {
    textBox.style.display = 'none'; 
  });
});
