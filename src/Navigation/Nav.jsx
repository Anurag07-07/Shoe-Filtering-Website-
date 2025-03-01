import { useState } from "react"
import { CiSearch } from "react-icons/ci"
import { FaHeart, FaShoppingCart,FaUser,FaSun,FaMoon  } from "react-icons/fa"

const Nav = () => {

  const [theme,setTheme] = useState(false)
  const [bgColor,setbgColor] = useState('white')
  const [color,setColor] = useState('black')
  const [isActive,setisActive] = useState(false)

  const changeTheme = ()=>{
    setTheme(!theme)
    setbgColor((bgColor)=>(bgColor == 'white' ? 'black': 'white'))
    setColor((color)=>(color=='black' ? 'white':'black'))
  }

  const changeInput = ()=>{
    setisActive(true)
  }

  return (
    <div style={{backgroundColor:bgColor,color:color}} className="ml-4 transition-all duration-600 rounded-sm shadow-2xs shadow-black flex justify-around p-5 items-center ">
      <div>
        {
          isActive ? (<div>
            <input className=" px-4 border-white border rounded-sm" type="text" style={{backgroundColor:bgColor,color:color}} placeholder="Enter The Product.."></input>
          </div>) :(<CiSearch size={20} onClick={changeInput}  />)
        }
      </div>
      <div className=" flex gap-x-3">
      <FaHeart size={20} /> 
      <FaShoppingCart size={20} />
      <FaUser size={20} />
      <div>
        {
          theme ? <FaSun size={20} onClick={changeTheme} />:<FaMoon onClick={changeTheme} size={20} />
        }
      </div>
      </div>
    </div>
  )
}

export default Nav