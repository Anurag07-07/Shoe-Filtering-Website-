const Input = ({handleChange,value,title,name,color}) => {
  return (
    <div>
      <div className=" flex text-xl font-extralight justify-between items-center gap-x-3">
        <label style={{backgroundColor:color}}>{title}</label>
        <input style={{backgroundColor:color}}  onChange={handleChange} className="" name={name} type="radio" value={value} size={50}></input>
      </div>
    </div>
  )
}

export default Input