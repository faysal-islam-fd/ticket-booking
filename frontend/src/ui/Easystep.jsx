

const Easystep = ({icon,title,children}) => {
  return (
    <div className="flex  items-center gap-3">
        {icon}
        <div className="leading-5 letter tracking-wide">
            <h1 className="mb-2  text-xl md:text-3xl font-semibold">{title}</h1>
            <p>{children}</p>
        </div>
    </div>
  )
}

export default Easystep