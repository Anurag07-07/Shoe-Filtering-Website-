import Input from "../components/Input"

const Price = ({handleChange}) => {
  return (
    <div className=" pt-3">
      <div className=" font-extrabold text-2xl">PRICE</div>
      <Input
      handleChange={handleChange}
      value=''
      title="All"
      name="test2"
      ></Input>
      <Input
      handleChange={handleChange}
      value={50}
      title="$0-$50"
      name="test2"
      ></Input>
      <Input
      handleChange={handleChange}
      value={100}
      title="$50-$100"
      name="test2"
      ></Input>
      <Input
      handleChange={handleChange}
      value={150}
      title="$100-$150"
      name="test2"
      ></Input>
      <Input
      handleChange={handleChange}
      value={200}
      title="Over $150"
      name="test2"
      ></Input>
      </div>
  )
}

export default Price