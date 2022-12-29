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
// TODO, verificar el contenido del form y luego enviar 
const acceptBtn = document.querySelector('#accept-btn')
acceptBtn.addEventListener('click', submitHandler)

function submitHandler() {
   const f = document.forms['f-contact']
   modalCtr.setAttribute('hidden', true)
// recordar que no funciona si hay algun elemento dentro del formulario con el name='submit', se sobreeescribe
   f.submit()
   console.log(f.hasAttribute('sent'))
}
// TODO, crear funcion para el btn cancelar del modal