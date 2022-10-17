import React, { useEffect, useState } from 'react'

import Navbar from '../component/Navbar'
import Jumbotron from '../component/Jumbotron'
import Content from '../component/Content'

import axios from 'axios';

export default function HomePage() {
    const [drinks, setDrinks] = useState([]);
    const [query, setQuery] = useState('');

    const loadDrinks = async () => {
        try {
            const res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`)
            setDrinks(res.data.drinks)
        } catch(error) {
            console.error(error);
        }
    }

    useEffect(() => {
        loadDrinks();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query])


    return (
        <div>
            <Navbar />
            <Jumbotron />
            <h1 className='text-4xl pt-16 text-center mb-10'>Popular Drinks</h1>
            <Content drinks={drinks} />
        </div>
    )
}
