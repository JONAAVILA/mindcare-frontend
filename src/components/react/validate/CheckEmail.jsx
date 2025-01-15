import { useFormik } from "formik"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { validateEmail } from "../../../../utils/validate"
import confirmEmail from "../../adapters/confirmEmail"

const CheckEmail = ()=>{
    const [loader, setloader] = useState(false)
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues:{
            email:''
        },
        validationSchema:validateEmail,
        onSubmit: async (values)=>{
            setloader(!loader)
            const check = await confirmEmail(values)
            if(check){
                setloader(!loader)
                navigate('/signin')
                return
            }
            setloader(!loader)
            navigate('/login')
        }
    })

    return(
        <form className="email_form" onSubmit={formik.handleSubmit}>
            <div className="email_box_input" >
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                <div className="email_box_loader" >
                    {loader && <LoadIcon size={35} />}
                </div>
                {
                    formik.touched.email && 
                    formik.errors.email && 
                    <p>
                        {formik.errors.email}
                    </p>
                }
            </div>
            <ButtonCircle type='submit' >
                CHECK
            </ButtonCircle>
        </form>
    )
}

export default CheckEmail