import './time.css';
import React from 'react';
import Row from '../Row';
import { AiFillCloseCircle } from 'react-icons/ai';


class Time extends React.Component{

    render(){
        return(
            this.props.employees.length > 0 && <section className='time' style={{backgroundColor: this.props.cor}} >
                <AiFillCloseCircle size={20} className="deletar-time" onClick={() => this.props.deleteTeam(this.props.time.id)} />
                <h3>{this.props.label}</h3>
                <table>
                    <tr className='head'>
                        <td className='head-title'>Nome</td>
                        <td className='head-title'>Turno</td>
                    </tr>
                    {this.props.employees.map(
                        employee => {
                            return <tr className='body'>
                                <Row
                                field={employee.nome}
                                ></Row>
                                <Row
                                icon
                                aoDelete={this.props.deleteEmployee}
                                field={employee.turno}
                                id={employee.id}
                                ></Row>
                            </tr>
                    })} 
                </table>                   
                
            </section>
        )
    }

}

export default Time;