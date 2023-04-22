import { modalCtr, f } from "./modalCtr.js"

export const submitForm = () => {

    modalCtr.setAttribute('hidden', true)
    // recordar que no funciona si hay algun elemento dentro del formulario con el name='submit', se sobreeescribe
    return f.submit()
}