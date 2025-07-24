import {useState} from "react";

function TableRow({row, onUpDate}){
    const [isEditing, setIsEditing] = useState(false)
    const [editedData, setEditedData] = useState(row)

    const handleChange = (e) => {
    
        setEditedData({...editedData, [e.target.name]: e.target.value})

    }

    const handleEdit = () => setIsEditing(true)
    const handleSave = () => {
        onUpDate(row.id, editedData)
        setIsEditing(false)
    }
    return(
        <tr>
            <td>
                {isEditing ? (
                    <input name ="name" value ={editedData.name} onChange={handleChange} />
                ) : (
                    row.name
                )}
            </td>
            <td>
                {isEditing ? (
                    <input name="email" value={editedData.email} onChange={handleChange} />
                ): (
                    row.emain
                )}
            </td>
            <td>
                {isEditing ? (
                    <button onClick={handleSave}>Save</button>
                ) : (
                    <button onClick={handleEdit}>Edit</button>
                )}
            </td>
        </tr>
    )
}

export default TableRow