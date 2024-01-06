import React from 'react'
import GenreList from '../assets/Data/GenreList'
import Movies from './Movies'
function GenreMovieList() {
  return (
    <div>
       {
              GenreList.map((item,index)  => index <= 4 &&  (
                <div className='p-8 px-8 md:px-16'>
                      <h2 className='text-white font-bold text-[20px] ' >{item.name}</h2>
                      <Movies genreId={item.id} index_={index} />
                </div>
         ))       
       }
    </div>
  )
}

export default GenreMovieList
