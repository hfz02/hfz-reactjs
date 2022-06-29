import { useState, useEffect } from 'react'
import "./styles.css"


const FormElement = () => {
    const initialValues = { username: "", email: "", password: "", }
    const [formValues, setFormValues] = useState(initialValues)
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)
    
    const handleChange = e => {
        const { name, value } = e.target
        setFormValues({...formValues, [name]: value})
    }
    const handleSubmit = e => {
        e.preventDefault()
        setFormErrors(validate(formValues))
        setIsSubmit(true)
    }

    useEffect(() => {
        console.log(formErrors)
        if(Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues)
        }
    },[formValues, formErrors, isSubmit])

    const validate = values => {
        const errors = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
        if (!values.username) {
            errors.username = "Username is required!"
        }
        if (!values.email) {
            errors.email = "Email is required!"
        } else if (!regex.test(values.email)) {
            errors.email = "Invalid email format!" 
        }
        if (!values.password) {
            errors.password = "Password is required!"
        } else if(values.password.length < 4) {
            errors.password = "Password must be more than 4 character!"
        } else if(values.password.length > 10) {
            errors.password = "Password can't exceed than 10 character!"
        }
        return errors
    }

    return ( 
        <div className="container">
            {Object.keys(formErrors).length === 0 && isSubmit ? (<div className="success">Signed In!</div>) : (<div></div>)}
            {/* <pre>{ JSON.stringify(formValues, undefined) }</pre> */}
            <form onSubmit={handleSubmit}>
                <h1>Login Form</h1>
                <div className="ui form">
                    <div className="field">
                        <label>Username</label><br />
                        <input type="text" name="username" placeholder="Username" value={ formValues.username } onChange={handleChange} />
                        <p>{ formErrors.username }</p>
                    </div>
                    <div className="field">
                        <label>Email</label><br />
                        <input type="email" name="email" placeholder="Email" value={ formValues.email } onChange={handleChange}  />
                        <p>{ formErrors.email }</p>
                    </div>
                    <div className="field">
                        <label>Password</label><br />
                        <input type="password" name="password" placeholder="Password" value={ formValues.password } onChange={handleChange}  />
                        <p>{ formErrors.password }</p>
                    </div>
                    <button type="submit" className="button">Submit</button>
                </div>
            </form>
        </div>
     );
}
 
export default FormElement;
