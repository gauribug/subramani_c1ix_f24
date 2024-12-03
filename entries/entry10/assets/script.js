document.addEventListener('DOMContentLoaded', () => {
  const hoverElements = document.querySelectorAll('.hover-element');
  const textBox = document.getElementById('text-box');

  hoverElements.forEach(element => {
    element.addEventListener('mouseover', (event) => {
      const text = event.target.dataset.text; // Get the HTML content from data-text
      const rect = event.target.getBoundingClientRect(); // Get the position of the number

      // Update and position the text box
      textBox.style.display = 'block';
      textBox.style.top = `${rect.top - textBox.offsetHeight - 10}px`;
      textBox.style.left = `${rect.left + rect.width / 2 - textBox.offsetWidth / 2}px`;
      textBox.innerHTML = text; // Set the text as HTML (to include styled headings)
    });

    element.addEventListener('mouseout', () => {
      textBox.style.display = 'none'; // Hide the text box on mouse out
    });
  });

  // Adjust positioning on window resize
  window.addEventListener('resize', () => {
    textBox.style.display = 'none'; // Hide the text box to avoid misalignment
  });
});
