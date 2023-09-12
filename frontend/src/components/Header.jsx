import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className='header'>Header
            <div className="logo">
                <Link to='/'>Support Desk</Link>
            </div>
            <ul>
                <li>
                    <Link to='/login'>
                        <FaSignInAlt></FaSignInAlt> Login
                    </Link>
                </li>
                <li>
                    <Link to='/register'>
                        <FaUser></FaUser> Register
                    </Link>
                </li>
            </ul>
        </header>
    )
}

export default Header