import React from "react"

function BandCard ({id, name, image, bio }){
    console.log()
    return (
        <div className="band-card">

            <article key={id}>
                <h2>{name}</h2>
                <img src={image} alt={name} />
                <article>{bio}</article>
            </article>
        </div>
    )
}
export default BandCard