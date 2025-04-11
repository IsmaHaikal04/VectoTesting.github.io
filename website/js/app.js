
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const customMenu = document.getElementById('custom-menu');
    
    // Custom overlay menu toggle logic
    menuToggle.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            customMenu.classList.toggle('active');
        }
    });

    // Ensure Bootstrap's navbar-collapse hides the custom menu when toggled
    const navbarCollapse = document.querySelector('.navbar-collapse');
    navbarCollapse.addEventListener('hidden.bs.collapse', () => {
        customMenu.classList.remove('active');
    });

    // Close menu overlay when clicking outside of menu items
    customMenu.addEventListener('click', (e) => {
        if (e.target === customMenu) {
            customMenu.classList.remove('active');
        }
    });

    // Close the menu when a menu link is clicked
    const menuLinks = customMenu.querySelectorAll('.menu-link');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            customMenu.classList.remove('active');
        });
    });
});
// WHYCHOOSEUS
//ANIMATION
document.addEventListener("DOMContentLoaded", function () {
  function revealOnScroll() {
      const reveals = document.querySelectorAll(".reveal");
      reveals.forEach((el) => {
          const windowHeight = window.innerHeight;
          const elementTop = el.getBoundingClientRect().top;
          const revealPoint = 100; // Adjust to change when the reveal happens

          if (elementTop < windowHeight - revealPoint) {
              el.classList.add("active");
          }
      });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Run once to check if any elements should be revealed on load
});

// ANIMATION
// Trigger animation when section is in view
const elements = document.querySelectorAll('.animate-on-scroll');
const scrollAnimation = () => {
  elements.forEach(element => {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      element.classList.add('animate-visible');
    }
  });
};

window.addEventListener('scroll', scrollAnimation);
window.addEventListener('load', scrollAnimation);

//BRAND IMAGE SLIDER

$(document).ready(function () {
  $('.brands-carousel').owlCarousel({
    loop: true,               
    margin: 20,               
    center: true,             
    nav: false,
    dots: false,              
    autoplay: true,           
    autoplayTimeout: 3000,    
    autoplayHoverPause: true, 
    responsive: {             
      768: {
        items: 3              
      },
      600: {
        items: 3              
      },
      1000: {
        items: 3             
      }
    }
  });
});

// Open Modal Function (Only for Suspension Parts)
function openModal() {
  document.getElementById('suspensionModal').style.display = 'flex';
}

// Close Modal Function
function closeModal() {
  document.getElementById('suspensionModal').style.display = 'none';
}

// Close modal if user clicks outside the content
window.onclick = function(event) {
  let modal = document.getElementById('suspensionModal');
  if (event.target === modal) {
      closeModal();
  }
}

function sendToWhatsApp() {
  let whatsappURL = `https://wa.me/60138828903?text=Hello,i%20want%20to%20ask%20about`;
  window.open(whatsappURL, "_blank");
}

window.addEventListener('scroll', function() {
        const floatingButton = document.querySelector('.floating-whatsapp');
        if (window.scrollY > 300) {
            floatingButton.classList.add('visible');
        } else {
            floatingButton.classList.remove('visible');
        }
    });