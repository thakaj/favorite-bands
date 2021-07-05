import React from "react"
import {Link} from "react-router-dom"

function NavBar(){
   
    return (
        <nav>NavBar 
            <div>
            <Link to="/homepage">Home Page</Link>
            <Link to="/bandpage">Band Page</Link>
            <Link to="/newbandpage">New Band</Link>
            </div>
        </nav>
    )
}
export default NavBar