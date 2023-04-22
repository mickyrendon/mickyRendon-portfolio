import { close } from './modal/cancel.js'
import { submitHandler } from './modal/formValidator.js'

// cancel btn
const cancelBtn = document.querySelector('.cancel-modal')
      cancelBtn.addEventListener('click', close, true)
// btn aceptar del modal
const acceptBtn = document.querySelector('#accept-btn')
      acceptBtn.addEventListener('click', submitHandler, true)
