import React from 'react'
import CountriesClientComponent from '../components/CountriesClientComponent';

async function getCountries () {
    let initFetch = await fetch('https://restcountries.com/v3.1/all');
    if(!initFetch.ok) throw new Error('Error fetching countries');
    let data = await initFetch.json();
    return data;
}

const CountriesServerComponent = async () => {
    const countries: any[] = await getCountries();
    return (<CountriesClientComponent countries={countries} />)
}

export default CountriesServerComponent