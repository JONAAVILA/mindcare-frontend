import axios from "axios"

const { 
    PUBLIC_PRODUCTION,
    PUBLIC_URL_REFRESH_PROD,
    PUBLIC_URL_REFRESH_DEV
} = import.meta.env

export default async function refresh(password){
    
    const URL = PUBLIC_PRODUCTION === 'true' ? PUBLIC_URL_REFRESH_PROD : PUBLIC_URL_REFRESH_DEV

    try {
        const value = {
            password:password
        }   
        const res = await axios.post(URL,value,{
            withCredentials:true
        })
        console.log('refresh',res.data)
        return res.data
    } catch (error) {
        return error.response.data.error
    }
}