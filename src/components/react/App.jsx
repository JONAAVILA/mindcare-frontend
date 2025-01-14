import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "./dashboard/Dashboard"
import Signin from "./signin/Signin"
import Login from "./login/Login"
import './app.css'

const App = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/admin" element={<Login/>} />
                <Route path="/signin" element={<Signin/>} />
                <Route path="/dashboard" element={<Dashboard/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App