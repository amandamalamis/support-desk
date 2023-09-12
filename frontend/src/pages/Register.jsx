import { useState } from "react"
import { toast } from 'react-toastify'
import { FaUser } from "react-icons/fa"

function Register() {
    //instead of separate state for every field, setting one form data field
    const [formData, setFormData] = useState({
        name: '',
        email: '',

        password: '',
        password2: ''
    })

    //destructure it
    const { name, email, password, password2 } = formData

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState, //includes previus state
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if (password !== password2) {
            toast.error("Passwords do not match.")
        }

    }
    return (

        <>
            <section className="heading">
                <h1>
                    <FaUser></FaUser> Register
                </h1>
                <p>
                    Create an account
                </p>
            </section>

            <section className="form">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input type="text" className="form-control" value={name} name="name" id="name" onChange={onChange} placeholder='Name' required />
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" value={email} name="email" id="email" onChange={onChange} placeholder='Email' required />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" value={password} name="password" id="password" onChange={onChange} placeholder='Password' required />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" value={password2} name="password2" id="password2" onChange={onChange} placeholder='Confirm Password' required />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-block">REGISTER</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Register