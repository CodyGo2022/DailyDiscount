import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import PicAdmin from '../assets/adminpic.jpg'

const Navbar = ({handleClick,toggle}) => {

    return (
        <div className="flex items-center justify-end xl:justify-between w-[98%] m-auto">
            {/* toggle */}
            <div onClick={handleClick} className={toggle ? "hidden xl:flex hover:rotate-90 z-10" : "hidden xl:flex hover:rotate-90 z-10"}>
                {toggle ? <FaTimes size={30}/> : <FaBars size={30}/>}
            </div>
            {/* img and accout name */}
            <div className="flex items-center gap-4">
                <div className="w-[2.375rem] rounded-full border-solid border-2 border-gray-300">
                    <img className="w-full rounded-full border" src={PicAdmin} alt="pic" />
                </div>
                <div>
                    <h1 className="font-semibold">User name</h1>
                    <h3 className="text-[#686464] font-normal">Administrator</h3>
                </div>
            </div>
        </div>
    )
}

export default Navbar