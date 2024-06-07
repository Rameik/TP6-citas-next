'use client'

import Titulo from "@/components/Titulo";
import styles from './page.module.css'
import InputFormulario from "@/components/InputFormulario";
import Boton from "@/components/Boton";

export default function Contacto() {
  const handleSubmit = (e) => {
    e.preventDefault()
    const { nombre, apellido, email, mensaje } = Object.fromEntries(new FormData(e.target))
    if (![nombre, apellido, email, mensaje ].some(element => element.length === 0)) {
      alert("Gracias por tu mensaje!")
      e.target.reset()
    }
    else alert("Un campo estaba vacío!") 
  }

  return (
    <div className="row">
      <Titulo tipo="2" contenido="Contacto"/>
      <form className={styles.formularioContacto} onSubmit={handleSubmit}>
        <InputFormulario tipo="text" contenidoLabel="Nombre" name="nombre" placeholder=""/>
        <InputFormulario tipo="text" contenidoLabel="Apellido" name="apellido" placeholder=""/>
        <InputFormulario tipo="text" contenidoLabel="Email" name="email" placeholder=""/>
        <InputFormulario tipo="textarea" contenidoLabel="Escribí tu mensaje" name="mensaje" placeholder=""/>
        <Boton eliminar={false} clase="u-full-width button-primary" contenido="Enviar mensaje"/>
      </form>
    </div>
  );
}
