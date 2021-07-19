import React from "react"

function BandCard ({id, name, image, bio }){
    return (
        <div className="band-card">
            <article key={id}>
                <h2>{name}</h2>
                <img src={image} alt={name} />
                <article>Your favorite song by them: {bio}</article>
            </article>
        </div>
    )
}
export default BandCard