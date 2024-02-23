import { useEffect, useState } from "react";

export function useCountries () {
    const [ countries, setCountries ] = useState([]);

    useEffect(() => {
        fetch('/countries-client/getCountries')
        .then(res => res.json())
        .then(data => setCountries(data))
        .catch(err => console.log(err))
    },[]);
    
    return { countries }
}