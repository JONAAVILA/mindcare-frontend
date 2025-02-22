import axios from "axios"

import { 
    VITE_CLOUD_NAME
} from './envAdapters.astro'

const updateImage = async (formData)=>{

    console.log('entro en el adapter',VITE_CLOUD_NAME)
    const URL= `https://api.cloudinary.com/v1_1/${VITE_CLOUD_NAME}/image/upload`

    const res = await axios.post(URL, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    })

    return res.data.url
}

export default updateImage