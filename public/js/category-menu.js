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