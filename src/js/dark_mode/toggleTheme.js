//onload validator
export const themeValidator = () => {
  const body = document.querySelector('body')
  const currentTheme = localStorage.getItem('theme')
  
  return currentTheme === 'dark'?
  body.classList.toggle('dark-theme'):  
  currentTheme === 'light'?
  body.classList.toggle('light-theme'):
  (body.classList.toggle('light-theme'),
  console.log('no es light'))

}

// btn function
export const toggleTheme = () => {
  const body = document.querySelector('body')

  body.classList.toggle('light-theme')
  body.classList.toggle('dark-theme')

  let theme = body.classList.contains('light-theme')
  ? 'light'
  : 'dark';

  console.log('if');
  console.log(`console de theme ${theme}`);
  return localStorage.setItem('theme', theme);
    
} 

