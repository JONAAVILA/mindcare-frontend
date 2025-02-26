import { useFormik } from 'formik'
import './dashboard.css'
import { validateBlog } from '../../../utils/validate'
import ButtonReact from '../buttons/buttonReact/ButtonReact'
import { useEffect, useState } from 'react'
import updateImage from '../../adapters/updateImage'
import Alert from '../modals/alert/Alert'
import postBlogs from '../../adapters/postBlogs'
import useIsLogin from '../hooks/useIsLogin'
import Preview from '../preview/Preview'
import LoadIcon from '../icons/loader/LoadIcon'

const Dashboard = ()=>{
    const [file, setFile] = useState(null);
    const [alert, setAlert] = useState('')
    const [loader,setLoader] = useState(false)

    const handleAlert = ()=>{
        setAlert('')
    }

    const handleFileChange = (event) => {
        setFile(event.target.files[0])
    };

    const login = useIsLogin()

    useEffect(()=>{
        login()
    },[])

    const formik = useFormik({
        initialValues:{
            heading:'',
            subheading:'',
            description:'',
        },
        validationSchema:validateBlog,
        onSubmit: async (values) => {
            try {
                if (!file) {
                    setAlert('Por favor selecciona una imagen');
                    return;
                }

                const formData = new FormData();
                formData.append('file', file)
                formData.append('upload_preset', 'preset_mindcare');
                
                setLoader(!loader)
                const urlImage = await updateImage(formData)
                setLoader(false)
                if(!urlImage) setAlert('Error al guardar la imágen 🤦‍♂️')

                setAlert('La imágen se guardo con exito, estamos por terminar, guardando el post...🕒')

                const postBlog = await postBlogs(values,urlImage)
                setAlert(`El post "${postBlog.heading}" se creó con exito!`)
                
                formik.resetForm()
                setFile(null)
            } catch (error) {
                console.error('Error al crear la publicación:', error);
                setAlert('Ocurrió un error al subir la publicación');
            }
        }
    })

    return(
        <section className='dashboard_section' >
            <div className='dashboard_box_loader' >
                {loader && <LoadIcon size={60} />}
            </div>
            {alert && <Alert handleAlert={handleAlert} >{alert}</Alert>}
            <div className='dashboard_box_inputs' >
                <h3>Publicar en blog</h3>
                <div>
                    <form
                        onSubmit={formik.handleSubmit}
                    >
                        <input
                            className='input_blog'
                            type="text"
                            id='heading'
                            name='heading'
                            value={formik.values.heading}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            placeholder="TÍTULO"
                        />
                        <div className='box_dashboard_errors' >
                            {formik.touched.heading && formik.errors.heading && <p>{formik.errors.heading}</p>}
                        </div>
                        <input
                            className='input_blog'
                            type="text"
                            id='subheading'
                            name='subheading'
                            value={formik.values.subheading}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            placeholder="SUBTÍTULO"
                        />
                        <div className='box_dashboard_errors' >
                            {formik.touched.subheading && formik.errors.subheading && <p>{formik.errors.subheading}</p>}
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
                            onChange={handleFileChange}
                        />
                        <div className='dashboard_box_button' >
                            <ButtonReact type='submit'>
                                CREAR
                            </ButtonReact>
                        </div>
                    </form>
                </div>
            </div>
            <div>
                <Preview/>
            </div>
        </section>
    )
}

export default Dashboard