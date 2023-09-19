import { useState, useEffect } from 'react'
//get user from global state
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { createTicket, reset } from '../features/tickets/ticketSlice'
import Spinner from '../components/Spinner'
import BackButton from '../components/BackButton'


function NewTicket() {

  //Before we set the local state (component state), get the user from the global state
  const { user } = useSelector((state) => state.auth)
  const { isLoading, isError, isSuccess, message } = useSelector((state) => state.tickets)


  const [name] = useState(user.name)
  const [email] = useState(user.email)
  const [product, setProduct] = useState('iPhone')
  const [description, setDescription] = useState('Test')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }
    if (isSuccess) {
      dispatch(reset())
      navigate('/tickets')
    }

    dispatch(reset())
    //useEffect dependencies
  }, [dispatch, isError, isSuccess, navigate, message])

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(createTicket({ product, description }))
  }

  if (isLoading) {
    return <Spinner></Spinner>
  }

  return (
    <>
      <BackButton url='/'></BackButton>
      <section className="heading">
        <h1>Create New Ticket</h1>
        <p>Please fill out the form below.</p>
      </section>
      <section className='form'>
        <div className="form-group">
          <label htmlFor="name">Customer Name</label>
          <input type="text" className="form-control" value={name} disabled />
        </div>
        <div className="form-group">
          <label htmlFor="email">Customer Email</label>
          <input type="text" className="form-control" value={email} disabled />
        </div>

        <form action="" onSubmit={onSubmit}>
          <div className="form-group">


            <label htmlFor="product">
              Product
            </label>
            <select name="product" id="product" value={product} onChange={(e) => setProduct(e.target.value)}>
              <option value="iPhone">iPhone</option>
              <option value="macBookPro">MacBookPro</option>
              <option value="iMac">iMac</option>
              <option value="iPad">iPad</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="description">
              Description of the issue
            </label>
            <textarea name="description" id="description" className='form-control' placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
          </div>
          <div className="form-group">
            <button className="btn btn-block">
              SUBMIT
            </button>
          </div>

        </form>
      </section>
    </>
  )
}

export default NewTicket