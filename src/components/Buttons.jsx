const Buttons = ({onClickHandler,value,title}) => {
  return (
    <button className=" border px-2 py-1 rounded-xl shadow shadow-black" onClick={onClickHandler} value={value}>{title}</button>
  )
}

export default Buttons