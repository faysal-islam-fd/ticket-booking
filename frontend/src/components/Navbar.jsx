
import { FaBus } from "react-icons/fa"
import NavItem from "./NavItem"
import ThemeSwitcher from "./ThemeSwitcher"
import { FaTrainSubway } from "react-icons/fa6"
import { IoMdAirplane } from "react-icons/io"
import { Link } from "react-router-dom"
import { AuthContext } from "../context/AuthConext"
import { useContext } from "react"
const Navbar = () => {

  const {user,setUser} = useContext(AuthContext)
  function handleLogout(){
    setUser(localStorage.removeItem('authUser'))
  }
  return (
    
  <div className="navbar   px-10">
  <div className="navbar-start  mx-auto">
    <div className="dropdown ">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
      
      <NavItem to="/" navIcon={<FaBus />} ><span>Bus</span> </NavItem>
      <NavItem to="/air" navIcon={<IoMdAirplane />} ><span>Air</span> </NavItem>
      <NavItem to="/train" navIcon={<FaTrainSubway />} ><span>Train</span> </NavItem>
      </ul>
    </div>
    <img className="w-24" src='./logo.png' alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 flex gap-6">
      <NavItem to="/" navIcon={<FaBus />} ><span>Bus</span> </NavItem>
      <NavItem to="/air" navIcon={<IoMdAirplane />} ><span>Air</span> </NavItem>
      <NavItem to="/train" navIcon={<FaTrainSubway />} ><span>Train</span> </NavItem>
    </ul>
  </div>
  <div className="navbar-end flex gap-2 md:gap-4">
    {
      user ?
      <button  onClick={handleLogout} className="bg-neutral px-4 py-2 rounded-lg font-semibold">Logout</button>
      :
      <Link to="/login" className="bg-accent px-4 py-2 rounded-lg font-semibold">Login</Link>
  
    }
  
    <ThemeSwitcher/>
  </div>
</div>
  )
}

export default Navbar