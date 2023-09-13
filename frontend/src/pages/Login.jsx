import { useState } from "react"
import { FaSignInAlt } from "react-icons/fa"
import { useSelector, useDispatch } from 'react-redux'
import { login } from "../features/auth/authSlice"

function Login() {
    //instead of separate state for every field, setting one form data field
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    //destructure it
    const { email, password } = formData

    const dispatch = useDispatch()

    //state- from authslice initalState
    const { user, isLoading, isSuccess, message } =
        useSelector(
            (state) => state.auth
        )
    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState, //includes previus state
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        const userData = {
            email,
            password
        }

        dispatch(login(userData))

    }

    return (

        <>
            <section className="heading">
                <h1>
                    <FaSignInAlt></FaSignInAlt> Login
                </h1>
                <p>
                    Login to your Account
                </p>
            </section>

            <section className="form">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input type="email" className="form-control" value={email} name="email" id="email" onChange={onChange} placeholder='Email' required />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" value={password} name="password" id="password" onChange={onChange} placeholder='Password' required />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-block">LOGIN</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Login