import { useState, type ChangeEvent } from 'react';
import './App.css'
import EnrolmentForm from './components/EnrolmentForm'

function App() {
  const [program, setProgram] = useState("UG");
  const [ugEnrolments, setUGEnrolments] = useState(0);
  const [pgEnrolments, setPGEnrolments] = useState(0);

  const handleChangeEnrolments = (updateEnrolments: number) => {
    program == "UG" ? setUGEnrolments(updateEnrolments) : setPGEnrolments(updateEnrolments);
  };
  const handleChangeProgram = (event: ChangeEvent<HTMLLIElement>) => {
    setProgram(event.target.value.toString());
  };
  const selectedEnrolments = (): number => {
    return program == "UG" ? ugEnrolments : pgEnrolments;
  }

  return (
    <div className="App">
      <div className="programs">
        <ul className="ulEnrol">
          <li className="parentLabels" onChange={handleChangeProgram}>
            <input type="radio" value="UG" name="programGroup" defaultChecked />
            Grado
            <input type="radio" className="radioSel" value="PG" name="programGroup" />
            Postgrado
          </li>
          <li>Matriculaciones actuales: {ugEnrolments + pgEnrolments}</li>
        </ul>
      </div>
      <EnrolmentForm chosenProgram={program} currentEnrolments={selectedEnrolments()} onChangeEnrolments={handleChangeEnrolments} />
    </div>
  )
}

export default App 