const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? '关闭菜单' : '打开菜单');
});

nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

const dateInput = document.querySelector('#date');
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
dateInput.min = tomorrow.toISOString().split('T')[0];

document.querySelector('#reservation-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const note = event.currentTarget.querySelector('.form-note');
  note.textContent = '已记录您的用餐偏好。正式预订功能接入后，我们会在这里显示可订餐位。';
});
