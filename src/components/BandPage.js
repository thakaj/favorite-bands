import React, {useState} from "react"
import BandCard from "./BandCard"

//blog post => about filtering through an array that is undefined because my fetch is async 
//i will have to write about state as well. Write about the functionality i wanted to add.
//create a <button>


function BandPage({bands}){
    const [data, setData] = useState("")
    function handleChange(e){
        setData(e.target.value)
    }

    const filterArray = bands.filter((b)=> (b.name && b.name.includes(data)))
return (
    <div>
            <h1>Playing In The Band</h1>
            <form onSubmit>
                <label>Filter:</label>
                <input type="text" 
                name="name"
                onChange={handleChange}
                value={data}
                placeholder="Search..."
                />
            </form>
            {filterArray.map(bands => 
            <BandCard 
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