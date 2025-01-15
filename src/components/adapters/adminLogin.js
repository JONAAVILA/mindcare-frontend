import axios from "axios"

export default async function adminLogin(values,prod,urlAdminLoginDev,urlAdminLoginProd){
    
    const URL = prod === true ? urlAdminLoginProd : urlAdminLoginDev
    console.log('params',prod)

    try {
        const admin = {
            seller:'mindcare',
            email:values.email,
            password:values.password
        }
        const res = await axios.post(URL,admin,{
            withCredentials:true
        })
        console.log('adminLogin',res.data)
        return res.data
    } catch (error) {
        return error.response.data.error
    }
}