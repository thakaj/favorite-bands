import React, {useEffect, useState} from "react"
import BandCard from "./BandCard"



function BandPage(){
const [bands, setBands] = useState([])


useEffect(()=> {
    fetch('http://localhost:8000/bands')
    .then(r=> r.json())
    .then(data => setBands(data))
}, [])


return (
    <div>
            <h1>Playing In The Band</h1>
            {bands.map( bands => <BandCard 
            key={bands.id}
            id={bands.id} 
            name={bands.name}
            image={bands.image}
            bio={bands.bio}
            />)}
        </div>
    )
}

export default BandPage

// after i finish the project i can come back to this to add more functionality
// const [isClicked, setIsClicked] = useState(false)
// function handleClick(){
//     setIsClicked(isClicked =!isClicked)
// }