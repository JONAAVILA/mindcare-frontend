import './alert.css'

const Alert = ({children,handleAlert})=>{
    return(
        <div
            onClick={handleAlert}
            className='alert_container'
        >
            <p>{children}</p>
        </div>
    )
}

export default Alert