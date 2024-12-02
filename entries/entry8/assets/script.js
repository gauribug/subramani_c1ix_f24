document.addEventListener('DOMContentLoaded', () => {
    const typingText = document.getElementById('typing-text');
    typingText.textContent = "Click once to reveal what's under the glass!";
  });
  
  document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', () => {
      const typingText = document.getElementById('typing-text');
      typingText.textContent = "Click again for more info!";
      typingText.style.width = '0';
      setTimeout(() => {
        typingText.style.width = '100%';
      }, 100);
  
      if (img.dataset.hover) {
        img.src = img.dataset.hover;
      }
  
      img.addEventListener('click', () => {
        window.open(img.dataset.link, '_blank');
      });
    });
  });
  