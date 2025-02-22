import axios from "axios"

import { 
    VITE_PRODUCTION,
    VITE_URL_ADMIN_LOGIN_PROD,
    VITE_URL_ADMIN_LOGIN_DEV
} from './envAdapters.astro'

export default async function adminLogin(values){
    
    const URL = VITE_PRODUCTION === 'true' ? VITE_URL_ADMIN_LOGIN_PROD : VITE_URL_ADMIN_LOGIN_DEV

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