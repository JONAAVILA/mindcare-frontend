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
    urlRefreshProd,
    urlSendCodeDev,
    urlCheckCodeDev,
    urlAdminLoginDev,
    urlAdminSigninDev,
    urlRefreshDev,
    cludName
})=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route
                    path="/admin/login"
                    element={
                        <Login
                            prod={prod}
                            urlSendCodeProd={urlSendCodeProd}
                            urlCheckCodeProd={urlCheckCodeProd}
                            urlAdminLoginProd={urlAdminLoginProd}
                            urlRefreshProd={urlRefreshProd}
                            urlSendCodeDev={urlSendCodeDev}
                            urlCheckCodeDev={urlCheckCodeDev}
                            urlAdminLoginDev={urlAdminLoginDev}
                            urlRefreshDev={urlRefreshDev}
                        />
                    }
                />
                <Route
                    path="/admin/signin"
                    element={
                        <Signin 
                            prod={prod}
                            urlAdminSigninDev={urlAdminSigninDev}
                            urlAdminSigninProd={urlAdminSigninProd}
                        />
                    }
                />
                <Route 
                    path="/admin" 
                    element={<Dashboard/>}
                    cludName={cludName}
                />
            </Routes>
        </BrowserRouter>
    )
}

export default App