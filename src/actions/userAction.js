import axios from 'axios'
//async action generator
export const startAddUser =  (data, reset) => { //start= indication that making some api call inside this action generator
   //async code and dispatch to the reducer
    // return {
    //     type: 'ADD_USER', payload: data}
    return async (dispatch) => {
       try {
        const result = await axios.get(`https://api.genderize.io/?name=${data.name}`)
        data.gender = result.data.gender
        dispatch(addUser(data))
        reset()
       } catch(e) {
        alert(e.message)

       }
    }
}

//sync action generator
export const addUser = (data) => {
    return {type: "ADD_USER", payload: data}
}

export const removeUser = (id) => {
    return {
        type: 'REMOVE_USER', payload: id}
}

export const startEditUser = (name, id) => {
    return async (dispatch) => {
        try {
            const result = await axios.get(`https://api.genderize.io/?name=${name}`)
            dispatch(editUser({id: id, name: name, gender: result.data.gender}))
        } catch(e) {
            alert(e.message)
        }
    }
}

const editUser = (data) => {
    return {type: "EDIT_USER", payload: data }
}