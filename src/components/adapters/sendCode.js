import axios from "axios"

export default async function sendCode (prod,urlSendCodeProd,urlSendCodeDev){

    const URL = prod === true ? urlSendCodeProd : urlSendCodeDev

    const res = await axios.post(URL,{},{
        withCredentials:true
    })
    console.log('sendCode:',res.data)
    return res.data
}