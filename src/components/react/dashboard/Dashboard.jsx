import { useFormik } from 'formik'
import './dashboard.css'
import { validateBlog } from '../../../utils/validate'
import ButtonReact from '../buttons/buttonReact/ButtonReact'
import { useState } from 'react'
// import { useEffect } from 'react'
// import useIsLogin from '../hooks/useIsLogin'

const Dashboard = ()=>{
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0].name); // Almacena el archivo seleccionado
    };
    // const login = useIsLogin()

    // useEffect(()=>{
    //     login()
    // },[])
    console.log(file)
    const formik = useFormik({
        initialValues:{
            idAdmin:'',
            tittle:'',
            subtittle:'',
            description:'',
            image:file ? file : '',
        },
        validationSchema:validateBlog,
        onSubmit: ()=>{
            console.log('image')
        }
    })

    return(
        <section className='dashboard_section' >
            <div className='dashboard_box_inputs' >
                <h3>Publicar en blog</h3>
                <div>
                    <form
                        onSubmit={formik.handleSubmit}
                    >
                        <input
                            className='input_blog'
                            type="text"
                            id='tittle'
                            name='tittle'
                            value={formik.values.tittle}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            placeholder="TÍTULO"
                        />
                        <div className='box_dashboard_errors' >
                            {formik.touched.tittle && formik.errors.tittle && <p>{formik.errors.tittle}</p>}
                        </div>
                        <input
                            className='input_blog'
                            type="text"
                            id='subtittle'
                            name='subtittle'
                            value={formik.values.subtittle}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            placeholder="SUBTÍTULO"
                        />
                        <div className='box_dashboard_errors' >
                            {formik.touched.subtittle && formik.errors.subtittle && <p>{formik.errors.subtittle}</p>}
                        </div>
                        <textarea
                            className='input_blog'
                            id='description'
                            name='description'
                            value={formik.values.description}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            placeholder="DESCRIPCIÓN"
                        />
                        <div className='box_dashboard_errors' >
                            {formik.touched.description && formik.errors.description && <p>{formik.errors.description}</p>}
                        </div>
                        <input 
                            className='input_blog'
                            type="file"
                            id='image'
                            name='image'
                            onBlur={formik.handleBlur}
                            onChange={handleFileChange}
                        />
                        <div className='box_dashboard_errors' >
                            {formik.touched.image && formik.errors.image && <p>{formik.errors.image}</p>}
                        </div>
                        <div className='dashboard_box_button' >
                            <ButtonReact type='submit'>
                                CREAR
                            </ButtonReact>
                        </div>
                    </form>
                </div>
                <div></div>
            </div>
        </section>
    )
}

export default Dashboard