import React, {useState} from "react"
import {useHistory} from "react-router-dom"
import BandCard  from "./BandCard"

function Form({addNewBand}){
    const [newBand, setNewBand] = useState({name: "", image: "", bio: ""})
    const [errors, setErrors]= useState([])
    const history = useHistory()

   
    function handleChange(e){
        let newKey = e.target.name
        let newInput = e.target.value
        setNewBand({...newBand, [newKey]: newInput})
    }

    function handleSubmit(event){
        event.preventDefault()
        if(newBand.length > 0){

            
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
        }else {
            setErrors(["Please enter text before submiting!"])
        }
 }
        
    return (
        <>
        <h1> Submit Your Favorite Band</h1>
        
        <form onSubmit={handleSubmit}>
                <label>Band Name:</label>
                <input type="text" name="name"
                onChange={handleChange} 
                value={newBand.name} 
                placeholder="enter name..."
                style={{margin: "10px"}}/>
                <label>Image Url:</label>
                <input type="text" name="image"
                onChange={handleChange} 
                value={newBand.image}
                placeholder="enter image url..."
                style={{margin: "10px"}}/> 
                <label>Your favorite Song:</label>
                <input type="text" name="bio"
                onChange={handleChange} 
                value={newBand.bio}
                style={{margin: "10px"}}
                placeholder="enter favorite song..."/>
            <button type= "submit">Submit</button>
         </form>
         
         {errors.length > 0 ? errors.map((errors,index)=> (
             <p key={index} style={{color: "black"}}>{errors}</p>
         )):null}

         <h1>Preview of your Post!</h1>
         <BandCard 
            id="" 
            name={newBand.name}
            image={newBand.image}
            bio={newBand.bio}
            />
        </>
    )
}

export default Form;