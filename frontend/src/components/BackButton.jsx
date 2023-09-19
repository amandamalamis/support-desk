import { FaArrowAltCircleLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'


//has prop of url
const BackButton = ({ url }) => {
    return (
        <Link to={url} className='btn  btn-reverse btn-back'>
            <FaArrowAltCircleLeft></FaArrowAltCircleLeft>BACK
        </Link>
    )
}

export default BackButton
