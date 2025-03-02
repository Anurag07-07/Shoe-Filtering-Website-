const Colors = () => {
  return (
    <div className=" pt-3">
      <div className=" font-extrabold text-2xl">COLORS</div>
      <div className=" flex text-xl font-extralight justify-between items-center gap-x-3">
        <label>All</label>
        <input type="radio" name="type" size={50}></input>
      </div>
      <div className=" flex text-xl font-extralight justify-between items-center gap-x-3">
        <label>Black</label>
        <input type="radio" name="type" size={50}></input>
      </div>
      <div className=" flex text-xl font-extralight justify-between items-center gap-x-3">
        <label>White</label>
        <input type="radio" name="type" size={50}></input>
      </div>
      <div className=" flex text-xl font-extralight justify-between items-center gap-x-3">
        <label>Blue</label>
        <input type="radio" name="type" size={50}></input>
      </div>
      <div className=" flex text-xl font-extralight justify-between items-center gap-x-3">
        <label>Brown</label>
        <input type="radio" name="type" size={50}></input>
      </div>
      
    </div>
  )
}

export default Colors