import { useContext, useEffect, useState } from "react"
import Input from "../ui/Input";
import { FaLocationDot } from "react-icons/fa6";
import { ThemeContext } from "../context/ThemeContext";

import { FaSearch } from "react-icons/fa";
import {useNavigate} from "react-router-dom"
const SearchForm = () => {
    const [selectedVehicle,setSelectedVehicle] = useState("bus")
    const {theme} = useContext(ThemeContext)
    const navigate = useNavigate()

    const [searchTheme,setSearchTheme] = useState(theme === "forest" ? "bg-[#171212]" : "bg-[#FAF7F5]")
    const [formInput,setFormInput] = useState({
        from:"",
        to:"",
        date:""
    })
    useEffect(()=>{ 
        setSearchTheme(theme === "forest" ? "bg-[#171212]" : "bg-[#FAF7F5]")
    },[theme])
    
   

    function handleSearch(e){
        e.preventDefault()
        const params = new URLSearchParams({
            type:selectedVehicle,
            ...formInput,
        })
       console.log(params.toString());
       
        navigate(`/search?${params.toString()}`)
}
    
    return (
    <div className={` rounded-md p-8 w-4/5 md:w-3/5 mx-auto ${searchTheme}`}> 
        <div className="flex gap-4 ">
        <button  className={`px-6 py-2   text-stone-900 rounded-3xl  font-[400] ${selectedVehicle==="bus" ? "bg-accent" :"bg-stone-200"} `} onClick={()=>setSelectedVehicle('bus')}>Bus</button>
        <button  className={`px-6 py-2  text-stone-900 rounded-3xl  font-[400] ${selectedVehicle==="air" ? "bg-accent" :"bg-stone-200"} `} onClick={()=>setSelectedVehicle('air')}>Air</button>
        <button className={`px-6 py-2  text-stone-900 rounded-3xl  font-[400] ${selectedVehicle==="train" ? "bg-accent" :"bg-stone-200"} `} onClick={()=>setSelectedVehicle('train')}>Train</button>
        </div>
        <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-3 items-center mt-6">
            <Input inputValue={formInput.from} onChange={(e)=>setFormInput(prev=> ({...prev,from:e.target.value}))} name="from" label={"From"} placeholder="Departure City">
            <FaLocationDot className="left-1 absolute top-1/2 transform -translate-y-1/2 " />
            </Input>
            <Input inputValue={formInput.to} name="to" onChange={(e)=>setFormInput(prev=> ({...prev,to:e.target.value}))}  label={"To"} placeholder="Arrival City">
            <FaLocationDot className="left-1 absolute top-1/2 transform -translate-y-1/2 " />
            </Input>
            <Input inputValue={formInput.date} onChange={(e)=>setFormInput(prev=> ({...prev,date:e.target.value}))} name="date" type="date" label={"Date"} placeholder="Arrival City">
            </Input>
            <button className="flex mt-5 gap-1 font-semibold items-center bg-accent px-6 border border-stone-400 py-[9px] rounded-md "><FaSearch /><span>Search</span></button>
       
        </form>
    </div>
  )
}

export default SearchForm