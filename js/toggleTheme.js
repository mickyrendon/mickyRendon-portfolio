// const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
// const prefersLightScheme = window.matchMedia('(prefers-color-scheme: light)');
const currentTheme = localStorage.getItem('theme');
const themeBtn = document.querySelector('.theme-btn');
themeBtn.addEventListener('click', toggleTheme, true);
// themeBtn.addEventListener('touch', toggleTheme, true);
    
if (currentTheme == 'dark') {
    document.body.classList.toggle('dark-theme');
    console.log('localStorage dark');

} else if (currentTheme == 'light') {
    document.body.classList.toggle('light-theme');
    console.log('localStorage light');
}

function toggleTheme() {
  if (document.body.classList) {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    var theme = document.body.classList.contains('light-theme')
    ? 'light'
    : 'dark';

    console.log(`console de theme ${theme}`);
  } else {
    // document.body.classList.toggle('dark-theme');
    var theme = document.body.classList.contains('dark-theme')
    ? 'dark'
    : 'light';

    console.log(`console de theme ${theme}`);  
  }
  localStorage.setItem('theme', theme);
  return console.log(`boton clickeado, tema ${localStorage.getItem('theme', theme)}`);
};


