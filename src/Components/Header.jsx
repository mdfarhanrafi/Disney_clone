import React from 'react'
import logo from '../assets/Images/Logo.png'
import user from '../assets/Images/user.png'
import Menu from './Menu'

function Header() {
    return (
        <div className='flex items-center gap-5 justify-between p-5'>
            <div className='flex items-center gap-8'>
                <img src={logo} className='w-[80px] md:w-[115px] object-cover' />
                 <Menu/>
            </div>
              <img src={user} alt="user png" className='w-[40px] rounded-full' />
        </div>
    )
}

export default Header
