import "./EnrolList.css";
import { DetailsList } from "@fluentui/react/lib/DetailsList";
import { initializeIcons } from '@fluentui/react/lib/Icons';
import type { Student } from "../../entities/Student";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

initializeIcons(); // requerido por FluentUI

const columns = [{
    key: "fname", name: "Nombre", fieldName: "firstName",
    minWidth: 90, maxWidth: 200, isResizable: true
}, {
    key: "lname", name: "Apellidos", fieldName: "lastName",
    minWidth: 90, maxWidth: 200, isResizable: true
}, {
    key: "program", name: "Estudios", fieldName: "program",
    minWidth: 60, maxWidth: 200, isResizable: true
}];

// Items de ejemplo 
const items: any[] = [];
for (let i = 1; i < 5; i++) {
    items.push({
        key: i,
        fname: "Nombre de #" + i,
        lname: "Apellidos de #" + i,
        program: "UG"
    });
}

interface EnrolListProps {
    student?: Student;
}

function EnrolList(props: EnrolListProps) {
    const [items, setItems] = useState<Student[]>([]);

    useEffect(() => {
        if (props.student) {
            const currentID = props.student.id;
            if (currentID == undefined) {
                const student: Student = {
                    ...props.student,
                    id: uuidv4()
                };
                setItems([...items, student]);
            }
        }
    }, [props.student])

    return (
        <div className="enrolList">
            <DetailsList items={items}
                columns={columns} />
        </div>
    );
}
export default EnrolList