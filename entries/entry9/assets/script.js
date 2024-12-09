document.addEventListener('DOMContentLoaded', () => {
    const imageMapping = {
      '1.png': '4.png',
      '2.png': '5.png',
      '3.png': '6.png'
    };
  
    const imageContainers = document.querySelectorAll('.image-container');
  
    imageContainers.forEach(container => {
      const img = container.querySelector('img');
      container.addEventListener('click', () => {
        const currentSrc = img.src.split('/').pop(); 
        if (imageMapping[currentSrc]) {
          container.classList.add('clicked'); 
          setTimeout(() => {
            container.classList.remove('clicked'); 
            img.src = `assets/${imageMapping[currentSrc]}`; 
          }, 500);
        }
      });
    });
  });
  