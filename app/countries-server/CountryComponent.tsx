import React, { useState } from 'react'
import { Modal } from 'flowbite-react'

const CountryComponent = ({country}: {country: any}) => {
    const [ showModal, setShowModal ] = useState<boolean>(false);
   
    return (
        <>
        <div
            onClick={() => setShowModal(true)}
            className='mx-2 border-2 px-2 my-1 rounded-md cursor-pointer hover:translate-x-2 hover:border-green-400'
        >
            {country.name.common}
        </div>
        <Modal show={showModal} onClose={() => setShowModal(false)}>
            <Modal.Header className='text-black'>{country.name.common}</Modal.Header>
            <Modal.Body>
                <div>
                    <img src={country.flags.png} alt={`${country.name.common} >flag`} />
                    <p className='text-black'>Capital: {country?.capital ? country.capital[0] : 'No Capital'}</p>
                </div>
            </Modal.Body>
        </Modal>
        </>
    )
}

export default CountryComponent