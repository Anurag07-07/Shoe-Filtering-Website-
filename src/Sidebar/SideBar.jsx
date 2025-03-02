import Category from "./Category"
import Colors from "./Colors"
import Price from "./Price"

const SideBar = ({handleChange}) => {
  console.log(handleChange);
  
  return (
    <div className=" fixed shadow-xl shadow-gray-300 w-[15%] top-[10vh] flex flex-col gap-y-5 pl-10 items-start h-[100vh]">
      <div className=" relative font-extralight text-4xl">Filtering</div>
        <Category handleChange={handleChange}></Category>
        <Colors handleChange={handleChange}></Colors>
        <Price handleChange={handleChange}></Price>    
    </div>
  )
}

export default SideBar
