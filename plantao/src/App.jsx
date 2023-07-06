import { useState } from 'react';
import './App.css';
import Banner from './componentes/banner/banner';
import Forms from './componentes/forms';
import Time from './componentes/time';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const initial = [
    {
      id: uuidv4(),
      nome: 'Luis Eduardo',
      time: 'UTI',
      turno: '12h'
    },
    {
      id: uuidv4(),
      nome: 'Douglas Souza',
      time: 'Pronto Socorro',
      turno: '6h'
    }
  ]
  
  const [employees, setEmployee] = useState(initial)
  const [times, setTime] = useState([
    {
      id: uuidv4(),
      nome: 'Pronto Socorro',
      cor: '#7184f1'
    },
    {
      id: uuidv4(),
      nome: 'Enfermaria',
      cor: '#57C278'
    },
    {
      id: uuidv4(),
      nome: 'Retaguarda',
      cor: '#82CFFA'
    },
    {
      id: uuidv4(),
      nome: 'UTI',
      cor: '#A6D157'
    }
  ])
  const newEmployee = (employee) => {
    setEmployee([...employees, employee])
  }

  function cadastrarTeam(team) {
    setTime([...times, {nome: team.nome, cor: team.cor, id: uuidv4()}])
  }

  function deleteEmployee(id){
    setEmployee(employees.filter(employee => employee.id !== id));
  }

  function deleteTeam(id){
    setTime(times.filter(time => time.id !== id))
  }
  
  return (
    <div className="App">
      <Banner></Banner>
      {console.log(times)}
      <Forms 
        aoEmployee={employee => newEmployee(employee)} 
        times={times.map(time => time.nome)}
        newTeam={team => cadastrarTeam(team)}
      > 
      </Forms>
      {times.map(time => {
        return <Time
            label={time.nome}
            cor={time.cor}
            time={time}
            employees={employees.filter(employee => employee.time === time.nome)}
            deleteEmployee={deleteEmployee}
            deleteTeam={deleteTeam}
          >
          </Time>
      })}
    </div>
  );
}

export default App;
