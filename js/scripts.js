document.addEventListener("DOMContentLoaded", function () {
  const accordions = document.querySelectorAll(".accordion");
  const image = document.getElementById("accordionImage"); 

  if (accordions.length > 0) {
    const firstAccordion = accordions[0]; 
    const initialImage = firstAccordion.getAttribute("data-image"); 
    if (initialImage) {
      image.src = initialImage; 
    }
  }

  accordions.forEach((accordion) => {
    accordion.addEventListener("click", function () {
      accordions.forEach((item) => {
        if (item !== this) {
          item.classList.remove("active");
          item.nextElementSibling.classList.remove("active");
        }
      });

      this.classList.toggle("active");
      const panel = this.nextElementSibling;
      panel.classList.toggle("active");

      const newImage = this.getAttribute("data-image"); 
      if (newImage) {
        image.src = newImage; 
      }
    });
  });
});

const gridItems = document.querySelectorAll('.grid-item');
const imageBackground = document.getElementById('imageBackground');
const overlay = document.createElement('div'); 
overlay.classList.add('image-overlay');
imageBackground.parentElement.appendChild(overlay); 

let activeItem = null; 

gridItems.forEach((item) => {
    item.addEventListener('click', () => {
        const newImage = item.getAttribute('data-image');

        if (activeItem === item) {
            imageBackground.classList.remove('active'); 
            overlay.classList.remove('hidden'); 
            activeItem = null; 
        } else {
            // Set the new background image
            imageBackground.style.backgroundImage = `url('${newImage}')`; 
            imageBackground.classList.add('active'); 
            overlay.classList.add('hidden'); 
            activeItem = item; 
        }
    });
});

