import Titulo from "@/components/Titulo";
import styles from './page.module.css'

export default function QuienesSomos() {
    return (
      <div className="row">
        <Titulo tipo="2" contenido="Quienes somos"/>
        <p className={styles.parrafo}>Hola! Soy Ramiro Kwon, este es mi trabajo de reserva de citas.</p>
      </div>
    );
  }
  