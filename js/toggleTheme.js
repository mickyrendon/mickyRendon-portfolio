const prefersDarkScheme = window.matchMedia('(prefers-color-scheme:dark)');
const currentTheme = localStorage.getItem('theme');
const themeBtn = document.querySelector('.theme-btn');
themeBtn.addEventListener('click', toggleTheme, true);
themeBtn.addEventListener('touch', toggleTheme, true);
// API To choose between the two modes
//   if (WebViewFeature.isFeatureSupported(WebViewFeature.FORCE_DARK_STRATEGY)) {
//     WebSettingsCompat.setForceDarkStrategy(dark);
// }
    
if (currentTheme == 'dark') {
    document.body.classList.toggle('dark-theme');
    console.log('locastorage dark');

} else if (currentTheme == 'light') {
    document.body.classList.toggle('light-theme');
    console.log('locastorage light');
}

function toggleTheme() {
  if (prefersDarkScheme.matches) {
    document.body.classList.toggle('light-theme');

    var theme = document.body.classList.contains('light-theme')
    ? 'light'
    : 'dark';
  } else {
    document.body.classList.toggle('dark-theme');

    var theme = document.body.classList.contains('dark-theme')
    ? 'dark'
    : 'light';
  }
  localStorage.setItem('theme', theme);
};


