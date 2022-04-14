const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
const currentTheme = localStorage.getItem('theme');
const themeBtn = document.querySelector('.theme-btn');
      themeBtn.addEventListener('click', toggleTheme, true);
      // themeBtn.addEventListener('touch', toggleTheme, true);
// const glow = document.querySelector('.glow');
// const flare = document.querySelector('.flare');
// const bulb = document.querySelector('.bulb');
// const sBulb = document.querySelector('.s-bulb');
// const filament = document.querySelector('.filament');


if (currentTheme == 'dark') {
    document.body.classList.toggle('dark-theme');
    // themeBtn.classList.toggle('flex-end');
    console.log('locastorage dark');

} else if (currentTheme == 'light') {
    document.body.classList.toggle('light-theme');
    console.log('locastorage light');
}

function toggleTheme() {
  if (prefersDarkScheme.matches) {
    document.body.classList.toggle('light-theme');
    // glow.classList.toggle('glow-night'); 
    // flare.classList.toggle('flex-end'); 
    // bulb.classList.toggle('flex-end'); 
    // sBulb.classList.toggle('flex-end'); 
    // filament.classList.toggle('flex-end'); 

    var theme = document.body.classList.contains('light-theme')
    ? 'light'
    : 'dark';
  } else {
    document.body.classList.toggle('dark-theme');
    // this.classList.toggle('flex-start');

    var theme = document.body.classList.contains('dark-theme')
    ? 'dark'
    : 'light';
  }
  localStorage.setItem('theme', theme);
};


