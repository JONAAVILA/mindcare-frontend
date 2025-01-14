import { useFormik } from 'formik'
import './dashboard.css'

const Dashboard = ()=>{

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