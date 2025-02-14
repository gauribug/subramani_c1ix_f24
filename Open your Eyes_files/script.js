document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('grid');
    

    const images = [
      'assets/1.png',
      'assets/2.png',
      'assets/3.png',
      'assets/4.png',
      'assets/5.png',
      'assets/6.png',
      'assets/7.png',
      'assets/8.png',
      'assets/9.png',
      'assets/10.png',
      'assets/11.png',
      'assets/12.png',
      'assets/13.png',
      'assets/14.png',

    ];
    
    const imageCount = Math.floor((window.innerWidth / 96) * (window.innerHeight / 96)); 
  

    for (let i = 0; i < imageCount; i++) {
      const gridItem = document.createElement('div');
      gridItem.classList.add('grid-item');
      gridItem.style.backgroundImage = `url(${images[i % images.length]})`;
      grid.appendChild(gridItem);
    }
  

    setInterval(() => {
      const items = document.querySelectorAll('.grid-item');
      const randomIndex = Math.floor(Math.random() * items.length);
      items[randomIndex].classList.add('visible');
    }, 500);
  });
  