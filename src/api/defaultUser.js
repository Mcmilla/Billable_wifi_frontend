import { apiRoutes } from "../apiRoutes";

import axios from "axios";

// LIST ALL DEFAULT USERS{GET}

export const ListAllUsers= async()=>{
    return await axios.get(`${apiRoutes.DefaultUser}/list`)

}



// CREATE DEFAULT USER {POST}

export const CreateDefaultUser=async(values)=>{
    return await axios.post(`${apiRoutes.DefaultUser}/create`)


}

// DELETE DEFAULT USER

export const DeleteDefaultUser=async()=>{
    return await axios.delete(`${apiRoutes.DefaultUser}/delete`)


}


// UPDATE DEFAULT USER

export const UpdateDefaultUser=async()=>{
    return await axios.put(`${apiRoutes.DefaultUser}/update`)
}




