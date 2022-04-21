
// loading 
const wait = (delay = 0) =>
  new Promise(resolve => setTimeout(resolve, delay));

const setVisible = (elementOrSelector, visible) => 
  (typeof elementOrSelector === 'string'
    ? document.querySelector(elementOrSelector)
    : elementOrSelector
  ).style.display = visible ? 'block' : 'none';

setVisible('.body', false);
setVisible('#loading', true);

document.addEventListener('DOMContentLoaded', () =>
  wait(200).then(() => {
    setVisible('.body', true);
    setVisible('#loading', false);
    window.onload = function(){
        const bodyH = document.body.offsetHeight;
        const bckWvBtm=document.querySelector(".background-waves-btm");
        
        return bckWvBtm.style.top = `${bodyH}px`;
    }
  }));