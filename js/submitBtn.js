import {langEv, navLang } from "./language.js";
const submitBtn = document.querySelector('.submit');
submitBtn.addEventListener('click', modal)

const modalCtr = document.querySelector('.modal-ctr')
function modal(e){
   e.preventDefault
   modalCtr.removeAttribute('hidden')
   console.log(`callback`);
   // values
   // const txt = document.querySelector('.modal-txt')
   // const enValue = `You will be redirected to a 'reCAPTCHA' page to comprobate you're not spam.`
   // const esValue = `Serás redirigido a la pagina de reCAPTCHA para comprobar que no eres spam.`
   // TODO agregar el texto de acuerdo al idioma 
   // validar el idioma de la pagina para poner el txt correspondiente
   // if(navLang == 'es' || langEv.options[langEv.selectedIndex].value === 'Es' ){
   //    return txt.value = esValue
   // }else{
   //    return txt.value = enValue
   // }

}
// btn aceptar del modal
const acceptBtn = document.querySelector('#accept-btn')
acceptBtn.addEventListener('click', submitHandler)
const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i


function submitHandler() {
   const f = document.forms['f-contact']
   const name = f.querySelector('#name')
   const email = f.querySelector('#email')
   const textArea = f.querySelector('#textarea')

   if ( name.value === '' || email.value === '' || textArea.value === '' ){
      // TODO, usar el modal que existe de tailwind para mostrar reemplazar el alert
      alert('Todos los campos son obligatorios')
      modalCtr.setAttribute('hidden', true)

   }else if(email.value !== email.value.match(regex)){
      console.log(email);
      email.value = ''
      email.focus()
      email.setAttribute('placeholder', 'Completa bien este campo')
      return modalCtr.setAttribute('hidden', true)

   }else{
      
      debugger
      modalCtr.setAttribute('hidden', true)
      // recordar que no funciona si hay algun elemento dentro del formulario con el name='submit', se sobreeescribe
      return f.submit()
   }
}
//cancelar btn / modal
const cancelModal = document.querySelector('.cancel-modal')
cancelModal.addEventListener('click', close)
function close() {
   modalCtr.setAttribute('hidden', true)
}
