import { useState } from 'react'
import TableRow from './TableRow'

const initialData = [
{ id: 1, name: 'Faysal', email: 'faysal@example.com' },
{ id: 2, name: 'Ahmed', email: 'ahmed@example.com' },
{ id: 3, name: 'Tania', email: 'tania.khan@example.com' },
{ id: 4, name: 'Rafi', email: 'rafi.bd@example.com' },
{ id: 5, name: 'Nasrin', email: 'nasrin.jahan@example.com' },
{ id: 6, name: 'Shuvo', email: 'shuvo.dev@example.com' },
{ id: 7, name: 'Nadia', email: 'nadia.sultana@example.com' },
{ id: 8, name: 'Riyad', email: 'riyad.hr@example.com' }

]

function EditableTable() {
const [rows, setRows] = useState(initialData)

const handleUpdate = (id, updatedRow) => {
    setRows(rows.map(row => (row.id === id ? updatedRow : row)))
}

return (
    <table border="1" cellPadding={10}>
    <thead>
        <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        {rows.map(row => (
        <TableRow key={row.id} row={row} onUpdate={handleUpdate} />
        ))}
    </tbody>
    </table>
)
}

export default EditableTable
