import { useFormik } from "formik"
import { validateEmail } from "../../../../utils/validate"
import subNewsletter from "../../../../adapters/users/subNewsletter"
import { useState } from "react"
import LoadIcon from "../../icons/loader/LoadIcon"
import Alert from "../../modals/alert/Alert"
import './suscribe.css'
import ButtonReact from "../../buttons/buttonReact/ButtonReact"

const Suscribe = ()=>{
    const [alert,setAlert] = useState('')
    const [loader,setLoader] = useState(false)

    const formik = useFormik({
        initialValues:{
            email:''
        },
        validationSchema:validateEmail,
        onSubmit: async (values)=>{
            setLoader(!loader)
            const res = await subNewsletter(values)
            setLoader(false)
            console.log('form',res)
            setAlert(`${res}`)
        } 
    })

    const handleAlert = ()=>{
        setAlert(!alert)
    }

    return(
        <section className="container_suscribe" >
            <div className="box_suscribe" >
                <div className="box_suscribe suscribe_box_text" > 
                    <div className="box_suscribe_loader" >
                        {alert && <Alert handleAlert={handleAlert} >{alert}</Alert>}
                    </div>
                    {loader && <LoadIcon/>}
                    <h3>suscribite</h3>
                    <form
                        onSubmit={formik.handleSubmit}
                        className="suscribe_form"
                    >
                        <div>
                            <input
                                type="text"
                                id='email'
                                name='email'
                                placeholder='EMAIL'
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            <div className='suscribe_box_errors' >
                                {formik.touched.email && formik.errors.email && <p>{formik.errors.email}</p>}
                            </div>
                        </div>
                        <ButtonReact type='submit' >
                            ENVIAR
                        </ButtonReact>
                    </form>
                </div>
                <p className="info_text" >DEJANOS TU EMAIL PARA RECIBIR INFORMACION SOBRE NUESTROS SERVICIOS, ES GRATIS!</p>
            </div>
        </section>
    )
}

export default Suscribe