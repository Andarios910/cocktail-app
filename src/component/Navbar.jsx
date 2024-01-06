import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

import axios from 'axios'

import SearchBar from './SearchBar';

export default function Navbar() {
    const navigate = useNavigate();
    const [search, setSearch] = useState('');
    const handleClickTitle = () => navigate('/')
    const [category, setCategory] = useState([]);
    const [toggle, showMenu] = useState(false);

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    const handleSubmit = () => {
        navigate(`/search/${search}`)
    } 

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    const handleClick = async () => {
        try {
            const res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`)
            // setDrinks(res.data.drinks)
            setCategory(res.data.drinks);
        } catch(error) {
            console.error(error);
        }
    }
    console.log(category)

    useEffect(() => {
        handleClick();
    }, [])

    return (
        <nav className="bg-white fixed top-0 left-0 right-0">
            <div className='container container__nav h-16'>
                <div className=' text-2xl font-bold hover:cursor-pointer' onClick={handleClickTitle}>
                    CocktailQ
                </div>
                <div className={toggle ? 'nav__com show__menu' : 'nav__com'}>
                    <div>
                        <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} />
                    </div>
                    <div className='nav__menu flex'>
                        <button href="#" className="bg-gray-400 text-white px-3 py-2 rounded-md text-sm font-medium" onClick={() => navigate('/')} aria-current="page">Home</button>

                        <Menu as="div" className="relative inline-block text-left">
                            <div>
                                <Menu.Button 
                                    onClick={handleClick} 
                                    className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                                >
                                    Options
                                    <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                                </Menu.Button>
                            </div>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-1">
                                    {
                                        category && 
                                        category.map((item,index) => (
                                            <Menu.Item key={index}>
                                            {({ active }) => (
                                                <button
                                                onClick={() => navigate(`/category/${item.strCategory}`)}
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900 w-full' : 'text-gray-700',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                                >
                                                {item.strCategory}
                                                </button>
                                            )}
                                            </Menu.Item>
                                        ))
                                    }
                                </div>
                                </Menu.Items>
                            </Transition>
                            </Menu>
                    </div>
                    <IoMdClose className='nav__close' onClick={() => showMenu(!toggle)} />
                </div>
                <GiHamburgerMenu className={toggle ? 'nav__toggle' : 'nav__toggle show__menu'} onClick={() => showMenu(!toggle)} />
            </div>
        </nav>
    )
}