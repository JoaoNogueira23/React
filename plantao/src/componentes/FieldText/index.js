import './Fieldtext.css'

function FieldText(props){

    function aoDigitado(event){
        props.aoDigitado(event.target.value)
    }
    return(
        <div className='field-text'>
            <label>{props.label}</label>
            <input 
            placeholder={props.placeholder} 
            value={props.value}
            required={props.obrigatorio}
            onChange={aoDigitado}></input>
        </div>
)
}

export default FieldText