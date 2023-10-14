import Table from "./Table"
import { useSelector } from "react-redux"

const Display = (props) => {
    const users = useSelector((state) => {
        return state.users
    })
    return (
        <div>
            <h3>Listing users - {users.length} </h3>
            <Table users = {users} /> 
        </div>
    )
}
export default Display