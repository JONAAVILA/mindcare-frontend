import { useFormik } from 'formik'
import './signin.css'
import ButtonReact from '../buttons/buttonReact/ButtonReact'
import { validateAdmin } from '../../../../utils/validate'

const Signin = ()=>{

    const formik = useFormik({
        initialValues:{
            name:'',
            surname:'',
            seller:'mindcare',
            email:'',
            password:''
        },
        validationSchema:validateAdmin,
        onSubmit:''
    })

    return(
        <div>
            <div className='admin_signin_box_heading' >
                <h2>registro</h2>
                <h3 className='admin_signin_heading' >ADMIN</h3>
            </div>
            <form
                onSubmit={formik.handleSubmit}
                className='admin_create_form'
            >
                 <div>
                    <input
                        type="text"
                        id='name'
                        name='name'
                        value={formik.values.name}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        placeholder="NOMBRE"
                    />
                    <div className='box_signin_admin_errors' >
                        {formik.touched.name && formik.errors.name && <p>{formik.errors.name}</p>}
                    </div>
                    <input
                        type="text"
                        id='surname'
                        name='surname'
                        value={formik.values.surname}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        placeholder="APELLIDO"
                    />
                    <div className='box_signin_admin_errors' >
                        {formik.touched.surname && formik.errors.surname && <p>{formik.errors.surname}</p>}
                    </div>
                    <input
                        type="text"
                        id='email'
                        name='email'
                        value={formik.values.email}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        placeholder="EMAIL"
                    />
                    <div className='box_signin_admin_errors' >
                        {formik.touched.email && formik.errors.email && <p>{formik.errors.email}</p>}
                    </div>
                    <input
                        type="text"
                        id='password'
                        name='password'
                        value={formik.values.password}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        placeholder="PASSWORD"
                    />
                    <div className='box_signin_admin_errors' >
                        {formik.touched.password && formik.errors.password && <p>{formik.errors.password}</p>}
                    </div>
                </div>
                <div className='admin_signin_button_box' >
                    <ButtonReact>
                        CREAR
                    </ButtonReact>
                </div>
            </form>
        </div>
    )
}

export default Signin