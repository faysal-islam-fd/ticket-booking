import { MdManageSearch } from "react-icons/md"
import Easystep from "../ui/Easystep"
import { TbHandFinger, TbLocationDollar } from "react-icons/tb"
import CountUp from "react-countup"
import ScrollTrigger from "react-scroll-trigger"
import { useState } from "react"



const Guidelines = () => {
    const [counterOn,setCounterOn] = useState(false)
  return (
    <div className="w-[90%] mt-16  mx-auto">
        <h1 className=" text-3xl md:text-4xl text-center font-bold"><span className="text-accent">Buy tickets</span> in 3 simple steps</h1> 
        <div className="grid w-[90%] md:w-full mx-auto grid-cols-1 mt-12 md:grid-cols-3 gap-8 ">
            <Easystep icon={<MdManageSearch className="text-accent" size={60} />} title="Search">Choose your origin, destination, journey dates and search for buses</Easystep>
            <Easystep icon={<TbHandFinger className="text-accent" size={50}/>} title="Select">Select your desired trip and choose your seats</Easystep>
            <Easystep icon={<TbLocationDollar className="text-accent" size={50} />} title="Pay">Pay via credit or debits</Easystep>
            
        </div>

        <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
        <div className="my-16 flex flex-col-reverse gap-6 md:flex-row md: items-center">
           <div className=" md:w-1/2 w-4/5">
           <h1 className=" text-2xl mt-4 font-semibold    md:text-4xl">All your <span className="text-accent">travel</span> options in one place</h1>
           <p className="mt-4 text-[17px]">More than 1,000 trusted travel partners across trains, buses, flights, and launch so that you can focus on the journey.</p>
           <div className="flex mt-6 gap-10">
                <div>
                {
                        counterOn &&
                       <h1 className="text-accent font-semibold text-4xl"> <CountUp start={0} end={250} delay={0.5} duration={2} />Million+</h1>
                    }
                    <span className="font-light">Tickets Sold</span>
                </div>
                <div>
                    {
                        counterOn &&
                       <h1 className="text-accent font-semibold text-4xl"> <CountUp start={0} end={3000} delay={0.5} duration={2} />+</h1>
                    }
                    <span className="font-light">Tickets Sold</span>
                </div>
                <div>
                {
                        counterOn &&
                       <h1 className="text-accent font-semibold text-4xl"> <CountUp start={0} end={10} delay={0.5} duration={2} />+</h1>
                    }
                    <span className="font-light">Happy Users</span>
                </div>
           </div>
           </div>
           <div className=" md:w-1/2 w-3/4">
                <img className="mx-auto  rounded-full border border-stone-950 shadow-xl w-[450px]" src="./travel.jpg" alt="" />
           </div>
        </div>
        </ScrollTrigger>
    </div>
  )
}

export default Guidelines