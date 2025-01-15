import { useNavigate } from "react-router-dom";

const useIsLogin = () => {
    const navigate = useNavigate()

    return ()=>{
        const user = localStorage.getItem('user');
        const parsedUser = JSON.parse(user);

        if (user) {
            try {
                if (parsedUser && parsedUser.values === null && parsedUser.isValidateLogin) {
                    navigate('/login')
                    return
                }
                if (parsedUser && parsedUser.values === null && !parsedUser.isValidateLogin) {
                    navigate('/validate')
                    return
                }
                navigate('/validate')
            } catch (error) {
                console.error("Error al parsear el usuario:", error)
                navigate('/validate')
                return
            }
        }
    }
}

export default useIsLogin;