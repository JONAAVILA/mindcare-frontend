import axios from "axios";


export default async function postAdmin(values,prod,urlAdminSigninDev,urlAdminSigninProd){
    
    const URL = prod === true ? urlAdminSigninProd : urlAdminSigninDev

    try {
        const admin = {
            name:values.name,
            surname:values.surname,
            seller:values.seller,
            email:values.email,
            password:values.password
        }
    
        const res = await axios.post(URL,admin,{
            withCredentials:true
        })
        console.log('postAdminLogin:',res.data)
        return res.data
    } catch (error) {
        return error.response.data.error
    }
}