import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getTicket, reset } from '../features/tickets/ticketSlice'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'


function Ticket() {
    //from the store.js file tickets
    const { ticket, isLoading, isSuccess, isError, message } = useSelector((state) => state.tickets)
    const params = useParams()
    const dispatch = useDispatch()

    //get ticketid from the url
    const { ticketId } = useParams()

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }

        dispatch(getTicket(ticketId))
    }, [isError, message, ticketId])

    if (isLoading) {
        return <Spinner></Spinner>
    }

    if (isError) {
        return <h3>Something went wrong</h3>
    }

    return (
        <div className='ticket-page'>
            <header className="ticket-header">
                <BackButton url='/tickets'></BackButton>
                <h2>
                    {/* underscore id comes from mongoDB */}
                    Ticket ID: {ticket._id}
                    <span className={`status status-${ticket.status}`}>
                        {ticket.status}
                    </span>
                </h2>
                <h3>
                    Date Submitted: {new Date(ticket.createdAt).toLocaleString('en-us')}
                </h3>
                <hr></hr>
                <div className="ticket-desc">
                    <h3>
                        Description of Issue
                    </h3>
                    <p>
                        {ticket.description}
                    </p>
                </div>
            </header>

        </div>
    )
}

export default Ticket