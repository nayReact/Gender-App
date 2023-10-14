import { useState } from "react"
import { useDispatch } from "react-redux"
import { startAddUser } from "../actions/userAction"
const Form = (props) => {
    const [name, setName] =  useState('')
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            id: Number(new Date()),
            name: name
        }

        const reset = () => {
            setName('')
        }

        dispatch(startAddUser(formData, reset)) //async - making api call in this action 
        //dispatch(addUser(formData)) //bydefault redux is sync in nature - so we use redux thunk
    }

    return (
        <div>
            <form onSubmit= {handleSubmit}>
                <label>
                    Enter name
                    <input type = 'text' value = {name} onChange= {(e) => setName(e.target.value) } /> 
                </label>
                <input type="Submit" /> 
            </form>
        </div>
    )
}
export default Form