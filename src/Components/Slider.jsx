import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import IMAGE_BASE_URL from "../Constents/Url"
import { HiChevronLeft,HiChevronRight } from "react-icons/hi2";
import screenwidth from '../Constents/Constant';
function Slider() {
    const [movieList, setMovieList] = useState([])
    const elementRef= useRef()
    useEffect(() => {
        getTrendingMovies();
    }, [])
    const getTrendingMovies = () => {
        GlobalApi.getTrendingvideos.then(resp => {
           
            setMovieList(resp.data.results)
        })
    }
    const sliderRight=(element)=>{
             element.scrollLeft+=screenwidth-110
    }
    const sliderLeft = (element) => {
        element.scrollLeft -=screenwidth-110
    }
    return (
      <div> 
            <HiChevronLeft  className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer' onClick={()=>sliderLeft(elementRef.current)} />
            <HiChevronRight className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0' onClick={() => sliderRight(elementRef.current)} />
 
    <div className='flex overflow-x-auto scrollbar-none w-full px-16 py-4 scroll-smooth' ref={elementRef}>
        {
              movieList.map((item, index) => (
               <img src={IMAGE_BASE_URL+item.backdrop_path} className='min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-md hover:border-[1px] border-grey-400 transition-all duration-1000 ease-in-out' />
          ))     
        }    
     
    </div>
    </div>    
  )
}

export default Slider
