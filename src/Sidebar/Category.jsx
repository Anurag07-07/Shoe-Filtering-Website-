import Input from "../components/Input"

// Snekaers flats all heels sandals
const Category = ({handleChange}) => {
  return (
    <div className=" pt-3">
      <div className=" font-extrabold text-2xl">CATEGORY</div>
      <Input
      handleChange={handleChange}
      value=''
      title="All"
      name="test"
      ></Input>
        <Input
        handleChange={handleChange}
        value='sneakers'
        title="Sneakers"
        name="test"
        ></Input>
        <Input
        handleChange={handleChange}
        value='flats'
        title="Flats"
        name="test"
        ></Input>
        <Input
        handleChange={handleChange}
        value='sandals'
        title="Sandals"
        name="test"
        ></Input>
        <Input
        handleChange={handleChange}
        value='heels'
        title="Heels"
        name="test"
        ></Input>
    </div>
  )
}

export default Category