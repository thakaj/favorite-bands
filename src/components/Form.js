import React, {useState} from "react"
import {useHistory} from "react-router-dom"

function Form({addNewBand}){
    const [newBand, setNewBand] = useState({name: "", image: "", bio: ""})
    const history = useHistory()
    function handleChangeName(event){
        setNewBand({...newBand, name: event.target.value })
    }
    function handleChangeImage(event){
        setNewBand({...newBand, image: event.target.value })
    }
    function handleChangeBio(event){
        setNewBand({...newBand, bio: event.target.value })
    }
    console.log(newBand)
    function handleSubmit(event){
        event.preventDefault()

        const configureObject = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                name: newBand.name, image: newBand.image, bio: newBand.bio
            })

        }
        fetch("http://localhost:8000/bands", configureObject)
        .then(r => r.json())
        .then(data => {
            addNewBand(data)
            history.push("/bandpage")
        })
    }
    
    return (
        <h1> Submit Your Favorite Band
        
        <form onSubmit={handleSubmit}>
                <input type="text" name="name"
                onChange={handleChangeName} 
                value={newBand.name} 
                placeholder="enter name..."
                style={{margin: "10px"}}/>
                <input type="text" name="image"
                onChange={handleChangeImage} 
                value={newBand.image}
                placeholder="enter image url..."
                style={{margin: "10px"}}/>
                <input type="text" name="bio"
                onChange={handleChangeBio} 
                value={newBand.bio}
                style={{margin: "10px"}}
                placeholder="enter favorite song..."/>
            <button type= "submit">Submit</button>
         </form>
            </h1>
    )
}

export default Form;