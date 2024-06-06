import '../css/Boton.css'
import { useCitas } from '../hooks/useCitas';
import styles from './styles.module.css'

function Boton({eliminar, clase, contenido, index}) {
  const { citas, setCitas } = useCitas()

  const handleClick = () => {
    if(!eliminar) return
    if (confirm("¿Esta seguro de eliminar la cita?")) {
      const nuevasCitas = [...citas];
      nuevasCitas.splice(index, 1);
      setCitas(nuevasCitas);
    }
  }

  return (
    <>
      <button onClick={handleClick} className={styles.button.eliminar}>{contenido}</button>
    </>
  )
}

export default Boton