import '../css/InputFormulario.css'

function InputFormulario({tipo, contenidoLabel, name, placeholder}) {
    const textArea = tipo == "textarea" ? true : false

    return (
        <>
            <label>{contenidoLabel}</label>
            {!textArea && <input className="u-full-width" type={tipo} name={name} placeholder={placeholder}/>}
            {textArea && <textarea className="u-full-width" name={name} placeholder={placeholder}/>}
        </>
    )
}

export default InputFormulario