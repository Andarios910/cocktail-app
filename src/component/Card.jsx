import React from 'react'

export default function Card( {id, title, image, onClick}) {
    return (
        <div className="rounded-lg shadow-lg bg-white max-w-xs hover:shadow-2xl hover:border-4 border-indigo-500/75" onClick={onClick}>
            <p>
                <img className="rounded-t-lg" src={image} alt=""/>
            </p>
            <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2">{title}</h5>
                {/* <p class="text-gray-700 text-base mb-4">
                    Some quick example text to build ontent.
                </p> */}
            </div>
        </div>
    )
}
