'use client';
import React, { useEffect, useState } from 'react'
import CountriesClientComponent from '../components/CountriesClientComponent';
import { useCountries } from '../lib/hooks/useCountries';

const CountriesComponent = () => {
    const { countries } = useCountries();

    return (<CountriesClientComponent countries={countries} />)
}

export default CountriesComponent