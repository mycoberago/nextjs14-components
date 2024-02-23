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
        <Modal 
            className='w-screen h-screen mt-12'
            size='lg'
            show={showModal} onClose={() => setShowModal(false)}
            dismissible
        >
            <Modal.Header 
                className='text-black font-bold p-3'
            />
            <Modal.Body>
                <div 
                    className='flex flex-col'
                >
                    <p
                        className='text-black text-center text-3xl my-3'
                    >{country.name.common}</p>

                    <img src={country.flags.png} alt={`${country.name.common} >flag`} />

                    <p className='text-black my-3 text-center'>
                        Capital: <span className='font-bold'>{country?.capital ? country.capital[0] : 'No Capital'}</span>
                    </p>
                </div>
            </Modal.Body>
        </Modal>
        </>
    )
}

export default CountryComponent