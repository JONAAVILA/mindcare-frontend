import './validateCode.css'
import { useFormik } from "formik"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { validateCode } from '../../../../../utils/validate'
import setStorage from '../../../../../utils/setStorage'
import confirmCode from '../../../adapters/confirmCode'
import LoadIcon from '../../icons/loader/LoadIcon'

const ValidateCode = ({email,handleModal,prod,urlCheckCodeProd,urlCheckCodeDev})=>{
    const [error, setError] = useState('')
    const [loader, setloader] = useState(false)
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues:{
            code:''
        },
        validationSchema:validateCode,
        onSubmit: async (values)=>{
            setloader(!loader)
            const code = values.code
            const resConfirm = await confirmCode(code,prod,urlCheckCodeProd,urlCheckCodeDev)
        
            if(resConfirm){
                console.log('adminUser',user)
                const res = await postAdmin(user)
                if(!res.seller){
                    setStorage(res)
                    setError('código inválido')
                    return
                }
                navigate('/admin')
            }
            setError('código inválido')
        }
    })

    return(
        <>
            <div className="code_container" onClick={handleModal} />
            <div className="code_box" >
                <h2>VALIDA TU CODIGO</h2>
                {email && <h3>te lo enviamos a {email}, revisa tu casilla de spam 😎</h3>}
                <form
                    onSubmit={formik.handleSubmit}
                >
                    <div className="code_box_input" >
                        <input
                            type="text"
                            id="code"
                            name="code"
                            value={formik.values.code}
                            placeholder="nombre"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <div className="code_box_load" >
                            {loader && <LoadIcon size={35} />}
                        </div>
                    </div>
                    <ButtonCircle type='submit' color={'natural'}>
                        check
                    </ButtonCircle>
                </form>
                <div className="code_error" >
                    {formik.touched.code && formik.errors.code && <p>{formik.errors.code}</p>}
                    {error && <p>{error}</p>}
                </div>
            </div>
        </>
    )
}

export default ValidateCode