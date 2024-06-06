import styles from './styles.module.css'

function Titulo({tipo, contenido}) {
    const tipo1 = tipo === "1" ? true : false

    return (
        <>
            {tipo1 && <h1>{contenido}</h1>}
            {!tipo1 && <h2>{contenido}</h2>}
        </>
    )
}

export default Titulo