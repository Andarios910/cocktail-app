import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import Navbar from '../component/Navbar'
import Content from '../component/Content'

export default function CategoryPage() {
    const { category } = useParams();
    const [drinks, setDrinks] = useState([]);

    const categoryDrinks = async() => {
        try {
            const res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`)
            setDrinks(res.data.drinks);
        } catch(error) {
            console.error(error);
        }
    }

    useEffect(() => {
        categoryDrinks();
    })


    return (
        <div>
            <Navbar />
            <h1 className='detail container text-xl'>Category : {category}</h1>
            <Content drinks={drinks} />
        </div>
    )
}
