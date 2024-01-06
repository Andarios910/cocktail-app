import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import Navbar from '../component/Navbar'
import GoToTop from '../component/GoToTop'

export default function DetailPage() {

    const {id} = useParams();
    const [drinks, setDrinks] = useState([]);   
    const [ingredient, setIngredient] = useState([]);

    const loadDrinks = async() => {
        const res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        setDrinks(res.data.drinks);
        let drinks = res.data.drinks[0];

        const tempIngredient =[];

        for (let i = 0; i <= 20; i++) {
            if (drinks[`strIngredient${i}`]) {
                tempIngredient.push([drinks[`strIngredient${i}`], ' ', drinks[`strMeasure${i}`]])
                // console.log(drinks[`strIngredient`])
            }
        }
        setIngredient(tempIngredient);
    }
    
    useEffect(() => {
        loadDrinks();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <Navbar />
            <div className="card-detail-app mt-24 w-100 lg:w-4/5 lg:mb-16 flex flex-col md:max-h-screen">
                <div className="card-detail flex flex-col md:flex-row bg-white rounded-lg shadow-xl mt-4 w-100 mx-2 h-96 border-4">
                    <div className="h-64 w-auto md:w-1/2">
                        {
                            drinks.map(item => (
                                <img className="img-detail h-full w-full lg:mt-8 lg:ml-8 my-auto object-center items-center" src={item.strDrinkThumb} key={item.idDrink} alt='drinks' />
                            ))
                        }
                    </div>
                    <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                        {
                            drinks.map(item => (
                                <div key={item.idDrink} className='lg:ml-14 lg:mt-4' >
                                    <h1 className="text-3xl font-semibold leading-tight truncate">Let's Make {item.strDrink}</h1>
                                    <h4 className='mt-4' >Category : {item.strCategory}</h4>
                                    <h4 className='mt-4 mb-4 text-2xl font-semibold' >Ingredient</h4>
                                    {
                                        ingredient.map((item,i) => (
                                            <p key={i}>{item}</p>
                                        ))
                                    }
                                    <h4 className='mt-4 text-2xl font-semibold' >Instruction</h4>
                                    <p className="mt-2">{item.strInstructions}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <GoToTop />
        </div>
    )
}
