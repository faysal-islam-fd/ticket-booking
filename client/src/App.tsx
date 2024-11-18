import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import SearchResults from "./pages/SearchResults"



const App = () => {
  return (


     <BrowserRouter>
        <div className="min-h-screen bg-[#121212] flex flex-col">
          <Navbar/>
            <Routes>
              <Route path="/" element={<><Home /></>} />
              <Route path="/search" element={<SearchResults />} />
            </Routes>
          <Footer />
        </div>
   </BrowserRouter>
  )
}

export default App