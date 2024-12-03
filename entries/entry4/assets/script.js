document.querySelectorAll('.image-container').forEach((image, index) => {
    image.addEventListener('click', () => {
      window.open(`https://example.com/link${index + 1}`, '_blank'); // Replace with specific links
    });
  });
  