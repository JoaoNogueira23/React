import "./forms.css"
import FieldText from './../FieldText/index';
import ListDown from './../ListDown/index';
import Button from "../Button";
import { useState } from "react";

function Forms(props) {
    const turnos = [
        '6h',
        '12h'
    ]

    const [nome, setNome] = useState('')
    const [time, setTime] = useState('')
    const [turno, setTurno] = useState('')
    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('')

    
    const save = (evento) => {
        evento.preventDefault()
        props.aoEmployee({nome,time,turno})
        setNome('')
        setTurno('')
        setTime('')
    }

    return(
        <section className="forms">
            <form onSubmit={save} id="forms-1">
                <h2>Preencha seus dados para um novo colaborador</h2>
                <FieldText 
                name='nome'
                label="Nome" 
                placeholder="Type your Name"
                value={nome}
                obrigatorio={true}
                aoDigitado={value => {setNome(value)}}
                />
                <ListDown 
                name='time'
                label="Time" 
                itens={props.times}
                value={time}
                obrigatorio={true}
                aoDigitado={value => {setTime(value)}}
                />
                <ListDown 
                label="Turno" 
                name='turno'
                itens={turnos}
                value={turno}
                obrigatorio={true}
                aoDigitado={value => {setTurno(value)}}
                />
                <Button> Submit </Button>
            </form>
            <form id='forms-2' onSubmit={(event) => {
                console.log(nomeTime)
                event.preventDefault()
                props.newTeam({nome: nomeTime, cor: corTime})
                setCorTime('')
                setNomeTime('')
            }}>
                <h2>Preencha seus dados para criar um novo time</h2>
                <FieldText 
                name='team'
                label="Nome" 
                placeholder="Type your new team"
                value={nomeTime}
                obrigatorio={true}
                aoDigitado={value => {setNomeTime(value)}}
                />
                <FieldText 
                name='cor'
                label="Color"
                type='color' 
                placeholder="Type the team color"
                value={corTime}
                obrigatorio={true}
                aoDigitado={value => {setCorTime(value)}}
                />
                <Button> Submit </Button>
            </form>
        </section>
    )
}

export default Forms;