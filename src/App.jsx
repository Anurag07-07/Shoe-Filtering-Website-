import Nav from "./Navigation/Nav"
import Product from "./Products/Product"
import Recommanded from "./Recommanded/Recommanded"

const App = () => {
  return (
    <div className=" m-0 p-0 box-border">
      <Nav></Nav>
      <Product></Product>
      <Recommanded></Recommanded>
    </div>
  )
}

export default App