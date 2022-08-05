import React from 'react'
import {BsFillTagsFill} from 'react-icons/bs'
import {FiSearch} from 'react-icons/fi'
import {FaTrashAlt} from 'react-icons/fa'
import {BiEditAlt} from 'react-icons/bi'


const Dashboard = () => {
    return (
        <div className="flex flex-col w-[80%] 3xl:w-[90%] 2xl:w-[95%] lg:items-center m-auto">

            {/* Title */}
            <div className=" flex lg:w-full sm:flex-wrap lg:justify-center mt-[80px] items-center gap-5 lg:gap-2">
                <BsFillTagsFill size={30} fill='#7F8DA1' /> 
                <h1 className="font-semibold sm:text-[1.3rem] text-[1.75rem]"><span className="text-[#7F8DA1]">Products / </span> View Product</h1>
            </div>

            {/* Search */}
            <div className="flex lg:justify-center justify-end mt-[55px]">
                <div className="relative flex h-[38px]">
                    <input className="relative w-[full] text-[0.975rem] p-3" type="text" placeholder="Search..." />
                    <button className="flex h-full items-center absolute right-0 p-3">
                        <FiSearch size={20}/>
                    </button>
                </div>
            </div>

            {/* Show / Results */}
            <div className="flex lg:w-full lg:flex-col lg:items-center lg:gap-2 sm:w-full justify-between mt-[12px]">
                <div className="flex w-[14.188rem] h-[2.375rem] bg-[#FFFFFF] items-center justify-center rounded-[5px]">
                    <p className="text-[0.875rem] text-[#656161]">Showing 1 - 7 of 20 Results</p>
                </div>

                <div className="flex w-[12.188rem] h-[2.375rem] bg-[#FFFFFF] items-center justify-center rounded-[5px] gap-2">
                    <label className="text-[0.875rem] text-[#656161]">Results per Page:</label>
                    <select name="page" id="number" 
                            className="flex w-[3.188rem] h-[1.625rem] pl-2 text-[0.875rem] text-[#656161] border-solid border-[1px] border-[#7F8DA1] rounded-[5px] shadow-[0px_5px_8px_rgba(204,204,204,0.15)]">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                    </select>
                </div>
            </div>

            {/* Table */}
            <div className="mt-[21px] w-full">
                <table className="w-[100%] table-auto">
                    <thead>
                        <tr>
                            <td className="relative font-semibold text-[1.563rem] lg:text-[1.2rem] sm:text-[0.5rem] text-[#302F2F] p-3 lg:p-1 border-solid border-[1px] border-[#000000] arrow-down ard">Email</td>
                            <td className="relative font-semibold text-[1.563rem] lg:text-[1.2rem] sm:text-[0.5rem] text-[#302F2F] p-3 lg:p-1 border-solid border-[1px] border-[#000000] arrow-down ard">Products</td>
                            <td className="relative font-semibold text-[1.563rem] lg:text-[1.2rem] sm:text-[0.5rem] text-[#302F2F] p-3 lg:p-1 border-solid border-[1px] border-[#000000] arrow-down ard">Price</td>
                            <td className="relative font-semibold text-[1.563rem] lg:text-[1.2rem] sm:text-[0.5rem] text-[#302F2F] p-3 lg:p-1 border-solid border-[1px] border-[#000000] arrow-down ard">Date</td>
                            <td className="relative font-semibold text-[1.563rem] lg:text-[1.2rem] sm:text-[0.5rem] text-[#302F2F] p-3 lg:p-1 border-solid border-[1px] border-[#000000] arrow-down ard">Category</td>
                            <td className="relative font-semibold text-[1.563rem] lg:text-[1.2rem] sm:text-[0.5rem] text-[#302F2F] p-3 lg:p-1 border-solid border-[1px] border-[#000000] arrow-down ard">Status</td>
                            <th className="font-semibold text-[1.563rem] lg:text-[1.2rem] sm:text-[0.5rem] text-[#302F2F] p-3 lg:p-1 border-solid border-[1px] border-[#000000]">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-[1.125] lg:text-[1rem] sm:text-[0.5rem] text-[#4F4B4B] p-3 lg:p-1 border-solid border-b-[1px] border-[#EEF0F2]">J@gmail.com</td>
                            <td className="text-[1.125] lg:text-[1rem] sm:text-[0.5rem] text-[#4F4B4B] p-3 lg:p-1 border-solid border-b-[1px] border-[#EEF0F2]">YSS - Fleet Warden</td>
                            <td className="text-[1.125] lg:text-[1rem] sm:text-[0.5rem] text-[#4F4B4B] p-3 lg:p-1 border-solid border-b-[1px] border-[#EEF0F2]">&#8369;500</td>
                            <td className="text-[1.125] lg:text-[1rem] sm:text-[0.5rem] text-[#4F4B4B] p-3 lg:p-1 border-solid border-b-[1px] border-[#EEF0F2]">July 4 2022</td>
                            <td className="text-[1.125] lg:text-[1rem] sm:text-[0.5rem] text-[#4F4B4B] p-3 lg:p-1 border-solid border-b-[1px] border-[#EEF0F2]">Special Skin</td>
                            <td className="text-[1.125] lg:text-[1rem] sm:text-[0.5rem] text-[#4F4B4B] p-3 lg:p-1 border-solid border-b-[1px] border-[#EEF0F2]">Limited Time-Event</td>
                            <td className="flex justify-center gap-5 lg:gap-2 text-[1.125] lg:text-[1rem] sm:text-[0.5rem] text-[#4F4B4B] p-3 lg:p-1 border-solid border-b-[1px] border-[#EEF0F2]"><BiEditAlt size={25} className="item" fill='#0500FF'/><FaTrashAlt size={25} className="item" fill='#F13B1F'/></td>
                        </tr>
                        <tr>
                            <td className="text-[1.125] lg:text-[1rem] sm:text-[0.5rem] text-[#4F4B4B] p-3 lg:p-1 border-solid border-b-[1px] border-[#EEF0F2]">J@gmail.com</td>
                            <td className="text-[1.125] lg:text-[1rem] sm:text-[0.5rem] text-[#4F4B4B] p-3 lg:p-1 border-solid border-b-[1px] border-[#EEF0F2]">YSS - Fleet Warden</td>
                            <td className="text-[1.125] lg:text-[1rem] sm:text-[0.5rem] text-[#4F4B4B] p-3 lg:p-1 border-solid border-b-[1px] border-[#EEF0F2]">&#8369;500</td>
                            <td className="text-[1.125] lg:text-[1rem] sm:text-[0.5rem] text-[#4F4B4B] p-3 lg:p-1 border-solid border-b-[1px] border-[#EEF0F2]">July 4 2022</td>
                            <td className="text-[1.125] lg:text-[1rem] sm:text-[0.5rem] text-[#4F4B4B] p-3 lg:p-1 border-solid border-b-[1px] border-[#EEF0F2]">Special Skin</td>
                            <td className="text-[1.125] lg:text-[1rem] sm:text-[0.5rem] text-[#4F4B4B] p-3 lg:p-1 border-solid border-b-[1px] border-[#EEF0F2]">Available</td>
                            <td className="flex justify-center gap-5 lg:gap-2 text-[1.125] lg:text-[1rem] sm:text-[0.5rem] text-[#4F4B4B] p-3 lg:p-1 border-solid border-b-[1px] border-[#EEF0F2]"><BiEditAlt size={25} className="item" fill='#0500FF'/><FaTrashAlt size={25} className="item" fill='#F13B1F'/></td>
                        </tr>
                        <tr>
                            <td className="text-[1.125] lg:text-[1rem] sm:text-[0.5rem] text-[#4F4B4B] p-3 lg:p-1 border-solid border-b-[1px] border-[#EEF0F2]">J@gmail.com</td>
                            <td className="text-[1.125] lg:text-[1rem] sm:text-[0.5rem] text-[#4F4B4B] p-3 lg:p-1 border-solid border-b-[1px] border-[#EEF0F2]">YSS - Fleet Warden</td>
                            <td className="text-[1.125] lg:text-[1rem] sm:text-[0.5rem] text-[#4F4B4B] p-3 lg:p-1 border-solid border-b-[1px] border-[#EEF0F2]">&#8369;500</td>
                            <td className="text-[1.125] lg:text-[1rem] sm:text-[0.5rem] text-[#4F4B4B] p-3 lg:p-1 border-solid border-b-[1px] border-[#EEF0F2]">July 4 2022</td>
                            <td className="text-[1.125] lg:text-[1rem] sm:text-[0.5rem] text-[#4F4B4B] p-3 lg:p-1 border-solid border-b-[1px] border-[#EEF0F2]">Special Skin</td>
                            <td className="text-[1.125] lg:text-[1rem] sm:text-[0.5rem] text-[#4F4B4B] p-3 lg:p-1 border-solid border-b-[1px] border-[#EEF0F2]">Comming Soon</td>
                            <td className="flex justify-center gap-5 lg:gap-2 text-[1.125] lg:text-[1rem] sm:text-[0.5rem] text-[#4F4B4B] p-3 lg:p-1 border-solid border-b-[1px] border-[#EEF0F2]"><BiEditAlt size={25} className="item" fill='#0500FF'/><FaTrashAlt size={25} className="item" fill='#F13B1F'/></td>
                        </tr>
                        <tr>
                            <td className="text-[1.125] lg:text-[1rem] sm:text-[0.5rem] text-[#4F4B4B] p-3 lg:p-1 border-solid border-b-[1px] border-[#EEF0F2]">J@gmail.com</td>
                            <td className="text-[1.125] lg:text-[1rem] sm:text-[0.5rem] text-[#4F4B4B] p-3 lg:p-1 border-solid border-b-[1px] border-[#EEF0F2]">YSS - Fleet Warden</td>
                            <td className="text-[1.125] lg:text-[1rem] sm:text-[0.5rem] text-[#4F4B4B] p-3 lg:p-1 border-solid border-b-[1px] border-[#EEF0F2]">&#8369;500</td>
                            <td className="text-[1.125] lg:text-[1rem] sm:text-[0.5rem] text-[#4F4B4B] p-3 lg:p-1 border-solid border-b-[1px] border-[#EEF0F2]">July 4 2022</td>
                            <td className="text-[1.125] lg:text-[1rem] sm:text-[0.5rem] text-[#4F4B4B] p-3 lg:p-1 border-solid border-b-[1px] border-[#EEF0F2]">Special Skin</td>
                            <td className="text-[1.125] lg:text-[1rem] sm:text-[0.5rem] text-[#4F4B4B] p-3 lg:p-1 border-solid border-b-[1px] border-[#EEF0F2]">Available</td>
                            <td className="flex justify-center gap-5 lg:gap-2 text-[1.125] lg:text-[1rem] sm:text-[0.5rem] text-[#4F4B4B] p-3 lg:p-1 border-solid border-b-[1px] border-[#EEF0F2]"><BiEditAlt size={25} className="item" fill='#0500FF'/><FaTrashAlt size={25} className="item" fill='#F13B1F'/></td>
                        </tr>
                        <tr>
                            <td className="text-[1.125] lg:text-[1rem] sm:text-[0.5rem] text-[#4F4B4B] p-3 lg:p-1 border-solid border-b-[1px] border-[#EEF0F2]">J@gmail.com</td>
                            <td className="text-[1.125] lg:text-[1rem] sm:text-[0.5rem] text-[#4F4B4B] p-3 lg:p-1 border-solid border-b-[1px] border-[#EEF0F2]">YSS - Fleet Warden</td>
                            <td className="text-[1.125] lg:text-[1rem] sm:text-[0.5rem] text-[#4F4B4B] p-3 lg:p-1 border-solid border-b-[1px] border-[#EEF0F2]">&#8369;500</td>
                            <td className="text-[1.125] lg:text-[1rem] sm:text-[0.5rem] text-[#4F4B4B] p-3 lg:p-1 border-solid border-b-[1px] border-[#EEF0F2]">July 4 2022</td>
                            <td className="text-[1.125] lg:text-[1rem] sm:text-[0.5rem] text-[#4F4B4B] p-3 lg:p-1 border-solid border-b-[1px] border-[#f2eeee]">Special Skin</td>
                            <td className="text-[1.125] lg:text-[1rem] sm:text-[0.5rem] text-[#4F4B4B] p-3 lg:p-1 border-solid border-b-[1px] border-[#EEF0F2]">Available</td>
                            <td className="flex justify-center gap-5 lg:gap-2 text-[1.125] lg:text-[1rem] sm:text-[0.5rem] text-[#4F4B4B] p-3 lg:p-1 border-solid border-b-[1px] border-[#EEF0F2]"><BiEditAlt size={25} className="item" fill='#0500FF'/><FaTrashAlt size={25} className="item" fill='#F13B1F'/></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Prev / Next */}
            <div className="flex w-full justify-end mt-[50px]">
                    <div className="flex">
                        <button className="text-[1rem] px-3 py-1 bg-[#C3C6C9] rounded-[4px]">Prev</button>
                        <p className="text-[1rem] px-3 py-1 bg-[#FFFFFF]">1</p>
                        <button className="text-[1rem] px-3 py-1 bg-[#C3C6C9] rounded-[4px]">Next</button>
                    </div>
            </div>
        </div>
    )
}

export default Dashboard