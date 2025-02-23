import axios from "axios"

const { 
    PUBLIC_CLOUD_NAME
} = import.meta.env

const updateImage = async (formData)=>{

    console.log('entro en el adapter',PUBLIC_CLOUD_NAME)
    const URL= `https://api.cloudinary.com/v1_1/${PUBLIC_CLOUD_NAME}/image/upload`

    const res = await axios.post(URL, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    })

    return res.data.url
}

export default updateImage