import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "./dashboard/Dashboard"
import Signin from "./signin/Signin"
import Login from "./login/Login"
import './app.css'

const App = ({
    prod,
    urlSendCodeProd,
    urlCheckCodeProd,
    urlAdminLoginProd,
    urlAdminSigninProd,
    urlSendCodeDev,
    urlCheckCodeDev,
    urlAdminLoginDev,
    urlAdminSigninDev
})=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route
                    path="/admin"
                    element={
                        <Login
                            prod={prod}
                            urlSendCodeProd={urlSendCodeProd}
                            urlCheckCodeProd={urlCheckCodeProd}
                            urlAdminLoginProd={urlAdminLoginProd}

                            urlSendCodeDev={urlSendCodeDev}
                            urlCheckCodeDev={urlCheckCodeDev}
                            urlAdminLoginDev={urlAdminLoginDev}
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