import "./EnrolList.css";
import { DetailsList, type IColumn } from "@fluentui/react/lib/DetailsList";
import { initializeIcons } from '@fluentui/react/lib/Icons';
import type { Student } from "../../models/Student";
import { MdEdit, MdDelete } from "react-icons/md";

initializeIcons(); // requerido por FluentUI

interface EnrolListProps {
    students: Student[];
    onStudentRemoved: (student: Student) => void;
    onStudentEditing: (student: Student) => void;
}

function EnrolList(props: EnrolListProps) {
    const items = props.students;

    const columns: IColumn[] = [{
        key: "fname", name: "Nombre", fieldName: "firstName",
        minWidth: 90, maxWidth: 200, isResizable: true
    }, {
        key: "lname", name: "Apellidos", fieldName: "lastName",
        minWidth: 90, maxWidth: 200, isResizable: true
    }, {
        key: "program", name: "Estudios", fieldName: "program",
        minWidth: 60, maxWidth: 200, isResizable: true
    }, {
        key: 'actions',
        name: 'Acciones',
        fieldName: 'actions',
        minWidth: 100,
        maxWidth: 150,
        isResizable: true,
        onRender: (item: any) => (
            <div>
                <MdEdit style={{ cursor: 'pointer', marginRight: '10px' }} onClick={() => handleEdit(item)} />
                <MdDelete style={{ cursor: 'pointer' }} onClick={() => handleDelete(item)} />
            </div>
        ),
    }];

    const handleDelete = (item: Student) => {
        props.onStudentRemoved(item);
    };
    const handleEdit = (item: Student) => {
        props.onStudentEditing(item); 
    };

    return (
        <div className="enrolList">
            <DetailsList items={items}
                columns={columns} />
        </div>
    );
}
export default EnrolList;