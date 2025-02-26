import './cardPreview.css'

const CardPreview = ({data})=>{
    return(
        <div className='box_card' >
            <img className='cardPreview_image' src={data.image} alt={data.heading} />
            <div className='box_card_info' >
                <h1 >{data.heading}</h1>
                <h2 >{data.subheading}</h2>
                <p className='card_description' >{data.description}</p>
            </div>
        </div>
    )
}

export default CardPreview