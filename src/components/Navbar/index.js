import Link from 'next/link'
import styles from './styles.module.css'

function Navbar() {

    return (
        <div className={styles.linksContainer}>
            <ul className={styles.links}>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/reservas">Reservas</Link>
                </li>
                <li>
                    <Link href="/quienes-somos">Quienes somos</Link>
                </li>
                <li>
                    <Link href="/contacto">Contacto</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar