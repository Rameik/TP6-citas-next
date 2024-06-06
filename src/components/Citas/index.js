import styles from './styles.module.css'
import Boton from "./Boton.jsx";
import { useCitas } from '../hooks/useCitas';

function Citas() {
  const { citas } = useCitas()

  return (
    <>
      {citas.map((cita, index) => (
        <div className={styles.cita} key={index}>
            <p>Mascota: <span>{cita.mascota}</span></p>
            <p>Dueño: <span>{cita.dueño}</span></p>
            <p>Fecha: <span>{cita.fecha}</span></p>
            <p>Hora: <span>{cita.hora}</span></p>
            <p>Sintomas: <span>{cita.sintomas}</span></p>
            <Boton index={index} eliminar={true} clase="u-full-width button elimnar" contenido="Eliminar x"/>
        </div>
      ))}
    </>
  )
}

export default Citas