const label = document.querySelectorAll('.label')

export const click = (e) => {
    label.forEach((e) => {
        e.parentElement.classList.remove('active');
        e.classList.remove('shadow');
        e.classList.remove('column');
        e.firstElementChild.classList.remove('icon-active');
    })
    e.target.parentElement.classList.add('active');
    e.target.classList.add('shadow-active');
    e.target.classList.add('column');
    e.target.classList.add('active-text');
    e.target.firstElementChild.classList.add('icon-active');
}