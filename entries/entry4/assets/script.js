// Array of specific links for each image
const links = [
    "https://www.kroger.com/p/ore-international-73-tall-metal-floor-lamp-with-crystal-accents-in-gold/0085457000888", // Link for the first image
    "https://www.amazon.com/Mushroom-Modern-Bedroom-Indoor-Restaurant/dp/B0BPGSBC9S", // Link for the second image
    "https://www.ateasehomelife.com/products/dennehy-lotus-retro-glass-pendant-light?variant=47636433830209", // Link for the third image
    "https://docos.us/fr/products/mara-floor-lamp"  // Link for the fourth image
  ];
  
  // Add click event listeners to each image-container
  document.querySelectorAll('.image-container').forEach((image, index) => {
    image.addEventListener('click', () => {
      if (links[index]) { // Check if a link exists for this index
        window.open(links[index], '_blank'); // Open the corresponding link in a new tab
      }
    });
  });
  