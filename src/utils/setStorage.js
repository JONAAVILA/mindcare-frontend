const setStorage = (values)=>{
    if(values !== 'clear'){
        const user = JSON.stringify(
            {
                values,
                isValidateLogin:true
            }
        )
        localStorage.setItem('user',user)
        return
    }
    localStorage.clear()
}

export default setStorage