import React from 'react'

export default function Reklama({ firma, selected }) {
    /*    */
    return (
        <>
            <div className='gallery__firma' style={{
                transform: selected ? "scale(1.2)" : "scale(1)",
                zIndex: selected ? "1" : "0",
                filter: selected ? "drop-shadow(0 0 1rem rgba(0, 0, 0, 0.4))" : "",
            }}>
                <figure >
                    <img src={firma.url} />
                </figure>
            </div>
        </>
    )
}
