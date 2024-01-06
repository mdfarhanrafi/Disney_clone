import React, { useState } from 'react'
import Navbar from '../assets/Data/Navbar'
import Headeritem from './Headeritem'
import { HiDotsVertical } from 'react-icons/hi'
function Menu() {
  const [toogle, setToggle] = useState(false) 

  return (
    <>
          <div className='hidden md:flex items-center gap-8'>
              {
                  Navbar.map((navitem) => (
                      <Headeritem name={navitem.name} Icon={navitem.icon} />
                  ))
              }
          </div>
          <div className='flex items-center md:hidden gap-8 '>
              {
                  Navbar.map((navitem,index) => index < 3 &&  (
                      <Headeritem name={''} Icon={navitem.icon} />
                  ))
              }
              <div className='md:hidden' onClick={()=>setToggle(!toogle)}>
                   <Headeritem name={''} Icon = {HiDotsVertical}/>
                  {toogle ? <div className='absolute bg-[#121212]  border-[1px] rounded border-gray-700 p-3 px-3 py-4'>
                      {
                          Navbar.map((navitem, index) => index > 2 && (
                              <Headeritem name={navitem.name} Icon={navitem.icon} />
                          ))
                      }
                       
                  </div> : null}
              
              </div>

          </div>



    </>
  )
}

export default Menu
