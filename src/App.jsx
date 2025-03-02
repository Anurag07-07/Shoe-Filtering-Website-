import { useState } from "react"
import Nav from "./Navigation/Nav"
import Product from "./Products/Product"
import Recommanded from "./Recommanded/Recommanded"
import SideBar from "./Sidebar/SideBar"
import data from './db/data.js'
import Card from "./components/Card"

const App = () => {

  const [selectedCategory,setSelectedCategory] = useState(null)

  const [Query,setQuery] = useState('')

  //Input Filter

  const handleInputChange = (e)=>{
    setQuery(e.target.value)    
  }

  const FilteredItem = data.filter(
    (product) => product.title.toLowerCase().indexOf(Query.toLowerCase()) !== -1
  );
  // Radio Filter 

  const handleChange = (e)=>{
    setSelectedCategory(e.target.value)
  }

  //Button Filter
  const handleClick = (e)=>{
    setSelectedCategory(e.target.value)
  }

  function filterData(data,selected,Query) {
    let filteredProducts = data
    if (Query) {
      filteredProducts = FilteredItem
    }

    if (selected) {
      filteredProducts = filteredProducts.filter(({category,title,color,newPrice,company})=>(
        category === selected || color === selected || company === selected || newPrice === selected || title === selected
      )) 
    }


    return filteredProducts.map(({img,title,star,reviews,prevPrice,newPrice})=>(
      <Card 
      key={Math.random()}
        img={img}
        title = {title}
        star = {star}
        reviews = {reviews}
        prevPrice = {prevPrice}
        newPrice = {newPrice}
      ></Card>
    ))
  }

  const result = filterData(data,selectedCategory,Query) 

  return (
    <div className=" m-0 p-0 box-border">
      <SideBar handleChange={handleChange}></SideBar>
      <Nav Query = {Query} handleInputChange={handleInputChange}></Nav>
      <Recommanded handleClick = {handleClick}></Recommanded>
      <Product result={result}></Product>
    </div>
  )
}

export default App