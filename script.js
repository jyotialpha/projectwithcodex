const button = document.getElementById('theme-toggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const savedTheme = localStorage.getItem('xyz-theme');

if ((savedTheme && savedTheme === 'dark') || (!savedTheme && prefersDark)) {
  document.body.classList.add('dark');
}

button.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const theme = document.body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('xyz-theme', theme);
});
