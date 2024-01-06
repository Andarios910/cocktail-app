import React from 'react'

export default function Jumbotron() {
    return (
        <div className="jumbotron text-center py-12 mt-16 header">
            <h2 className="jumbotron__text tracking-wide text-white sm:text-4xl sm:leading-10">
                CocktailQ
            </h2>
            <div className="mt-8 flex justify-center">
                <div className="inline-flex">
                    <p className='text-white text-2xl tracking-wide'>Cocktail Bar</p>
                </div>
            </div>
        </div>
    )
}
