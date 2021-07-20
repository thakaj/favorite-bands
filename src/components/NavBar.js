import React from "react"
import {Link} from "react-router-dom"

function NavBar(){
   
    return (
        <header>
        <nav>
            <Link to="/">Home Page</Link>
            <Link to="/bandpage">Band Page</Link>
            <Link to="/newbandpage">New Band</Link>
        </nav>
        </header>
    )
}
export default NavBar