import { regex } from './regex.js'
import { modalCtr, name, email, textArea  } from './modalCtr.js'
import { langEv } from '../../language/languageBtn.js'
import { modalSpanish, modalEnglish } from "./languageTemplate.js"

// form validator
export const submitHandler = (e) => {

   e.preventDefault()
   e.stopPropagation()


   // modal alert
   const modalTitle = document.querySelector('.modal-title')
   const txt = document.querySelector('.modal-txt')
   const acceptBtn = document.querySelector('#accept-btn')
   const cancelModal = document.querySelector('.cancel-modal')
   const okBtn = document.querySelector('.ok-btn')


      // FIXME, revisar esta validacion porque no funciona correctamente
      // validating form inputs
   if ( name.value === '' || email.value === '' || textArea.value === ''){ 
         // code above isn't work
         // ||  !alfa.test(name.value) || !alfa.test(email.value) || !alfa.test(textArea.value)

         // if validation is true change modal content to be alert content, also show ok btn & hidde de other btns
      if(langEv.options[langEv.selectedIndex].value === 'Es' ){
         
         modalTitle.textContent  = modalSpanish[0].alertTitle
         txt.textContent         = modalSpanish[0].alertMsg
         okBtn.textContent       = modalSpanish[0].ok

      }else{
         
         modalTitle.textContent  = modalEnglish[0].alertTitle
         txt.textContent         = modalEnglish[0].alertMsg
         okBtn.textContent       = modalEnglish[0].ok

      }

      if (okBtn.classList === 'hidden'){
         okBtn.classList.add('hidden')
      }else{
         console.log('test');
         okBtn.classList.remove('hidden')
         acceptBtn.classList.add('hidden')
         cancelModal.classList.add('hidden')
      }
      // okBtn.classList.remove('hidden')

      // printing in console the inputs values
      console.log(name.value, email.value, textArea.value)
      modalCtr.removeAttribute('hidden')
         
      okBtn.addEventListener('click', async () => {
         const { close } = await import('./cancel.js')
         close()
      })

      }else if( email.value.includes(' ') || !regex.test(email.value.trim())){
         
         console.log(email.value)

         if(langEv.options[langEv.selectedIndex].value === 'Es' ){
            
         email.setAttribute('placeholder', modalSpanish[0].errorPlaceH)

         }else{

         email.setAttribute('placeholder', modalEnglish[0].errorPlaceH)

         }
         if (okBtn.classList !== 'hidden'){
            okBtn.classList.add('hidden')
            acceptBtn.classList.add('hidden')
            cancelModal.classList.add('hidden')
         }else{
            okBtn.classList.remove('hidden')
         }
         
         email.value = ''
         email.focus()

         return modalCtr.setAttribute('hidden', true)

      }else{

      console.log('todo ok');
      if(langEv.options[langEv.selectedIndex].value === 'Es' ){
         
         modalTitle.textContent  = modalSpanish[0].title
         txt.textContent         = modalSpanish[0].p
         cancelModal.textContent = modalSpanish[0].cancelBtn
         acceptBtn.textContent   = modalSpanish[0].sendBtn
         // okBtn.textContent       = modalSpanish[0].ok
         
      }else{

         modalTitle.textContent  = modalEnglish[0].title
         txt.textContent         = modalEnglish[0].p
         cancelModal.textContent = modalEnglish[0].cancelBtn
         acceptBtn.textContent   = modalEnglish[0].sendBtn
         // okBtn.textContent       = modalEnglish[0].ok

      }

      if (okBtn.classList !== 'hidden'){
         okBtn.classList.add('hidden')
         acceptBtn.classList.remove('hidden')
         cancelModal.classList.remove('hidden')
      }else{
         okBtn.classList.remove('hidden')
      }
      modalCtr.removeAttribute('hidden')

      cancelModal.addEventListener('click', async () => {
         const { close } = await import('./cancel.js')
         close()
      })
      acceptBtn.addEventListener('click', async () => {
         const { submitForm } = await import('./submitForm.js')
         submitForm()
      })
         

    }
 }