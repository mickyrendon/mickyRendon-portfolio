const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
const currentTheme = localStorage.getItem('theme');
themeBtn.addEventListener('click', toggleTheme, true);

if (currentTheme == 'dark') {
    document.body.classList.toggle('dark-theme');
    themeBtn.classList.toggle('flex-end');
    console.log('locastorage dark');

} else if (currentTheme == 'light') {
    document.body.classList.toggle('light-theme');
    console.log('locastorage light');
}

function toggleTheme() {
  if (prefersDarkScheme.matches) {
    document.body.classList.toggle('light-theme');
    this.classList.toggle('flex-end'); 

    var theme = document.body.classList.contains('light-theme')
    ? 'light'
    : 'dark';
  } else {
    document.body.classList.toggle('dark-theme');
    this.classList.toggle('flex-start');

    var theme = document.body.classList.contains('dark-theme')
    ? 'dark'
    : 'light';
  }
  localStorage.setItem('theme', theme);
};


