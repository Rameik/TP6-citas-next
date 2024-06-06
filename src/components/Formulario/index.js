import InputFormulario from './InputFormulario.jsx'
import Boton from './Boton.jsx'
import Cita from '../models/Cita.js'
import { useCitas } from '../hooks/useCitas.js'

export function Formulario () {
    const { citas, setCitas } = useCitas()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (confirm("¿Desea agregar la cita ingresada?")) {
            const { nombreMascota, nombreDueño, fecha, hora, sintomas } = Object.fromEntries(new FormData(e.target))
            if (![nombreMascota, nombreDueño, fecha, hora, sintomas].some(element => element.length === 0)) {
                const newCita = new Cita(nombreMascota, nombreDueño, fecha, hora, sintomas)
                setCitas([...citas, newCita]);
                e.target.reset()
            }
            else { alert("Un campo estaba vacío!") }
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <InputFormulario tipo="text" contenidoLabel="Nombre mascota" name="nombreMascota" placeholder="Nombre mascota"/>
            <InputFormulario tipo="text" contenidoLabel="Nombre dueño" name="nombreDueño" placeholder="Nombre dueño de la mascota"/>
            <InputFormulario tipo="date" contenidoLabel="Fecha" name="fecha" placeholder=""/>
            <InputFormulario tipo="time" contenidoLabel="Hora" name="hora" placeholder=""/>
            <InputFormulario tipo="textarea" contenidoLabel="Sintomas" name="sintomas" placeholder=""/>
            <Boton eliminar={false} clase="u-full-width button-primary" contenido="Agregar cita"/>
        </form>
    )
}