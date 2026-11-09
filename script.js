const toggle = document.querySelector('.menu-toggle');
if (toggle) {
  toggle.addEventListener('click', () => {
    const nav = document.querySelector('.main-nav');
    const isOpen = nav.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? '关闭导航' : '打开导航');
  });
}
