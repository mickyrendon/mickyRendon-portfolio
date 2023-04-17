import {langEv, navLang } from "../language/language.js";
const submitBtn = document.querySelector('.submit');
submitBtn.addEventListener('click', modal)

const modalCtr = document.querySelector('.modal-ctr')
const modalTitle = document.querySelector('.modal-title')
const txt = document.querySelector('.modal-txt')
const acceptBtn = document.querySelector('#accept-btn')
const cancelModal = document.querySelector('.cancel-modal')
const okBtn = document.querySelector('.ok-btn')

const regex = new RegExp(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)
// const alfa   = new RegExp('^[A-Z]+$', 'i');

const valuesContent = {
   // spanish
   titleEs: `¡Atención!`,
   pEs: `Serás redirigido a una pagina de 'reCAPTCHA' para verificar que no erés spam.`,
   cancelBtnES: `Cancelar`,
   sendBtnES: `Enviar`,
   okEs:`OK`,
   // atention modal
   atentTitleEs: `¡Todos los campos son obligatorios!`,
   atentTxtEs: `Verifica que todos los campos esten llenos con los valores correspondientes y vuelve a intentarlo.`,
   // email placeholder
   ePlaceHolderEs: `Completa bien este campo`,

   // english
   titleEn: `¡Atention!`,
   pEn: `You will be redirected to a 'reCAPTCHA' page to comprobate you're not spam.`,
   cancelBtnEn: `Cancel`,
   sendBtnEn: `Send`,
   okEn:`OK`,
   // atention modal
   atentTitleEn: `All fields are required!`,
   atentTxtEn: `Verify that all the fields are filled with the corresponding values and try again.`, 
   // email placeholder
   ePlaceHolderEn: `Complete this field well`
}
const txtValues = () => {
   
   // it works!
   if(navLang === 'es' || langEv.options[langEv.selectedIndex].value === 'Es' ){
      
      modalTitle.textContent = valuesContent.titleEs
      txt.textContent = valuesContent.pEs
      acceptBtn.textContent = valuesContent.sendBtnES
      cancelModal.textContent = valuesContent.cancelBtnES
      okBtn.textContent = valuesContent.okEs
      // alert modal
      modalTitle.textContent = valuesContent.atentTitleEs
      txt.textContent = valuesContent.atentTxtEs

   }else{
      
      modalTitle.textContent = valuesContent.titleEn
      txt.textContent = valuesContent.pEn
      acceptBtn.textContent = valuesContent.sendBtnEn
      cancelModal.textContent = valuesContent.cancelBtnEn
      okBtn.textContent = valuesContent.okEn

   }

  
}


function modal(e){
   e.preventDefault()
   e.stopPropagation()
   console.log('modal');
   modalCtr.removeAttribute('hidden')
   // FIXME revisar esta funcion porque estoy viendo otro contenido en el modal
   txtValues()

}
// btn aceptar del modal
acceptBtn.addEventListener('click', submitHandler, true)

// btn ok / modal
function okBtnF(e){

   e.preventDefault()
   // setting text values
   //hidding modal & showing btns 
   modalCtr.setAttribute('hidden', true)
   acceptBtn.classList.remove('hidden')
   cancelModal.classList.remove('hidden')
   okBtn.classList.add('hidden')

}
okBtn.addEventListener('click', okBtnF)

function submitHandler() {
   // form elements
   const f = document.forms['f-contact']
   const name = f.querySelector('#name')
   const email = f.querySelector('#email')
   const textArea = f.querySelector('#textarea')

   // validating form inputs
   if ( name.value === '' || email.value === '' || textArea.value === ''){
      // code above isn't work
      // ||  !alfa.test(name.value) || !alfa.test(email.value) || !alfa.test(textArea.value)

      // if validation is true change modal content to be alert content, also show ok btn & hidde de other btns
      if(navLang === 'es' || langEv.options[langEv.selectedIndex].value === 'Es' ){

         modalTitle.textContent = valuesContent.titleEs
         txt.textContent = valuesContent.pEs

      }else{
         
         modalTitle.textContent = valuesContent.titleEn
         txt.textContent = valuesContent.pEn

      }
      acceptBtn.classList.add('hidden')
      cancelModal.classList.add('hidden')
      okBtn.classList.remove('hidden')

      // printing in console the inputs values
      console.log(name.value, email.value, textArea.value);

      // FIXME, el modal de recaptcha no funciona en modo espa;ol al validar el email, no muestra el btn ok, muestra los demas
      // adding event to ok btn to hidde the modal
      // submitBtn.removeEventListener('click', modal)


   }else if( email.value.includes(' ') || !regex.test(email.value.trim())){
      
      console.log(email.value);
      if(navLang === 'es' || langEv.options[langEv.selectedIndex].value === 'Es' ){
         email.setAttribute('placeholder', valuesContent.ePlaceHolderEs)
      }else{
         email.setAttribute('placeholder', valuesContent.ePlaceHolderEn)
      }
      email.value = ''
      email.focus()
      return modalCtr.setAttribute('hidden', true)

   }else{

      modalCtr.setAttribute('hidden', true)
      // recordar que no funciona si hay algun elemento dentro del formulario con el name='submit', se sobreeescribe
      return f.submit()

   }
}

//cancelar btn / modal
cancelModal.addEventListener('click', close)
function close() {
   modalCtr.setAttribute('hidden', true)
}
