import Card from "../components/Card"

const Product = ({result}) => {
  return (
    <div className=" ml-[17rem] mt-4 flex flex-wrap gap-x-5">
      {result}
    </div>
  )
}

export default Product