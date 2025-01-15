import { useFormik } from 'formik'
import './login.css'
import ButtonReact from '../buttons/buttonReact/ButtonReact'
import { Link, useNavigate } from 'react-router-dom'
import { validateLogin } from '../../../../utils/validate'
import setStorage from '../../../../utils/setStorage'
import sendCode from '../../adapters/sendCode'
import adminLogin from '../../adapters/adminLogin'
import { useState } from 'react'
import ValidateCode from '../modals/validateCode/ValidateCode'

const Login = ({prod,urlAdminLoginProd,urlAdminLoginDev,urlSendCodeProd,urlSendCodeDev,urlCheckCodeProd,urlCheckCodeDev})=>{
    const [modal, setModal] = useState(false)
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues:{
            email:'',
            password:''
        },
        validationSchema:validateLogin,
        onSubmit: async (values)=>{
            
            const res = await adminLogin(values,prod,urlAdminLoginProd,urlAdminLoginDev)
            console.log('seller',res)
            if(res.name){
                setStorage(res)
                navigate('/dashboard')
                return
            }

            if(res === 'validate user'){
                const codeRes = await sendCode(prod,urlSendCodeProd,urlSendCodeDev)
                if(codeRes.error) {
                    setalert(codeRes.error)
                    return
                }
                setmodal(!modal)
                return
            }

            setalert('Clave o correo incorrecto')
            return
        }
    })

    const handleModal = ()=>{
        setModal(!modal)
    }

    return(
        <div className='login_container' >
            {modal && <ValidateCode handleModal={handleModal} email={formik.values.email} prod={prod} urlCheckCodeProd={urlCheckCodeProd} urlCheckCodeDev={urlCheckCodeDev} />}
            <div>
                <Link to={'/signin'} >
                    <h2>INGRESO</h2>
                </Link>
                <h3 className="login_heading" >Admin</h3>
            </div>
            <form
                onSubmit={formik.handleSubmit}
                className='login_form'
            >
                <div className='login_box_inputs' >
                    <input
                        type="text"
                        id='email'
                        name='email'
                        placeholder='EMAIL'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    <div className='box_login_admin_errors' >
                        {formik.touched.email && formik.errors.email && <p>{formik.errors.email}</p>}
                    </div>
                    <input
                        type="text"
                        id='password'
                        name='password'
                        placeholder='PASSWORD'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                    />
                    <div className='box_login_admin_errors' >
                        {formik.touched.password && formik.errors.password && <p>{formik.errors.password}</p>}
                    </div>
                </div>
                <div className='login_box_button' >
                    <ButtonReact type='submit'>
                        ENVIAR
                    </ButtonReact>
                </div>
            </form>
        </div>
    )
}

export default Login