import { useNavigate } from "react-router-dom";

const useIsLogin = () => {
    const navigate = useNavigate()

    return ()=>{

        const user = localStorage.getItem('user');
        const parsedUser = JSON.parse(user);
        console.log(parsedUser)

        if (user) {
            try {
                if (parsedUser && parsedUser.values === null && parsedUser.isValidateLogin) {
                    navigate('/admin/login')
                    return
                }
                if (parsedUser && parsedUser.values === null && !parsedUser.isValidateLogin) {
                    navigate('/admin/signin')
                    return
                }
                navigate('/admin')
            } catch (error) {
                console.error("Error al parsear el usuario:", error)
                navigate('/admin/login')
                return
            }
        }
        navigate('/admin/login')
        return
    }
}

export default useIsLogin;