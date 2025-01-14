import { Link } from "react-router-dom"

const Login = ()=>{
    return(
        <div>
            <h1>login</h1>
            <Link to={'/signin'} >
                <p>resgistrarse</p>
            </Link>
        </div>
    )
}

export default Login