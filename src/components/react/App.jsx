import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "./dashboard/Dashboard"
import Signin from "./signin/Signin"
import Login from "./login/Login"
import './app.css'

const App = ({prod,urlAdminSigninDev,urlAdminSigninProd,urlAdminLoginDev,urlAdminLoginProd})=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route
                    path="/admin"
                    element={
                        <Login
                            prod={prod}
                            urlAdminLoginDev={urlAdminLoginDev}
                            urlAdminLoginProd={urlAdminLoginProd}
                        />
                    }
                />
                <Route
                    path="/signin"
                    element={
                        <Signin 
                            prod={prod}
                            urlAdminSigninDev={urlAdminSigninDev}
                            urlAdminSigninProd={urlAdminSigninProd}
                        />
                    }
                />
                <Route 
                    path="/dashboard" 
                    element={<Dashboard/>}
                />
            </Routes>
        </BrowserRouter>
    )
}

export default App