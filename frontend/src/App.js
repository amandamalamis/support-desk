import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Header></Header>
          <Routes>
            <Route path='/' element={<Home></Home>} ></Route>
            <Route path='/login' element={<Login></Login>} ></Route>
            <Route path='/register' element={<Register></Register>} ></Route>

          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
