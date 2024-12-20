import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeChontext'

const Header = () => {
  const [bgColor , setbgColor] = useContext(ThemeContext)
  return (
    <div className={`header ${bgColor ? "mode-dark" : "mode-light"}`}>
        <div className="title">
            <h1>Where in the world!</h1>
        </div>
        <div className="mode">
            <span onClick={() => setbgColor(!bgColor)}><i className="ri-moon-fill"></i>{bgColor ? "Light mode" : "Dark mode"}</span>
            {/* <select name="dark mode" id="mode">
                <option value="dark mode" selected>dark mode</option>
                <option value="light mode">light mode</option>
            </select> */}
        </div>
    </div>
  )
}

export default Header