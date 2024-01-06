import React from 'react'
import ProductionList from '../assets/Data/ProductionList'

function ProductionHouse() {
    return (
        <div className='flex p-2 px-5 gap-3 md:gap-5 md:px-16 '>
            {
                ProductionList.map((item) => (
                    <div className='border-[2px] border-gray-600 rounded-lg hover:scale-110 transition-all duration-500 ease-in-out cursor-pointer shadow-xl shadow-grey-800'>
                        <img src={item.image} className='w-full z-[1]' />
                        <video src={item.video} autoPlay loop playsInline muted
                            className='absolute z-0  top-0 rounded-md 
            opacity-0 hover:opacity-50'/>
                    </div>
                ))
            }

        </div>
    )
}

export default ProductionHouse
