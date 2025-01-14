import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./login/Login"
import Signin from "./signin/Signin"
import './app.css'

const App = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/admin" element={<Login/>} />
                <Route path="/signin" element={<Signin/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App