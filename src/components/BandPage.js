import React, {useState} from "react"
import BandCard from "./BandCard"



function BandPage({bands}){
    const [data, setData] = useState("")
   
    function handleChange(e){
        setData(e.target.value)
    }

    const filterArray = bands.filter((b)=> (b.name && b.name.includes(data)))

    return (
    <main>
    <div className="band-header">
            <h1>A collection of Grateful Dead Band Members As Well As Other Bands</h1>
            <form >
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
        </main>
    )
}

export default BandPage