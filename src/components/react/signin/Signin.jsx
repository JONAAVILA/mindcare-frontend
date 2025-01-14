import { Link } from "react-router-dom"

const Signin = ()=>{
    return(
        <div>
            <h1>registrarse</h1>
            <Link to={'/admin'} >
                <p>login</p>
            </Link>
        </div>
    )
}

export default Signin