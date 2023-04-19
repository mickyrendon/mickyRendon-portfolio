// adding especific btns class to proyects and submit btn
export const btnAddClass = () => {
    // getting the container of submit btn in form
    const pBtnCtr = document.querySelectorAll('.buttons-container')
    const nodeList = [...pBtnCtr]
    const sbmtBtn = document.forms['f-contact'].querySelector('.submit')
    sbmtBtn.classList.add('p-btn')
    
    nodeList.forEach(element => {
        return element.firstElementChild.classList.add('p-btn')
    })
}