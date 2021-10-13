import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalcontext } from './context'


const Navbar = () => {
  const {opensidebar, opensubmenu , closesubmenu} = useGlobalcontext()

const displaysubmenu = (e) =>{
  console.log(e);
  const page = e.target.textContent;
  console.log(page)
  const tempBtn = e.target.getBoundingClientRect();
  console.log(tempBtn)
  const center = (tempBtn.left + tempBtn.right)/2;
  const bottom = tempBtn.bottom - 3;
  opensubmenu(page,{center,bottom})
}

const handlesubmenu = (e) =>{
  if(!e.target.classList.contains('link-btn')){
    closesubmenu()
  }
}

  return(
    <nav className="nav" onMouseOver={handlesubmenu}>
      <div className="nav-center">
      <div className="nav-header">
      <img src={logo} className ="nav-logo" alt="stripe" />
      <button className="btn toggle-btn"
      onClick={opensidebar}>
        <FaBars />
      </button>
      </div>
      <ul className="nav-links">
      <li>
        <button className="link-btn"
        onMouseOver={displaysubmenu}>products</button>  
      </li>
      <li>
      <button className="link-btn"
      onMouseOver={displaysubmenu}>developers</button>
      </li>
      <li>
      <button className="link-btn"
      onMouseOver={displaysubmenu}>company</button>
      </li>
      </ul>
      <button className="btn signin-btn">
        Sign In
      </button>
      </div>
    </nav>
  )
}

export default Navbar
