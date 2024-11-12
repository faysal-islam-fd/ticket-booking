import { Link } from "react-router-dom"
import { ThemeContext } from "../context/ThemeContext"
import { useContext } from "react"
import { useForm } from "react-hook-form"

const Register = () => {

    async function onSubmit(data){
          const res = await fetch("/v1/api/auth/register", {
            method:"POST",
            headers:{
              "Content-Type":"application/json"
            },
            body: JSON.stringify(data)
          }) 

          const result = await res.json()
          console.log(result);
          
          
    }
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()  
        
  
      
    const {theme} = useContext(ThemeContext)
    const searchTheme = theme === "forest" ? "bg-[#171212]" : "bg-[#FAF7F5]"
  return (
    <div className={`min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 ${searchTheme}`}>
    <div className="sm:mx-auto flex justify-center  sm:w-full sm:max-w-md">
      <img src="./logo.png" className="w-40  " alt="" />
    </div>

    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      
      <div className="bg-base-300 py-8 px-4 shadow sm:rounded-lg sm:px-10">
      <h1 className="text-2xl md:text-3xl font-semibold text-center py-3">Register</h1>
        <form  onSubmit={handleSubmit(onSubmit)} className="space-y-6 grid grid-cols-2 gap-2">

            <div className="flex col-span-2 justify-between my-3">
              <p>Already, have an account?</p>
              <Link to="/login" className="underline text-accent">Login</Link>
            </div>
       
          <div>
            <input {...register("firstName",  {required: "First Name is required"})} className="pl-5 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent" type="text"placeholder="First Name" />
            {errors.firstName && <p className="text-red-500 py-1 text-sm">{errors.firstName.message}</p>}
          </div>
          <div>
            <input {...register("lastName", {required: "Last Name is required"})} className="pl-5 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent" type="text"placeholder="Last Name" />
            {errors.lastName && <p className="text-red-500 py-1 text-sm">{errors.lastName.message}</p>}
          </div>
          <div>
            <select {...register("gender", {required: "Please select your gender"})} className="px-3 py-2 focus:ring-accent focus:border-accent w-full rounded-md">
              <option value="">Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>

            {errors.gender && <p className="text-red-500 py-1 text-sm">{errors.gender.message}</p>}
          </div>
          <div>
            <input {...register("email",{required:"Email is Required"})} className="pl-5 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent"  type="email"placeholder="Email Address" />
            {errors.email && <p className="text-red-500 py-1 text-sm">{errors.email.message}</p>}

          </div>
          <div className="col-span-2 relative">
            <input {...register("password", {required:"Password is Required", minLength: {value: 6, message: "Password must be atleast 6 charrecter"}})} className="pl-5 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent" type="password"placeholder="Password" />
            {errors.password && <p className="text-red-500 py-1 text-sm">{errors.password.message}</p>}
          </div>


        
          <div className="col-span-2 ">
            <input {...register("confirmPassword",{required:"Confirm Password must be required", validate: (value) => {
              return value === watch("password") || "Password does not match"
            }})} className="pl-5 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent" type="password" placeholder="Confirm Password" />
            {errors.confirmPassword && <p className="text-red-500 py-1 text-sm">{errors.confirmPassword.message}</p>}
          
          </div>

        <button className=" bg-accent col-span-2 py-2  rounded-md font-semibold text-[18px]" type="submit">Register</button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Register