import { useDispatch } from "react-redux"
import { removeUser, startEditUser } from "../actions/userAction"

const Table = (props) => {
    const {users} = props
    const dispatch = useDispatch()

    const handleRemove = (id) => {
        dispatch(removeUser(id))
    }

    const handleEdit = (id) => {
        const input = prompt('Enter name')
        if(input) {
            dispatch(startEditUser(input, id))
        }

    }
    return (
        <div>
            <table border={1}>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>gender</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(ele => {
                        return (
                            <tr key = {ele.id}>
                                <td>{ele.name}</td>
                                <td> {ele.gender} </td>
                                <td>
                                    <button onClick={ () => {
                                        handleEdit(ele.id)
                                    }}>Edit</button>
                                    
                                    <button onClick={() => {
                                    handleRemove(ele.id)
                                }}>X</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default Table