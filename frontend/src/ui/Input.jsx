



const Input = ({label,name,placeholder,children,type,onChange}) => {
return (
    <div>
            <label className="" htmlFor="">{label}</label>
            <div className="relative ">
            <input required onChange={onChange} name={name} className="px-6 border border-stone-400 py-1 w-full rounded-md " type={type || "text"} placeholder={placeholder}/>
            {children}
             </div>
    </div>
)
}

export default Input