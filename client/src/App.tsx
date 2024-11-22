import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import SearchResults from "./pages/SearchResults"
import SeatSelection from "./pages/SeatSelection"
import { AuthGuard } from "./components/AuthGuard"
import Dashboard from "./pages/Dashboard"
import { AuthProvider } from "./context/AuthConext"
import BookingConfirmation from "./pages/BookingConfirmation"
import UserProfile from "./pages/UserProfile"
import FlightSelection from "./pages/FlightSelection"
import Login from "./pages/Login"
import Register from "./pages/Registar"



const App = () => {
  return (


     <BrowserRouter>
        <AuthProvider>
        <div className="min-h-screen bg-[#121212] flex flex-col">
          <Navbar/>
            <Routes>
              <Route path="/" element={<><Home /></>} />
              <Route path="/signup" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/search" element={<SearchResults />} />
              <Route path="/dashboard" element={<AuthGuard><Dashboard /></AuthGuard>} />
              <Route
                path="/profile"
                element={
                  <AuthGuard>
                    <UserProfile />
                  </AuthGuard>
                }
              />
              <Route
                path="/flight/:id"
                element={
                  <AuthGuard>
                    <FlightSelection />
                  </AuthGuard>
                }
              />    
              <Route 
              path="/booking/:id"
              element={
              <AuthGuard>
                <SeatSelection />
              </AuthGuard>}
              />
                <Route
                path="/booking/confirm/:id"
                element={
                  <AuthGuard>
                    <BookingConfirmation />
                  </AuthGuard>
                }
              />
            </Routes>
          <Footer />
        </div>
        </AuthProvider>
   </BrowserRouter>
  )
}

export default App