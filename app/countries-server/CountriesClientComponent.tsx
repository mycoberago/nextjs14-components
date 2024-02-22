'use client';
import React, { useEffect, useState } from 'react'
import CountryComponent from './CountryComponent';

const CountriesClientComponent = ({ countries }:
    {countries: any}) => {
    const [ visibleCountries, setVisibleCountries ] = useState([]);

    useEffect(() => {
        setVisibleCountries(countries);
    },[countries])

    const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
        let searchText = e.currentTarget.value;
        filterCountries(searchText);
    }

    const filterCountries = (searchText: string) => {
        let filteredCountries = countries.filter((country: any) => country.name.common.toLowerCase().includes(searchText.toLowerCase()));
        setVisibleCountries(filteredCountries);
    }

    return (
        <>
        <div className='my-6 flex justify-center'>
            <input
                onKeyUp={handleKeyUp}
                className='px-2 rounded-md text-black'
                type='text' placeholder="Search Country" 
            />
        </div>
        <div className='flex flex-wrap'>
            
            {visibleCountries.map((country: any) => <CountryComponent key={country.name.common} country={country} />)}
        </div>
        </>
    )
}

export default CountriesClientComponent
