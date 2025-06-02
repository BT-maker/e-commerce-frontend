document.addEventListener("DOMContentLoaded", function () {
  // Search form functionality
  const searchForm = document.querySelector(".search-form");
  const searchInput = document.querySelector(".search-input");

  // Handle form submission
  searchForm.addEventListener("submit", function (e) {
    const query = searchInput.value.trim();
    if (!query) {
      e.preventDefault(); // Prevent submission if input is empty
    }
  });

  // User menu functionality
  const userContainer = document.querySelector('.user-container');
  const userMenu = document.querySelector('.user-menu');
  const userLink = document.querySelector('.user-link');

  if (userContainer && userMenu && userLink) {
    // Toggle menu on user link click
    userLink.addEventListener('click', function(event) {
      event.preventDefault();
      event.stopPropagation();
      userMenu.classList.toggle('active');
    });

    // Prevent menu from closing when clicking inside the menu
    userMenu.addEventListener('click', function(event) {
      event.stopPropagation();
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!userContainer.contains(event.target)) {
        userMenu.classList.remove('active');
      }
    });
  }

  // Animation functionality
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "50px",
    }
  );

  // Observe all h2 headings
  const headings = document.querySelectorAll("h2");
  headings.forEach((heading) => {
    heading.style.opacity = "1";
    observer.observe(heading);
  });
});

document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menü toggle
    const menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
      menuToggle.addEventListener('click', function() {
        document.querySelector('.category-menu > ul').classList.toggle('active');
      });
    }
  
    // Alt menü toggle için
    document.querySelectorAll('.has-submenu > a').forEach(item => {
      item.addEventListener('click', function(e) {
        if (window.innerWidth <= 900) { // Sadece mobilde
          e.preventDefault();
          const parent = this.parentElement;
          
          // Diğer açık menüleri kapat
          document.querySelectorAll('.has-submenu').forEach(submenu => {
            if (submenu !== parent) {
              submenu.classList.remove('active');
            }
          });
          
          // Tıklanan menüyü aç/kapat
          parent.classList.toggle('active');
        }
      });
    });
  
    // Pencere boyutu değiştiğinde kontrol et
    window.addEventListener('resize', function() {
      if (window.innerWidth > 900) {
        // Masaüstü görünümde tüm alt menüleri kapat
        document.querySelectorAll('.has-submenu').forEach(item => {
          item.classList.remove('active');
        });
      }
    });
  });
