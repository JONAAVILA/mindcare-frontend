import axios from "axios"

const { 
    PUBLIC_PRODUCTION,
    PUBLIC_URL_CHECK_CODE_PROD,
    PUBLIC_URL_CHECK_CODE_DEV
} = import.meta.env

export default async function confirmCode(code){

    const URL = PUBLIC_PRODUCTION === 'true' ? PUBLIC_URL_CHECK_CODE_PROD : PUBLIC_URL_CHECK_CODE_DEV

    const res = await axios.post(URL,{code:code},{
        withCredentials:true
    })
    console.log('confirmcode:',res.data)
    return res.data
}   