import Buttons from "../components/Buttons"

const Recommanded = ({handleClick}) => {
  return (
    <div className=" ml-[17rem] mt-4 gap-y-2 flex flex-wrap flex-col">
      <div className=" font-medium text-2xl">Recommanded</div>
      <div className=" flex gap-x-2">
        <Buttons
        onClickHandler={handleClick}
        value=""
        title="All Products"
        ></Buttons>
        <Buttons
        onClickHandler={handleClick}
        value="Nike"
        title="Nike"
        ></Buttons>
        <Buttons
        onClickHandler={handleClick}
        value="Adidas"
        title="Adidas"
        ></Buttons>
        <Buttons
        onClickHandler={handleClick}
        value="Puma"
        title="Puma"
        ></Buttons>
        <Buttons
        onClickHandler={handleClick}
        value="Vans"
        title="Vans"
        ></Buttons>
      </div>
    </div>
  )
}

export default Recommanded