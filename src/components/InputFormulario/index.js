import styles from './styles.module.css'

function InputFormulario({tipo, contenidoLabel, name, placeholder}) {
    const textArea = tipo == "textarea" ? true : false

    return (
        <>
            <label className={styles.label}>{contenidoLabel}</label>
            {!textArea && <input className={styles.input + " u-full-width"} type={tipo} name={name} placeholder={placeholder}/>}
            {textArea && <textarea className="u-full-width" name={name} placeholder={placeholder}/>}
        </>
    )
}

export default InputFormulario