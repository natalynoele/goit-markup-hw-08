(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const body = document.querySelector("body");

  const toggleMenu = () => {
    const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    if (!isMenuOpen) {
      body.classList.add('no-scroll');       
      mobileMenu.classList.remove('anim-mod');
    } else {
      body.classList.remove('no-scroll');
      
      mobileMenu.classList.add('anim-mod');
    }
   
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
     mobileMenu.classList.remove('anim-mod');
    // bodyScrollLock.enableBodyScroll(document.body);
  });
})();
