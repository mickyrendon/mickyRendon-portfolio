function btnAddClass(){
    const pBtnCtr = document.querySelectorAll('.buttons-container')
    const nodeList = [...pBtnCtr]
    const sbmtBtn = document.forms['f-contact'].querySelector('input[name="submit"]')
    sbmtBtn.classList.add('p-btn')
    
    nodeList.forEach(element => {
        return element.firstElementChild.classList.add('p-btn')
    })
}