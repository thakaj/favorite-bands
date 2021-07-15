import React from "react"

function BandCard ({id, name, image, bio }){
    console.log()
    return (
        <div>

            <article key={id}>
                <h2>{name}</h2>
                <img src={image} alt={name} width="300px" height="300px"/>
                <article>{bio}</article>
            </article>
        </div>
    )
}
export default BandCard