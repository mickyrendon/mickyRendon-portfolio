// const proyectLabel = document.querySelectorAll('.proyect-label');
const label = document.querySelectorAll('.label');


label.forEach(e => {
    e.addEventListener('click', click, true)
});

function click(e){
    label.forEach((e) => {
        e.parentElement.classList.remove('active');
        e.classList.remove('column');
    })
    e.target.parentElement.classList.add('active');
    e.target.classList.add('column');
}