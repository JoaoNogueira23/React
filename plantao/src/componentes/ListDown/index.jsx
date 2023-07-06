import './ListaDown.css'

function ListDown(props) {

    return(
        <div className='field-list'>
            <label>{props.label}</label>
            <select onChange={(event) => props.aoDigitado(event.target.value)} required={props.obrigatorio}>
                <option key={'default'} disabled selected>{"Select your option"}</option>
                {props.itens.map(item => {
                    return <option key={item} required={props.obr}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default ListDown