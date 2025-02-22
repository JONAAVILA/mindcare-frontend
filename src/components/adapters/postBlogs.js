import axios from 'axios'
import { VITE_URL_BLOG_POST } from './envAdapters.astro'

const postBlogs = async (values,urlImage)=>{
    const URL = VITE_URL_BLOG_POST

    const post = {
        heading:values.heading,
        subheading:values.subheading,
        description:values.description,
        image:urlImage
    }

    const res = await axios.post(URL,post,{
        withCredentials:true
    })

    console.log('post', res.data)
    return res.data
}
export default postBlogs