import axios from "axios"

const { 
    PUBLIC_PRODUCTION,
    PUBLIC_URL_ADMIN_LOGIN_PROD,
    PUBLIC_URL_ADMIN_LOGIN_DEV
} = import.meta.env

export default async function adminLogin(values){
    
    const URL = PUBLIC_PRODUCTION === 'true' ? PUBLIC_URL_ADMIN_LOGIN_PROD : PUBLIC_URL_ADMIN_LOGIN_DEV

    try {
        const admin = {
            email:values.email,
            password:values.password
        }
        const res = await axios.post(URL,admin,{
            withCredentials:true
        })
        console.log('adminLog',res.data)
        return res.data
    } catch (error) {
        return error.response.data.error
    }
}