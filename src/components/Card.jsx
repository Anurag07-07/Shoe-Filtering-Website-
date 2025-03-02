import { FaStar } from "react-icons/fa"
import { FaBagShopping } from "react-icons/fa6"

const Card = () => {
  return (
    <div className="flex flex-col justify-center w-[18rem] gap-y-3 px-2 py-6 rounded-2xl shadow-xl shadow-grey">
      <section className="">
          <img className=" w-[13rem]" src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"></img>
      </section>
      <div className=" font-bold text-3xl">
        Shoe
      </div>
      <div className=" font-bold text-xl flex justify-start items-center gap-x-1">
        <FaStar color="Gold"></FaStar>
        <FaStar color="Gold"></FaStar>
        <FaStar color="Gold"></FaStar>
        <FaStar color="Gold"></FaStar>
        <h1>4</h1>
      </div>
      <div className=" flex justify-between items-center">
        <div className=" font-extralight text-xl">
          <del>$300</del> 200
        </div>
        <div className=" font-bold text-xl">
          <FaBagShopping></FaBagShopping>
        </div>
      </div>
    </div>
  )
}

export default Card