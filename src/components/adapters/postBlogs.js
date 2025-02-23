import axios from 'axios'

const { PUBLIC_URL_BLOG_POST } = import.meta.env

const postBlogs = async (values,urlImage)=>{
    const URL = PUBLIC_URL_BLOG_POST

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