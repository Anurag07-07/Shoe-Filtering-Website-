import Input from "../components/Input"

const Colors = ({handleChange}) => {
  return (
    <div className=" pt-3">
      <div className=" font-extrabold text-2xl">COLORS</div>
      <Input
      handleChange={handleChange}
      value=''
      title="All"
      name="test3"
      ></Input>
      <Input
      handleChange={handleChange}
      value='black'
      title="Black"
      name="test3"
      color = 'black'
      ></Input>
      <Input
      handleChange={handleChange}
      value='blue'
      title="Blue"
      name="test3"
      color = 'blue'
      ></Input>
      <Input
      handleChange={handleChange}
      value='red'
      title="Red"
      name="test3"
      color = 'red'
      ></Input>
      <Input
      handleChange={handleChange}
      value='green'
      title="Green"
      name="test3"
      color = 'green'
      ></Input>
      
    </div>
  )
}

export default Colors