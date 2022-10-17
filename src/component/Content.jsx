import React from 'react'
import { useNavigate } from 'react-router-dom'

import Card from './Card'

export default function Content( { drinks, onChange, onClick } ) {

    const navigate = useNavigate();

    return (
        <div className='container content'>
            <div className="grid grid-cols-4 gap-7">
                {
                    drinks &&
                    drinks.map(item => (
                        <Card 
                            key={item.idDrink}
                            id={item.idDrink}
                            title={item.strDrink}
                            image={item.strDrinkThumb}
                            onClick={() => navigate(`/${item.idDrink}`)}
                        />
                    ))
                }
                
            </div>
        </div>
    )
}
