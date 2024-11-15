import { useContext, useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa6"
import { Link } from "react-router-dom"
import { ThemeContext } from "../context/ThemeContext"
import { AuthContext } from "../context/AuthConext"


const Login = () => {
    const {theme} = useContext(ThemeContext)
    const {setUser} = useContext(AuthContext)
    const searchTheme = theme === "forest" ? "bg-[#171212]" : "bg-[#FAF7F5]"
    const [showPassword,setShowPassword] = useState(false)
    
    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")

    async function handleLogin(e){
      e.preventDefault()
      const res = await fetch("/v1/api/auth/login", {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify({email,password})
      })
      const data = await res.json()
     
      setUser(localStorage.setItem("authUser",JSON.stringify(data.data)))
      
    }
    
    return (
    
    <div className={`min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 ${searchTheme}`}>
    <div className="sm:mx-auto flex justify-center  sm:w-full sm:max-w-md">
      <img src="./logo.png" className="w-40  " alt="" />
    </div>

    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      
      <div className="bg-base-300 py-8 px-4 shadow sm:rounded-lg sm:px-10">
      <h1 className="text-2xl md:text-3xl font-semibold text-center py-3">Sign In</h1>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <div className="flex justify-between my-3">
              <p>Don&apos;t have an account?</p>
              <Link to="/register" className="underline text-accent">Register</Link>
            </div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <div className="mt-1 relative">
              <input
              required
              onChange={(e)=>setEmail(e.target.value)}
              value={email}
                placeholder="Email Address"
                id="email"
                type="email"
              
                className="pl-5 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent"
                  />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="  relative">
              <input
              
              onChange={(e)=>setPassword(e.target.value)}
              value={password}
              placeholder="Password"
                id="password"
                type={showPassword ? "text" :"password"}
                required
                className="pl-5 h-full appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent"
              />
              {
               password &&
               (
                showPassword ?
                <FaEye onClick={()=>setShowPassword(prev=>!prev)} className="absolute top-1/2 transform right-2 -translate-y-1/2" />
                :
                <FaEyeSlash onClick={()=>setShowPassword(prev=>!prev)}   className="absolute top-1/2 cursor-pointer transform right-2 -translate-y-1/2" />
             
               )
              }
              </div>
          </div>

          <div>
            <button
              type="submit"
             
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-accent text-[18px] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent disabled:opacity-50"
            >
             Login
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
)
}

export default Login