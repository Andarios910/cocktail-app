import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

import Navbar from '../component/Navbar';
import Content from '../component/Content';

export default function SearchPage() {

    const {s} = useParams();
    const [drinks, setDrinks] = useState([]);

    const searchDrinks = async() => {
        try {
            const res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${s}`)
            setDrinks(res.data.drinks);
        } catch(error) {
            console.error(error);
        }
    }

    useEffect(() => {
        searchDrinks();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <Navbar />
            <h1 className='detail container text-xl'>Search : {s}</h1>
            <Content drinks={drinks} />
        </div>
    )
}
