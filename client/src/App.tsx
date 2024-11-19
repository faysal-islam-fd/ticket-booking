import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import SearchResults from "./pages/SearchResults"
import SeatSelection from "./pages/SeatSelection"
import { AuthGuard } from "./components/AuthGuard"
import Dashboard from "./pages/Dashboard"
import { AuthProvider } from "./context/AuthConext"



const App = () => {
  return (


     <BrowserRouter>
        <AuthProvider>
        <div className="min-h-screen bg-[#121212] flex flex-col">
          <Navbar/>
            <Routes>
              <Route path="/" element={<><Home /></>} />
              <Route path="/search" element={<SearchResults />} />
              <Route path="/dashboard" element={<AuthGuard><Dashboard /></AuthGuard>} />
              <Route 
              path="/booking/:id"
              element={
              <AuthGuard>
                <SeatSelection />
              </AuthGuard>}
              />
            </Routes>
          <Footer />
        </div>
        </AuthProvider>
   </BrowserRouter>
  )
}

export default App