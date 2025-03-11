import axios from "axios"

const { 
    PUBLIC_PRODUCTION,
    PUBLIC_URL_SEND_CODE_PROD,
    PUBLIC_URL_SEND_CODE_DEV
} = import.meta.env

export default async function sendCode (){

    const URL = PUBLIC_PRODUCTION === 'true' ? PUBLIC_URL_SEND_CODE_PROD : PUBLIC_URL_SEND_CODE_DEV

    const res = await axios.post(URL,{},{
        withCredentials:true
    })
    console.log('sendCode:',res.data)
    return res.data
}