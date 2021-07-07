import React from "react"
import {Link} from "react-router-dom"

function NavBar(){
   
    return (
        <nav>
            <Link to="/homepage">Home Page</Link>
            <Link to="/bandpage">Band Page</Link>
            <Link to="/newbandpage">New Band</Link>
        </nav>
    )
}
export default NavBar