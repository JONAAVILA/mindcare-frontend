import { useFormik } from 'formik'
import './dashboard.css'
import { validateBlog } from '../../../utils/validate'
import ButtonReact from '../buttons/buttonReact/ButtonReact'
import { useState } from 'react'
import axios from 'axios'
// import { useEffect } from 'react'
// import useIsLogin from '../hooks/useIsLogin'

const Dashboard = ()=>{
    const [file, setFile] = useState(null);
    const URL = 'https://mindcare-blog.twic.pics'

    const handleFileChange = (event) => {
        setFile(event.target.files[0]); // Almacena el archivo seleccionado
    };
    // const login = useIsLogin()

    // useEffect(()=>{
    //     login()
    // },[])
    console.log(file)
    const formik = useFormik({
        initialValues:{
            tittle:'',
            subtittle:'',
            description:'',
            login:'',
            password:''
        },
        validationSchema:validateBlog,
        onSubmit: async ({ resetForm }) => {
            try {
                if (!file) {
                    alert('Por favor selecciona una imagen');
                    return;
                }

                const formData = new FormData();
                formData.append('file', file); // Añade la imagen
                formData.append('login', 'mindcare_admin'); // Sustituye 'tu_login' por el valor real
                formData.append('password', 'M1ndC@r3_2025!');
                // formData.append('tittle', values.tittle); // Añade el título
                // formData.append('subtittle', values.subtittle); // Añade el subtítulo
                // formData.append('description', values.description); // Añade la descripción

                const response = await axios.post(URL, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });

                console.log('Respuesta del servidor:', response.data);
                alert('Publicación creada con éxito');
                resetForm(); // Resetea el formulario
                setFile(null); // Limpia el archivo seleccionado
            } catch (error) {
                console.error('Error al crear la publicación:', error);
                alert('Ocurrió un error al subir la publicación');
            }
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
                        <div className='dashboard_box_button' >
                            <ButtonReact type='submit'>
                                CREAR
                            </ButtonReact>
                        </div>
                    </form>
                </div>
                <input 
                        className='input_blog'
                        type="file"
                        id='image'
                        name='image'
                        onChange={handleFileChange}
                    />
                <div></div>
            </div>
        </section>
    )
}

export default Dashboard