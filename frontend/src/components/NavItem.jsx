
import { NavLink } from 'react-router-dom'

const NavItem = ({children,navIcon,to}) => {
  return (
    <li><NavLink to={to} className={({isActive}) => `text-[17px] flex gap-2 px-4 py-2 rounded-xl items-center ${isActive ? "border border-accent" : ""}`} >{navIcon}<span>{children}</span></NavLink></li>
    
  )
}

export default NavItem