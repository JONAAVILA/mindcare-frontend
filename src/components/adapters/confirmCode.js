import axios from "axios"

export default async function confirmCode(code,prod,urlCheckCodeProd,urlCheckCodeDev){

    const URL = prod === true ? urlCheckCodeProd : urlCheckCodeDev

    const res = await axios.post(URL,{code:code},{
        withCredentials:true
    })
    console.log('confirmcode:',res.data)
    return res.data
}   