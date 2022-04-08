const proyectLabel = document.querySelectorAll('.proyect-label');

proyectLabel.forEach(e => {
    e.addEventListener('click', click, true)
});

function click(e){
    proyectLabel.forEach((e) => {
        e.classList.remove('active')
    })
    e.target.classList.add('active')
  
    console.log(`clickeado el elemento`);
}