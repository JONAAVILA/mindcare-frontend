import { useState } from "react"
import getBlogs from "../../adapters/getBlogs"
import CardPreview from "../cardPreview/CardPreview"
import ButtonReact from "../buttons/buttonReact/ButtonReact"
import './preview.css'
import LoadIcon from "../icons/loader/LoadIcon"

const Preview = ()=>{
    const [data,setData] = useState([])
    const [loader,setLoader] = useState(false)
    
    const handleData = async ()=>{
        setLoader(!loader)
        const res = await getBlogs()
        setData([...res].reverse())
        setLoader(false)
    }

    return(
        <aside className="aside_preview" >
            <div className='preview_box_loader' >
                {loader && <LoadIcon size={60} />}
            </div>
            <div className="container_card" >
                {data?.map(blog => (
                    <CardPreview key={blog.id} data={blog} />
                ))}
            </div>
            <div className="preview_box_button" >
                <ButtonReact handleClick={handleData} >
                    REFRESCAR
                </ButtonReact>
            </div>
        </aside>
    )
}

export default Preview