import React from 'react'

export default function SearchBar({ handleChange, handleSubmit }) {
    return (
            <div className="">
                <form onSubmit={handleSubmit}>
                    <input 
                        type="search" 
                        className="w-64 text-gray-700 px-3 py-1.5 bg-clip-padding border border-gray-300 rounded focus:bg-white focus:border-2 focus:border-blue-600 focus:outline-none" 
                        placeholder="Search" 
                        aria-label="Search"
                        onChange={handleChange}
                    />
                    <button className="bg-blue-600 text-white px-6 py-2.5 rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                        </svg>
                    </button>
                </form>
            </div>
    )
}