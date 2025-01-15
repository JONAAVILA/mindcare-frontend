import axios from "axios";

const VITE_PRODUCTION = import.meta.env.VITE_PRODUCTION
const VITE_URL_CONFIRM_EMAIL_DEV = import.meta.env.VITE_URL_CONFIRM_EMAIL_DEV
const VITE_URL_CONFIRM_EMAIL_PRODUCTION = import.meta.env.VITE_URL_CONFIRM_EMAIL_PRODUCTION

const URL = VITE_PRODUCTION === 'true' ? VITE_URL_CONFIRM_EMAIL_PRODUCTION : VITE_URL_CONFIRM_EMAIL_DEV

export default async function confirmEmail(email){
    const res = await axios.post(URL,email,{
        withCredentials: true
    })
    console.log('email',res.data)
    return res.data
}