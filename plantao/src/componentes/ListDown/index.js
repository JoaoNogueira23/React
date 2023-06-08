import './ListaDown.css'

function ListDown(props) {

    return(
        <div className='field-list'>
            <label>{props.label}</label>
            <select onChange={(event) => props.aoDigitado(event.target.value)} required={props.obrigatorio}>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default ListDown