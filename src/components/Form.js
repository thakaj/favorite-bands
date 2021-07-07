import React, {useState} from "react"

function Form(){
    const [newBand, setNewBand] =useState("")
//const [newBandImage, setNewBandImage] =useState("") => more functionality for later
const [submittedData, setSubmittedData]= useState([])   
    function handleNewBandChange(event){
        return (
            setNewBand(event.target.value)
        )
    }
    function handleSubmit(event){
        event.preventDefault()
        const formInfo = {newBand: newBand}
        const storedData = [...submittedData, formInfo]
        setSubmittedData(storedData)
        setNewBand("")
    }
    const bandSubmissions = submittedData.map((data, index)=> {
        return (
            <article key={index}>
                {data.newBand}
            </article>
        )
    })
    
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" 
            onChange={handleNewBandChange} 
            value={newBand}/>
            <button type= "submit">Submit</button>
            {bandSubmissions}
        </form>
    )
}

export default Form;