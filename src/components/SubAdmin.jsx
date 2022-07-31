import React from 'react'
import {TiEdit} from 'react-icons/ti'
import {HiOutlineUserGroup} from 'react-icons/hi'
import {FaTrashAlt} from 'react-icons/fa'


const Dashboard = () => {
    return (
        <div className="flex flex-col w-[80%] 3xl:w-[90%] 2xl:w-[95%] lg:items-center m-auto">

            {/* Title */}
            <div className=" flex mt-[80px] items-center gap-5">
                <HiOutlineUserGroup size={30} color="#7F8DA1"/> 
                <h1 className="font-semibold text-[1.75rem]"><span className="text-[#7F8DA1]">Administrator / </span> Sub-Admin</h1>
            </div>

            {/* Show / Results */}

            <div className="flex justify-between mt-[124px]">
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
            <div className="mt-[21px]">
                <table className="w-[100%] table-auto">
                    <thead>
                        <tr>
                            <td className="relative font-semibold text-[1.563rem] sm:text-[0.5rem] text-[#302F2F] p-3 border-solid border-[1px] border-[#000000] arrow-down">Email</td>
                            <td className="relative font-semibold text-[1.563rem] sm:text-[0.5rem] text-[#302F2F] p-3 border-solid border-[1px] border-[#000000] arrow-down">Username</td>
                            <td className="relative font-semibold text-[1.563rem] sm:text-[0.5rem] text-[#302F2F] p-3 border-solid border-[1px] border-[#000000] arrow-down">Phone No.</td>
                            <td className="relative font-semibold text-[1.563rem] sm:text-[0.5rem] text-[#302F2F] p-3 border-solid border-[1px] border-[#000000] arrow-down">Date</td>
                            <th className="font-semibold text-[1.563rem] sm:text-[0.5rem] text-[#302F2F] p-3 border-solid border-[1px] border-[#000000]">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-[1.125] sm:text-[0.5rem] text-[#4F4B4B] p-3 border-solid border-b-[1px] border-[#EEF0F2]">J@gmail.com</td>
                            <td className="text-[1.125] sm:text-[0.5rem] text-[#4F4B4B] p-3 border-solid border-b-[1px] border-[#EEF0F2]">Jomar</td>
                            <td className="text-[1.125] sm:text-[0.5rem] text-[#4F4B4B] p-3 border-solid border-b-[1px] border-[#EEF0F2]">09654789654</td>
                            <td className="text-[1.125] sm:text-[0.5rem] text-[#4F4B4B] p-3 border-solid border-b-[1px] border-[#EEF0F2]">July 4 2022</td>
                            <td className="flex justify-center gap-5 text-[1.125] sm:text-[0.5rem] text-[#4F4B4B] p-3 border-solid border-b-[1px] border-[#EEF0F2]"><TiEdit size={28} fill='#0500FF'/><FaTrashAlt size={25} fill='#F13B1F'/></td>
                        </tr>
                        <tr>
                            <td className="text-[1.125] sm:text-[0.5rem] text-[#4F4B4B] p-3 border-solid border-b-[1px] border-[#EEF0F2]">J@gmail.com</td>
                            <td className="text-[1.125] sm:text-[0.5rem] text-[#4F4B4B] p-3 border-solid border-b-[1px] border-[#EEF0F2]">Jomar</td>
                            <td className="text-[1.125] sm:text-[0.5rem] text-[#4F4B4B] p-3 border-solid border-b-[1px] border-[#EEF0F2]">09654789654</td>
                            <td className="text-[1.125] sm:text-[0.5rem] text-[#4F4B4B] p-3 border-solid border-b-[1px] border-[#EEF0F2]">July 4 2022</td>
                            <td className="flex justify-center gap-5 text-[1.125] sm:text-[0.5rem] text-[#4F4B4B] p-3 border-solid border-b-[1px] border-[#EEF0F2]"><TiEdit size={28} fill='#0500FF'/><FaTrashAlt size={25} fill='#F13B1F'/></td>
                        </tr>
                        <tr>
                            <td className="text-[1.125] sm:text-[0.5rem] text-[#4F4B4B] p-3 border-solid border-b-[1px] border-[#EEF0F2]">J@gmail.com</td>
                            <td className="text-[1.125] sm:text-[0.5rem] text-[#4F4B4B] p-3 border-solid border-b-[1px] border-[#EEF0F2]">Jomar</td>
                            <td className="text-[1.125] sm:text-[0.5rem] text-[#4F4B4B] p-3 border-solid border-b-[1px] border-[#EEF0F2]">09654789654</td>
                            <td className="text-[1.125] sm:text-[0.5rem] text-[#4F4B4B] p-3 border-solid border-b-[1px] border-[#EEF0F2]">July 4 2022</td>
                            <td className="flex justify-center gap-5 text-[1.125] sm:text-[0.5rem] text-[#4F4B4B] p-3 border-solid border-b-[1px] border-[#EEF0F2]"><TiEdit size={28} fill='#0500FF'/><FaTrashAlt size={25} fill='#F13B1F'/></td>
                        </tr>
                        <tr>
                            <td className="text-[1.125] sm:text-[0.5rem] text-[#4F4B4B] p-3 border-solid border-b-[1px] border-[#EEF0F2]">J@gmail.com</td>
                            <td className="text-[1.125] sm:text-[0.5rem] text-[#4F4B4B] p-3 border-solid border-b-[1px] border-[#EEF0F2]">Jomar</td>
                            <td className="text-[1.125] sm:text-[0.5rem] text-[#4F4B4B] p-3 border-solid border-b-[1px] border-[#EEF0F2]">09654789654</td>
                            <td className="text-[1.125] sm:text-[0.5rem] text-[#4F4B4B] p-3 border-solid border-b-[1px] border-[#EEF0F2]">July 4 2022</td>
                            <td className="flex justify-center gap-5 text-[1.125] sm:text-[0.5rem] text-[#4F4B4B] p-3 border-solid border-b-[1px] border-[#EEF0F2]"><TiEdit size={28} fill='#0500FF'/><FaTrashAlt size={25} fill='#F13B1F'/></td>
                        </tr>
                        <tr>
                            <td className="text-[1.125] sm:text-[0.5rem] text-[#4F4B4B] p-3 border-solid border-b-[1px] border-[#EEF0F2]">J@gmail.com</td>
                            <td className="text-[1.125] sm:text-[0.5rem] text-[#4F4B4B] p-3 border-solid border-b-[1px] border-[#EEF0F2]">Jomar</td>
                            <td className="text-[1.125] sm:text-[0.5rem] text-[#4F4B4B] p-3 border-solid border-b-[1px] border-[#EEF0F2]">09654789654</td>
                            <td className="text-[1.125] sm:text-[0.5rem] text-[#4F4B4B] p-3 border-solid border-b-[1px] border-[#EEF0F2]">July 4 2022</td>
                            <td className="flex justify-center gap-5 text-[1.125] sm:text-[0.5rem] text-[#4F4B4B] p-3 border-solid border-b-[1px] border-[#EEF0F2]"><TiEdit size={28} fill='#0500FF'/><FaTrashAlt size={25} fill='#F13B1F'/></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Prev / Next */}
            <div className="flex w-full justify-between mt-[50px]">
                <div className="flex items-center justify-center border-solid border-[0.5px] border-[#000000] bg-[#FFFFFF] shadow-[0px_4px_4px_rgba(0,0,0,0.21)] rounded-[9px]">
                    <p className="font-semibold text-[1.375rem] p-2">+ Add New Admin</p>
                </div>
                <div className="flex">
                    <button className="flex items-center justify-center text-[1rem] h-[42px] px-4 bg-[#C3C6C9] rounded-[4px]">Prev</button>
                    <p className="flex items-center justify-center text-[1rem] px-3 h-[42px] py-1 bg-[#FFFFFF]">1</p>
                    <button className="flex items-center justify-center text-[1rem] h-[42px] px-4 bg-[#C3C6C9] rounded-[4px]">Next</button>
                </div>
            </div>
        </div>
    )
}

export default Dashboard