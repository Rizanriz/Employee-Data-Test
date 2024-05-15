import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Components/Home'
import Create from './Components/Create'
import Update from './Components/Update'
import Read from './Components/Read'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} ></Route>
          <Route path='/create' element={<Create/>} ></Route>
          <Route path='/update/:id' element={<Update/>} ></Route>
          <Route path='/read/:id' element={<Read/>} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
