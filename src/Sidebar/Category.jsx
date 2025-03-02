// Snekaers flats all heels sandals
const Category = () => {
  return (
    <div className=" pt-3">
      <div className=" font-extrabold text-2xl">CATEGORY</div>
      <div className=" flex text-xl font-extralight justify-between items-center gap-x-3">
        <label>All</label>
        <input type="radio" name="type" size={50}></input>
      </div>
      <div className=" flex text-xl font-extralight justify-between items-center gap-x-3">
        <label>Sneakers</label>
        <input type="radio" name="type" size={50}></input>
      </div>
      <div className=" flex text-xl font-extralight justify-between items-center gap-x-3">
        <label>Heels</label>
        <input type="radio" name="type" size={50}></input>
      </div>
      <div className=" flex text-xl font-extralight justify-between items-center gap-x-3">
        <label>Sandals</label>
        <input type="radio" name="type" size={50}></input>
      </div>
      <div className=" flex text-xl font-extralight justify-between items-center gap-x-3">
        <label>Flats</label>
        <input type="radio" name="type" size={50}></input>
      </div>
      
    </div>
  )
}

export default Category