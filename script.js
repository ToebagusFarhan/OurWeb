
document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.querySelector('.toggle_btn');
    const toggleBtnIcon = document.querySelector('.toggle_btn i');
    const toggleBtnMenu = document.querySelector('.dropdown_menu');
  
    toggleBtn.onclick = function () {
      toggleBtnMenu.classList.toggle('open');
      const isOpen = toggleBtnMenu.classList.contains('open');
  
      toggleBtnIcon.className = isOpen 
        ? 'fa fa-xmark' 
        : 'fa fa-bars';
    };
  });
  