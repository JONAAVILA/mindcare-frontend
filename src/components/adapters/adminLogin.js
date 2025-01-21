import axios from "axios"

export default async function adminLogin(values,prod,urlAdminLoginProd,urlAdminLoginDev){
    
    const URL = prod === 'true' ? urlAdminLoginProd : urlAdminLoginDev
    console.log('url',urlAdminLoginProd)

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