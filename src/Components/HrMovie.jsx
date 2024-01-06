import React from 'react'
import IMAGE_BASE_URL from '../Constents/Url'
function HrMovie({ movie }) {
    return (
        <div>
            <section className='hover:scale-110 transition-all duration-150 ease-in'>
                <img src={IMAGE_BASE_URL + movie.backdrop_path}
                    className='w-[110px] md:w-[260px] rounded-lg
                              hover:border-[3px] border-gray-400 cursor-pointer'/>
                <h2 className='w-[110px] md:w-[260px] text-white
    mt-2'>{movie.title}</h2>
            </section>
        </div>
    )
}

export default HrMovie
