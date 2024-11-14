



const Input = ({label,name,placeholder,children,type,onChange,inputValue}) => {
return (
    <div>
            <label className="" htmlFor="">{label}</label>
            <div className="relative ">
            <input value={inputValue} required onChange={onChange} name={name} className="px-6 border border-stone-400 py-2 w-full rounded-md " type={type || "text"} placeholder={placeholder}/>
            {children}
             </div>
    </div>
)
}

export default Input