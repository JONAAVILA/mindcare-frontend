import './buttonReact.css'

const ButtonReact = ({children,handleClick})=>{
    return(
        <button className='button_react' onClick={handleClick} >
            {children}
        </button>
    )
}

export default ButtonReact