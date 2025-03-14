import axios from "axios"

const { PUBLIC_URL_NEWSLETTER } = import.meta.env

const subNewsletter = async (email)=>{
    console.log('entro',email)
    const response = await axios.post(PUBLIC_URL_NEWSLETTER,email)

    return response.data
}

export default subNewsletter