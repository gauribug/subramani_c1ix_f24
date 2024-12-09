
const links = [
    "https://www.kroger.com/p/ore-international-73-tall-metal-floor-lamp-with-crystal-accents-in-gold/0085457000888",
    "https://www.amazon.com/Mushroom-Modern-Bedroom-Indoor-Restaurant/dp/B0BPGSBC9S", 
    "https://www.ateasehomelife.com/products/dennehy-lotus-retro-glass-pendant-light?variant=47636433830209", 
    "https://docos.us/fr/products/mara-floor-lamp"  
  ];
  
  
  document.querySelectorAll('.image-container').forEach((image, index) => {
    image.addEventListener('click', () => {
      if (links[index]) { 
        window.open(links[index], '_blank'); 
      }
    });
  });
  