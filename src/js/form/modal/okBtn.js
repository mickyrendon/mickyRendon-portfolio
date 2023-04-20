// btn ok / modal
export const okBtnF = (e) => {
    const modalCtr = document.querySelector('.modal-ctr')
    const acceptBtn = document.querySelector('#accept-btn')
    const cancelModal = document.querySelector('.cancel-modal')
    const okBtn = document.querySelector('.ok-btn')
    e.preventDefault()
    // setting text values
    //hidding modal & showing btns 
    modalCtr.setAttribute('hidden', true)
    acceptBtn.classList.remove('hidden')
    cancelModal.classList.remove('hidden')
    okBtn.classList.add('hidden')
 }