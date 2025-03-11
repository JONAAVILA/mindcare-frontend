import axios from "axios"

const { 
    PUBLIC_CLOUD_NAME
} = import.meta.env

const updateImage = async (formData)=>{
    const URL= `https://api.cloudinary.com/v1_1/${PUBLIC_CLOUD_NAME}/image/upload`

    const res = await axios.post(URL, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    })

    return res.data.url.replace(/^http:\/\//i, "https://")
}

export default updateImage