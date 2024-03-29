import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FaUser } from "react-icons/fa"
import { useSelector, useDispatch } from 'react-redux'
import { register, reset } from "../features/auth/authSlice"
import Spinner from "../components/Spinner"


function Register() {
    //instead of separate state for every field, setting one form data field
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    //destructure form data
    const { name, email, password, password2 } = formData

    const dispatch = useDispatch()
    const navigate = useNavigate()

    //state- from authslice initalState
    const { user, isLoading, isSuccess, isError, message } =
        useSelector(
            (state) => state.auth
        )

    useEffect(() => {
        if (isError) {
            //message set in redux, grabbing it and showing it
            toast.error(message)
        }

        //Redirect when logged in 
        if (isSuccess || user) {
            navigate('/')
        }

        dispatch(reset())

        //useEffect dependencies
    }, [isError, isSuccess, user, message, navigate, dispatch])

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
        else {
            const userData = {
                name, email, password
            }
            //in authslice dispatch user
            dispatch(register(userData))
        }
    }


    if (isLoading) {
        return <Spinner></Spinner>
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