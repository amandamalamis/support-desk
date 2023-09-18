import { useState } from 'react'

//get user from global state
import { useSelector } from 'react-redux'

function NewTicket() {

  //Before we set the local state (component state), get the user from the global state
  const { user } = useSelector((state) => state.auth)

  const [name] = useState(user.name)
  const [email] = useState(user.email)
  const [product, setProduct] = useState('iPhone')
  const [description, setDescription] = useState('Test')


  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
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
            <div className="form-group">
              <button className="btn btn-block">
                SUBMIT
              </button>
            </div>
          </div>
        </form>
      </section>
    </>
  )
}

export default NewTicket