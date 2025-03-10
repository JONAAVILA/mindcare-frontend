import axios from "axios"

const { PUBLIC_URL_SEND_CONSULT } = import.meta.env

const sendConsult = async (values)=>{
    try {
        const response = await axios.post(PUBLIC_URL_SEND_CONSULT,values)
    
        return response.data
    } catch (error) {
        console.log(error)
        return 'Ocurrió un error 🤷‍♂️'
    }
}

export default sendConsult