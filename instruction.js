document.addEventListener('DOMContentLoaded', function() {
    const bars = document.querySelector('.bars');
    const sidebar = document.querySelector('.sidebar');
    
    bars.addEventListener('click', function(e) {
      e.preventDefault();
      sidebar.classList.add('show');
    });
    
    document.addEventListener('click', function(e) {
      if (!sidebar.contains(e.target) && !bars.contains(e.target)) {
        sidebar.classList.remove('show');
      }
    });
  });
  
  