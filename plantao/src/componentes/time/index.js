import './time.css';
import React from 'react';


class Time extends React.Component{

    render(){
        return(
            this.props.ordely.length > 0 && <section className='time'>
                <table>
                    <h3>{this.props.label}</h3>
                    <tr className='head'>
                        <td>Nome</td>
                        <td>Setor</td>
                        <td>Turno</td>
                    </tr>
                    {this.props.ordely.map(employee => {
                        return <tr className='body'>
                            <td>{employee.name}</td>
                            <td>{employee.sector}</td>
                            <td>{employee.bout}</td>
                        </tr>
                    })}
                </table>                   
                
            </section>
        )
    }

}

export default Time;