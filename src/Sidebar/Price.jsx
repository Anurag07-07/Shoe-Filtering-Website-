const Price = () => {
  return (
    <div className=" pt-3">
      <div className=" font-extrabold text-2xl">PRICE</div>
      <div className=" flex text-xl font-extralight justify-between items-center gap-x-3">
        <label>All</label>
        <input type="radio" name="type" size={50}></input>
      </div>
      <div className=" flex text-xl font-extralight justify-between items-center gap-x-3">
        <label>$0-$50</label>
        <input type="radio" name="type" size={50}></input>
      </div>
      <div className=" flex text-xl font-extralight justify-between items-center gap-x-3">
        <label>$50-$100</label>
        <input type="radio" name="type" size={50}></input>
      </div>
      <div className=" flex text-xl font-extralight justify-between items-center gap-x-3">
        <label>$100-$150</label>
        <input type="radio" name="type" size={50}></input>
      </div>
      <div className=" flex text-xl font-extralight justify-between items-center gap-x-3">
        <label>$150 above</label>
        <input type="radio" name="type" size={50}></input>
      </div>
      
    </div>
  )
}

export default Price