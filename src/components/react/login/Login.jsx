import { useFormik } from 'formik'
import './login.css'
import ButtonReact from '../buttons/buttonReact/ButtonReact'

const Login = ()=>{

    const formik = useFormik({
        initialValues:{
            email:'',
            password:''
        },
        validationSchema:'',
        onSubmit:''
    })

    return(
        <div className='login_container' >
            <div>
                <h2>INGRESO</h2>
                <h3 className="login_heading" >ADMIN</h3>
            </div>
            <form
                onSubmit={formik.handleSubmit}
                className='login_form'
            >
                <input
                    type="text"
                    id='password'
                    name='password'
                    placeholder='PASSWORD'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                />
                <input
                    type="text"
                    id='email'
                    name='email'
                    placeholder='EMAIL'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
                <div className='login_box_button' >
                    <ButtonReact type='submit' />
                </div>
            </form>
        </div>
    )
}

export default Login