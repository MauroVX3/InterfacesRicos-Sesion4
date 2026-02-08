import './App.css'
import EnrolmentForm from './components/EnrolmentForm/EnrolmentForm'
import EnrolList from './components/EnrolList/EnrolList';
import useEnrolmentViewModel from './viewmodels/useEnrolmentViewModel';

function App() {
  const vm = useEnrolmentViewModel();

  const handleProgramChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    vm.changeProgram(event.target.value);
  };

  return (
    <div className="App">
      <div className="programs">
        <ul className="ulEnrol">
          <li className="parentLabels">
            <input type="radio" value="UG" name="programGroup" checked={vm.chosenProgram === 'UG'} 
            onChange={handleProgramChange} />
            Grado
            <input type="radio" className="radioSel" value="PG" name="programGroup" 
            checked={vm.chosenProgram === 'PG'} onChange={handleProgramChange} />
            Postgrado
          </li>
          <li>Matriculaciones actuales: {vm.students.length}</li>
        </ul>
      </div>
      <EnrolmentForm chosenProgram={vm.chosenProgram} currentEnrolments={vm.getSelectedEnrolments()}
        onSubmitStudent={vm.saveStudent} editingStudent={vm.editingStudent} onCancel={vm.clearEditingStudent} />
      <EnrolList students={vm.students} onStudentRemoved={vm.removeStudent} onStudentEditing={vm.setEditingStudent} />
    </div>
  )
}

export default App;