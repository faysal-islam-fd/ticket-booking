import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Error from "./pages/Error"
import Login from "./pages/Login"
import Register from "./pages/Register"



const App = () => {
  return (
    <>
    <div>
    
    <Routes>
          <Route path="/" element={<><Navbar /><Home/><Footer/></>} errorElement={ <Error />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="*" element={<Error />} />
      </Routes>
     
    </div>

    </>
  )
}

export default App