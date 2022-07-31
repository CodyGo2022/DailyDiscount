import React from 'react'
import {HiOutlineUsers} from 'react-icons/hi'


const Dashboard = () => {
    return (
        <div className="flex flex-col w-[80%] 3xl:w-[90%] 2xl:w-[95%] lg:items-center m-auto">

            {/* Title */}
            <div className=" flex mt-[80px] items-center gap-5">
                <HiOutlineUsers size={30} color="#7F8DA1"/> 
                <h1 className="font-semibold text-[1.75rem]"><span className="text-[#7F8DA1]">Customers / </span> Manage Users</h1>
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
                            <td className="relative font-semibold text-[1.563rem] sm:text-[0.5rem] text-[#302F2F] p-3 border-solid border-[1px] border-[#000000] arrow-down">Products</td>
                            <td className="relative font-semibold text-[1.563rem] sm:text-[0.5rem] text-[#302F2F] p-3 border-solid border-[1px] border-[#000000] arrow-down">Phone No.</td>
                            <td className="relative font-semibold text-[1.563rem] sm:text-[0.5rem] text-[#302F2F] p-3 border-solid border-[1px] border-[#000000] arrow-down">Date</td>
                            <th className="font-semibold text-[1.563rem] sm:text-[0.5rem] text-[#302F2F] p-3 border-solid border-[1px] border-[#000000]">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-[1.125] sm:text-[0.5rem] text-[#4F4B4B] p-3 border-solid border-b-[1px] border-[#EEF0F2]">J@gmail.com</td>
                            <td className="text-[1.125] sm:text-[0.5rem] text-[#4F4B4B] p-3 border-solid border-b-[1px] border-[#EEF0F2]">YSS - Fleet Warden</td>
                            <td className="text-[1.125] sm:text-[0.5rem] text-[#4F4B4B] p-3 border-solid border-b-[1px] border-[#EEF0F2]">09654789654</td>
                            <td className="text-[1.125] sm:text-[0.5rem] text-[#4F4B4B] p-3 border-solid border-b-[1px] border-[#EEF0F2]">July 4 2022</td>
                            <td className="flex justify-center items-center p-2">
                                <select name="" id="" className="p-2 rounded-[5px] outline-none shadow-[0px_4px_4px_rgba(216,214,214,0.7)]">
                                    <option value="" disabled selected>Choose Action</option>
                                    <option value="">Delete</option>
                                    <option value="">Block User</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-[1.125] sm:text-[0.5rem] text-[#4F4B4B] p-3 border-solid border-b-[1px] border-[#EEF0F2]">J@gmail.com</td>
                            <td className="text-[1.125] sm:text-[0.5rem] text-[#4F4B4B] p-3 border-solid border-b-[1px] border-[#EEF0F2]">YSS - Fleet Warden</td>
                            <td className="text-[1.125] sm:text-[0.5rem] text-[#4F4B4B] p-3 border-solid border-b-[1px] border-[#EEF0F2]">09654789654</td>
                            <td className="text-[1.125] sm:text-[0.5rem] text-[#4F4B4B] p-3 border-solid border-b-[1px] border-[#EEF0F2]">July 4 2022</td>
                            <td className="flex justify-center items-center p-2">
                                <select name="" id="" className="p-2 rounded-[5px] outline-none shadow-[0px_4px_4px_rgba(216,214,214,0.7)]">
                                    <option value="" disabled selected>Choose Action</option>
                                    <option value="">Delete</option>
                                    <option value="">Block User</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-[1.125] sm:text-[0.5rem] text-[#4F4B4B] p-3 border-solid border-b-[1px] border-[#EEF0F2]">J@gmail.com</td>
                            <td className="text-[1.125] sm:text-[0.5rem] text-[#4F4B4B] p-3 border-solid border-b-[1px] border-[#EEF0F2]">YSS - Fleet Warden</td>
                            <td className="text-[1.125] sm:text-[0.5rem] text-[#4F4B4B] p-3 border-solid border-b-[1px] border-[#EEF0F2]">09654789654</td>
                            <td className="text-[1.125] sm:text-[0.5rem] text-[#4F4B4B] p-3 border-solid border-b-[1px] border-[#EEF0F2]">July 4 2022</td>
                            <td className="flex justify-center items-center p-2">
                                <select name="" id="" className="p-2 rounded-[5px] outline-none shadow-[0px_4px_4px_rgba(216,214,214,0.7)]">
                                    <option value="" disabled selected>Choose Action</option>
                                    <option value="">Delete</option>
                                    <option value="">Block User</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-[1.125] sm:text-[0.5rem] text-[#4F4B4B] p-3 border-solid border-b-[1px] border-[#EEF0F2]">J@gmail.com</td>
                            <td className="text-[1.125] sm:text-[0.5rem] text-[#4F4B4B] p-3 border-solid border-b-[1px] border-[#EEF0F2]">YSS - Fleet Warden</td>
                            <td className="text-[1.125] sm:text-[0.5rem] text-[#4F4B4B] p-3 border-solid border-b-[1px] border-[#EEF0F2]">09654789654</td>
                            <td className="text-[1.125] sm:text-[0.5rem] text-[#4F4B4B] p-3 border-solid border-b-[1px] border-[#EEF0F2]">July 4 2022</td>
                            <td className="flex justify-center items-center p-2">
                                <select name="" id="" className="p-2 rounded-[5px] outline-none shadow-[0px_4px_4px_rgba(216,214,214,0.7)]">
                                    <option value="" disabled selected>Choose Action</option>
                                    <option value="">Delete</option>
                                    <option value="">Block User</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-[1.125] sm:text-[0.5rem] text-[#4F4B4B] p-3 border-solid border-b-[1px] border-[#EEF0F2]">J@gmail.com</td>
                            <td className="text-[1.125] sm:text-[0.5rem] text-[#4F4B4B] p-3 border-solid border-b-[1px] border-[#EEF0F2]">YSS - Fleet Warden</td>
                            <td className="text-[1.125] sm:text-[0.5rem] text-[#4F4B4B] p-3 border-solid border-b-[1px] border-[#EEF0F2]">09654789654</td>
                            <td className="text-[1.125] sm:text-[0.5rem] text-[#4F4B4B] p-3 border-solid border-b-[1px] border-[#EEF0F2]">July 4 2022</td>
                            <td className="flex justify-center items-center p-2">
                                <select name="" id="" className="p-2 rounded-[5px] outline-none shadow-[0px_4px_4px_rgba(216,214,214,0.7)]">
                                    <option value="" disabled selected>Choose Action</option>
                                    <option value="">Delete</option>
                                    <option value="">Block User</option>
                                </select>
                            </td>
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