import { useState, useEffect } from "react"
import { FaSignInAlt } from "react-icons/fa"
import { toast } from 'react-toastify'
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { login, reset } from "../features/auth/authSlice"
import Spinner from "../components/Spinner"

function Login() {
    //instead of separate state for every field, setting one form data field
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    //destructure it
    const { email, password } = formData

    const dispatch = useDispatch()
    const navigate = useNavigate()


    //state- from authslice initalState
    const { user, isLoading, isError, isSuccess, message } =
        useSelector(
            (state) => state.auth
        )
    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState, //includes previus state
            [e.target.name]: e.target.value,
        }))
    }

    useEffect(() => {
        if (isError) {
            //message set in redux, grabbing it and showing it
            toast.error(message)
        }

        //Redirect when logged in 
        if (isSuccess || user) {
            navigate('/')
        }

        //dispatch reset to reset the state
        dispatch(reset())

        //useEffect dependencies
    }, [isError, isSuccess, user, message, navigate, dispatch])

    const onSubmit = (e) => {
        e.preventDefault()

        const userData = {
            email,
            password
        }

        dispatch(login(userData))

    }

    if (isLoading) {
        return <Spinner></Spinner>
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