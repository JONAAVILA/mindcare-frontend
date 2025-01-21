import { useFormik } from 'formik'
import './dashboard.css'
import { useEffect } from 'react'
import useIsLogin from '../hooks/useIsLogin'

const Dashboard = ()=>{
    const login = useIsLogin()

    useEffect(()=>{
        login()
    },[])

    const formik = useFormik({
        initialValues:{
            idAdmin:'',
            tittle:'',
            description:'',
            image:'',
        },
        validationSchema:'',
        onSubmit:''
    })

    return(
        <section>
            <div className='dashboard_box_inputs' >
                <h3>Publicar en blog</h3>
            </div>
            <div></div>
        </section>
    )
}

export default Dashboard