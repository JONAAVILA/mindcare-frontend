import axios from "axios"

export default async function refresh(password,prod,urlRefreshProd,urlRefreshDev){
    
    const URL = prod === 'true' ? urlRefreshProd : urlRefreshDev

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