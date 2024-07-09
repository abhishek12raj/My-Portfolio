import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
   <>
   <div className="container nav_bar">
         <div className="left nav_items">Portfolio</div>
         <div className="right">
          <Link to="/" className="nav_items" >Home</Link>
       {/* <a href="" className="nav_items">Home</a> */}
       <Link to="/products" className="nav_items" >Projects</Link>
       <Link to="/skills" className="nav_items" >Skills</Link>

       <Link to="/experience" className="nav_items" >Experience</Link>
       <Link to="/contact" className="nav_items" >Contact</Link>
       {/* <a href="" className="nav_items">Experience</a>
       <a href="" className="nav_items">Skills</a>
       <a href="" className="nav_items">Projects</a>
       <a href="" className="nav_items">Contact</a> */}
         </div>
      </div>
   </>
  )
}

export default Navbar
