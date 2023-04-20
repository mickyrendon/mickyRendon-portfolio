// import {langEv, navLang } from "";
import { modalCtr } from './modal/modalCtr.js'
import { close } from './modal/cancel.js'
import { submitHandler } from './modal/formValidator.js'
import { okBtnF } from './modal/okBtn.js'

// cancel btn
const cancelBtn = document.querySelector('.cancel-modal')
cancelBtn.addEventListener('click', close, true)
// btn aceptar del modal
const acceptBtn = document.querySelector('#accept-btn')
      acceptBtn.addEventListener('click', submitHandler, true)
// btn ok
const okBtn = document.querySelector('.ok-btn')
      okBtn.addEventListener('click', okBtnF, true)

// form send btn
export function modal(e){
   e.preventDefault()
   e.stopPropagation()
   modalCtr.removeAttribute('hidden')
}