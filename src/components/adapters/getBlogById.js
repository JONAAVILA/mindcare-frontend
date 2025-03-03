import axios from "axios"

const { PUBLIC_URL_BLOG_ID } = import.meta.env

const getBlogById = async (id)=>{
    const response = await axios.get(`${PUBLIC_URL_BLOG_ID}${id}`)

    return response.data
}

export default getBlogById