document.addEventListener('DOMContentLoaded', () => {
    
    const typingText = document.getElementById('typing-text');
    typingText.textContent = "Hover to reveal what's under the glass!";
    
   
    document.querySelectorAll('.gallery-item img').forEach(img => {
      const originalSrc = img.src; 
      const hoverSrc = img.dataset.hover; 
  
     
      if (hoverSrc) {
        img.addEventListener('mouseover', () => {
          img.src = hoverSrc;
        });
  
        img.addEventListener('mouseout', () => {
          img.src = originalSrc;
        });
      }
  
    
      img.addEventListener('click', () => {
        const link = img.dataset.link; 
        if (link) {
          window.open(link, '_blank'); 
        }
      });
    });
  });
  