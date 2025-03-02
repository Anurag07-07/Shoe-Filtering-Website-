import Category from "./Category"
import Colors from "./Colors"
import Price from "./Price"

const SideBar = () => {
  return (
    <div className=" fixed shadow-xl shadow-gray-300 w-[15%] top-[10vh] flex flex-col gap-y-5 pl-10 items-start h-[100vh]">
      <div className=" relative font-extralight text-4xl">Filtering</div>
        <Category></Category>
        <Colors></Colors>
        <Price></Price>    
    </div>
  )
}

export default SideBar
