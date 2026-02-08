import { useState } from 'react';
import type { Student } from '../models/Student';
import { v4 as uuidv4 } from 'uuid';

// El Viewmodel necesario para cumplir con el patrón MVVM, que se encargará de gestionar el estado de 
// la aplicación y proporcionar funciones para modificarlo.
// Su funcionalidad antes se encontraba en el componente App, pero se ha extraído a este hook personalizado 
// para separar responsabilidades y mejorar la mantenibilidad del código, siguiendo el patrón MVVM.
// La carpeta views está vacía porque solo hay una vista (App.tsx) y el resto son componentes.
export default function useEnrolmentViewModel() {
  const [students, setStudents] = useState<Student[]>([]);
  const [chosenProgram, setChosenProgram] = useState<string>('UG');
  const [editingStudent, setEditingStudent] = useState<Student | undefined>(undefined);

  const changeProgram = (program: string) => setChosenProgram(program);

  const getSelectedEnrolments = (): number => {
    return students.filter(s => s.program === chosenProgram).length;
  };

  const saveStudent = (student: Student) => {
    if (!student.id) {
      const newStudent: Student = { ...student, id: uuidv4() };
      setStudents(prev => [...prev, newStudent]);
    } else {
      setStudents(prev => prev.map(s => (s.id === student.id ? { ...student } : s)));
    }
    setEditingStudent(undefined);
  };

  const removeStudent = (student: Student) => {
    setStudents(prev => prev.filter(s => s.id !== student.id));
  };

  const clearEditingStudent = () => setEditingStudent(undefined);

  return {
    students,
    chosenProgram,
    editingStudent,
    changeProgram,
    getSelectedEnrolments,
    saveStudent,
    removeStudent,
    setEditingStudent,
    clearEditingStudent,
  } as const;
};