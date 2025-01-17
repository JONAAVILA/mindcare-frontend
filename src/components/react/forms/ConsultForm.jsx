import { useFormik } from 'formik'
import './consultForm.css'
import ButtonReact from '../buttons/buttonReact/ButtonReact'

const ConsultForm = ()=>{
    
    const formik = useFormik({
        initialValues:{
            name:'',
            phone:'',
            email:'',
            message:''
        },
        validationSchema:'',
        onSubmit:''
    })

    return(
        <form
            className='consult_form'
            onSubmit={formik.handleSubmit}
        >
            <input
                type="text"
                id='name'
                name='name'
                placeholder='NOMBRE Y APELLIDO'
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            <input
                type="text"
                id='phone'
                name='phone'
                placeholder='TELÉFONO'
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            <input
                type="text"
                id='email'
                name='email'
                placeholder='EMAIL'
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            <textarea
                name="consult" 
                id="consult"
                placeholder='CONSULTA'
                value={formik.values.message}
                onChange={formik.handleChange}
            />
            <div className='consult_box_button' >
                <ButtonReact type='submit'>
                    ENVIAR
                </ButtonReact>
            </div>
        </form>
    )
}

export default ConsultForm