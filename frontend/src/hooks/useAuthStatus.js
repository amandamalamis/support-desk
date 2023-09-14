import { useState, useEffect } from 'react'
import { UseSelector, useSelector } from 'react-redux'


export const useAuthStatus = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    const [checkingStatus, setCheckingStatus] = useState(true)

    //get user through redux from backend/node express app
    const { user } = useSelector((state) => state.auth)

    useEffect(() => {
        if (user) {
            setLoggedIn(true)
        }
        else {
            setLoggedIn(false)
        }
        setCheckingStatus(false)
    }, [user])

    return { loggedIn, checkingStatus }
}