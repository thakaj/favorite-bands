import React from "react"

function BandCard ({id, name, image, bio }){
    console.log()
    return (
        <div>

            <article key={id}>
                <h2>{name}</h2>
                <img src={image}/>
                <article>{bio}</article>
            </article>
        </div>
    )
}
export default BandCard