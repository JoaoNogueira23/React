import "./forms.css"
import FieldText from './../FieldText/index';
import ListDown from './../ListDown/index';
import Button from "../Button";
import { useState } from "react";

function Forms(props) {
    const setores = [
        'UTI',
        'PS',
        'Retaguarda',
        'Enfermaria'
    ]
    
    const turnos = [
        '6h',
        '12h'
    ]

    const [nome, setNome] = useState('')
    const [setor, setSetor] = useState('')
    const [turno, setTurno] = useState('')

/*     const [userDatas, setUseDatas] = useState([{
        name: '',
        setor: '',
        turno: ''
    }])

    function handlFormChange(e) {
        var input = e.target.getAttribute('name');
        if(input === 'nome')
        {
            setUseDatas(
               [...userDatas, [{'name':e.target.value,
                'setor':userDatas.setor,
                'turno':userDatas.turno}]])
        }
        else if(input === 'setor'){
            setUseDatas(
                [...userDatas, [{'name':e.name,
                 'setor':e.target.value,
                 'turno':userDatas.turno}]])
        }
        else if(input === 'turno'){
            setUseDatas(
                [...userDatas, [{'name':e.name,
                 'setor':userDatas.setor,
                 'turno':e.target.value}]])
        }

    } */

    
    const save = (evento) => {
        evento.preventDefault()
        props.aoEmployee({
            nome,
            setor,
            turno
    })
    }

    return(
        <section className="forms">
            <form onSubmit={save}>
                <h2>Preencha seus dados e horários</h2>
                <FieldText 
                name='nome'
                label="Nome" 
                placeholder="Type your Name"
                value={nome}
                obrigatorio={true}
                aoDigitado={value => {setNome(value)}}
                />
                <ListDown 
                name='setor'
                label="Setor" 
                itens={setores}
                value={setor}
                obrigatorio={true}
                aoDigitado={value => {setSetor(value)}}
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
        </section>
    )
}

export default Forms;