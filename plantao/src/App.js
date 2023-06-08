import { useState } from 'react';
import './App.css';
import Banner from './componentes/banner/banner';
import Forms from './componentes/forms';
import Time from './componentes/time';

function App() {

  const [employees, setEmployee] = useState([])

  const newEmployee = (employee) => {
    setEmployee([...employees, employee])
  }

  return (
    <div className="App">
      <Banner></Banner>
      <Forms aoEmployee={employee => newEmployee(employee)}></Forms>
      <Time
      label={"Escala do Dia"}
      ordely={employees}
      >
      </Time>
    </div>
  );
}

export default App;
