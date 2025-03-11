import axios from "axios";

const { 
    PUBLIC_PRODUCTION,
    PUBLIC_URL_ADMIN_SIGNIN_PROD,
    PUBLIC_URL_ADMIN_SIGNIN_DEV
} = import.meta.env

export default async function postAdmin(values){
    
    const URL = PUBLIC_PRODUCTION === 'true' ? PUBLIC_URL_ADMIN_SIGNIN_PROD : PUBLIC_URL_ADMIN_SIGNIN_DEV

    try {
        const admin = {
            name:values.name,
            surname:values.surname,
            email:values.email,
            password:values.password
        }
    
        const res = await axios.post(URL,admin,{
            withCredentials:true
        })
        console.log('postAdminLogin:',res.data)
        return res.data
    } catch (error) {
        return error.response.data.error
    }
}