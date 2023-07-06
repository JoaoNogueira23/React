import './Fieldtext.css'

function FieldText({type='text', aoDigitado, label, placeholder, value, obrigatorio}){

    function aoAlterado(event){
        aoDigitado(event.target.value)
    }
    return(
        <div className={`field-text field-${type}`}>
            <label>{label}</label>
            <input 
            placeholder={placeholder}
            type={type} 
            value={value}
            required={obrigatorio}
            onChange={aoAlterado}
            ></input>
        </div>
)
}

export default FieldText