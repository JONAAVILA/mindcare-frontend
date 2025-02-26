import axios from "axios"

const { PUBLIC_URL_GET_BLOGS } = import.meta.env

const getBlogs = async ()=>{

    const response = await axios.get(PUBLIC_URL_GET_BLOGS,{
        withCredentials:true
    })

    return response.data
}

export default getBlogs