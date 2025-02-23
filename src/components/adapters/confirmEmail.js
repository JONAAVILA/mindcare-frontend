import axios from "axios";

const { 
    PUBLIC_PRODUCTION,
} = import.meta.env

export default async function confirmEmail(email){
    
    // const URL = PUBLIC_PRODUCTION === 'true' ? PUBLIC_URL_CONFIRM_EMAIL_PRODUCTION : PUBLIC_URL_CONFIRM_EMAIL_DEV
    
    const res = await axios.post(URL,email,{
        withCredentials: true
    })
    console.log('email',res.data)
    return res.data
}