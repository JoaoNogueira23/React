import './Row.css'
import { Fragment } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';

function Row(props){
    return(
        props.icon ? <Fragment> 
            <td>{props.field}</td>
            <AiFillCloseCircle size={20} className="deletar" onClick={() => props.aoDelete(props.id)} />
        </Fragment> : <td>{props.field}</td>
    )
}

export default Row;