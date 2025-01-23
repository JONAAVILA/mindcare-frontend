import { validateConsult } from '../../../utils/validate'
import { useFormik } from 'formik'
import { useState } from 'react'
import ButtonReact from '../buttons/buttonReact/ButtonReact'
import Alert from '../modals/alert/Alert'
import './consultForm.css'

const ConsultForm = ()=>{
    const [alert, setAlert] = useState('')
    
    const formik = useFormik({
        initialValues:{
            name:'',
            phone:'',
            email:'',
            message:''
        },
        validationSchema:validateConsult,
        onSubmit:''
    })

    const handleAlert = ()=>{
        setAlert('')
    }

    return(
        <>
            {alert && <Alert handleAlert={handleAlert} >{alert}</Alert>}
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
                <div className='consult_box_errors' >
                    {formik.touched.name && formik.errors.name && <p>{formik.errors.name}</p>}
                </div>
                <input
                    type="text"
                    id='phone'
                    name='phone'
                    placeholder='TELÉFONO'
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                <div className='consult_box_errors' >
                    {formik.touched.phone && formik.errors.phone && <p>{formik.errors.phone}</p>}
                </div>
                <input
                    type="text"
                    id='email'
                    name='email'
                    placeholder='EMAIL'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                <div className='consult_box_errors' >
                    {formik.touched.email && formik.errors.email && <p>{formik.errors.email}</p>}
                </div>
                <textarea
                    name="message" 
                    id="message"
                    placeholder='CONSULTA'
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                <div className='consult_box_errors' >
                    {formik.touched.message && formik.errors.message && <p>{formik.errors.message}</p>}
                </div>
                <div className='consult_box_button' >
                    <ButtonReact type='submit'>
                        ENVIAR
                    </ButtonReact>
                </div>
            </form>
        </>
    )
}

export default ConsultForm