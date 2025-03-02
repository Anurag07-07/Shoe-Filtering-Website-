import Nav from "./Navigation/Nav"
import Product from "./Products/Product"
import Recommanded from "./Recommanded/Recommanded"
import SideBar from "./Sidebar/SideBar"

const App = () => {
  return (
    <div className=" m-0 p-0 box-border">
      <SideBar></SideBar>
      <Nav></Nav>
      <Recommanded></Recommanded>
      <Product></Product>
    </div>
  )
}

export default App