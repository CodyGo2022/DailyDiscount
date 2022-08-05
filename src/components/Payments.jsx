import React from 'react'
import {Link} from 'react-router-dom';
import {FiSearch} from 'react-icons/fi'
import {FaEye} from 'react-icons/fa'
import {TbArrowsRightLeft} from 'react-icons/tb'



const Dashboard = () => {
    return (
        <div className="flex flex-col w-[80%] 3xl:w-[90%] 2xl:w-[95%] lg:items-center m-auto">

            {/* Title */}
            <div className=" flex lg:w-full sm:flex-wrap lg:justify-center mt-[80px] items-center gap-5">
                <TbArrowsRightLeft size={30} color='#7F8DA1' /> 
                <h1 className="font-semibold sm:text-[1.3rem] text-[1.75rem]"><span className="text-[#7F8DA1]">Transactions / </span> Payments</h1>
            </div>

            {/* Search */}
            <div className="flex w-full lg:justify-center justify-end mt-[55px]">
                <div className="relative flex h-[38px]">
                    <input className="relative w-[full] text-[0.975rem] p-3" type="text" placeholder="Search..." />
                    <button className="flex h-full items-center absolute right-0 p-3">
                        <FiSearch size={20}/>
                    </button>
                </div>
            </div>

            {/* Show / Results */}
            <div className="flex lg:w-full lg:flex-col lg:items-center lg:gap-2 justify-between mt-[12px]">
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
                            <td className="relative font-semibold lg:text-[1.2rem] text-[1.563rem] sm:text-[0.5rem] text-[#302F2F] p-3 md:p-1 border-solid border-[1px] border-[#000000] arrow-down ard">Email</td>
                            <td className="relative font-semibold lg:text-[1.2rem] text-[1.563rem] sm:text-[0.5rem] text-[#302F2F] p-3 md:p-1 border-solid border-[1px] border-[#000000] arrow-down ard">Transactoin No.</td>
                            <td className="relative font-semibold lg:text-[1.2rem] text-[1.563rem] sm:text-[0.5rem] text-[#302F2F] p-3 md:p-1 border-solid border-[1px] border-[#000000] arrow-down ard">Skin Name</td>
                            <td className="relative font-semibold lg:text-[1.2rem] text-[1.563rem] sm:text-[0.5rem] text-[#302F2F] p-3 md:p-1 border-solid border-[1px] border-[#000000] arrow-down ard">Amount</td>
                            <td className="relative font-semibold lg:text-[1.2rem] text-[1.563rem] sm:text-[0.5rem] text-[#302F2F] p-3 md:p-1 border-solid border-[1px] border-[#000000] arrow-down ard">Status</td>
                            <th className="font-semibold lg:text-[1.2rem] text-[1.563rem] sm:text-[0.5rem] text-[#302F2F] p-3 md:p-1 border-solid border-[1px] border-[#000000]">Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-[1.125] sm:text-[0.5rem] text-[#4F4B4B] p-3 md:p-1 border-solid border-b-[1px] border-[#EEF0F2]">J@gmail.com</td>
                            <td className="text-[1.125] sm:text-[0.5rem] text-[#4F4B4B] p-3 md:p-1 border-solid border-b-[1px] border-[#EEF0F2]">#78451123695</td>
                            <td className="text-[1.125] sm:text-[0.5rem] text-[#4F4B4B] p-3 md:p-1 border-solid border-b-[1px] border-[#EEF0F2]">YSS - Fleet Warden</td>
                            <td className="text-[1.125] sm:text-[0.5rem] text-[#4F4B4B] p-3 md:p-1 border-solid border-b-[1px] border-[#EEF0F2]">500</td>
                            <td className="text-[1.125] sm:text-[0.5rem] text-[#4F4B4B] p-3 md:p-1 border-solid border-b-[1px] border-[#EEF0F2]">
                                <p className="flex items-center justify-center rounded-[8px] py-1 text-[#FFFFFF] bg-[#2DD55C]">Complete</p>
                            </td>
                            <td className="flex items-center justify-center gap-5 text-[1.125] sm:text-[0.5rem] text-[#4F4B4B] p-3 md:p-1 border-solid border-b-[1px] border-[#EEF0F2]">
                                <Link to="PaymentDetails"><FaEye size={25} className="item" fill='#09CCF6'/></Link>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-[1.125] sm:text-[0.5rem] text-[#4F4B4B] p-3 md:p-1 border-solid border-b-[1px] border-[#EEF0F2]">J@gmail.com</td>
                            <td className="text-[1.125] sm:text-[0.5rem] text-[#4F4B4B] p-3 md:p-1 border-solid border-b-[1px] border-[#EEF0F2]">#78451123695</td>
                            <td className="text-[1.125] sm:text-[0.5rem] text-[#4F4B4B] p-3 md:p-1 border-solid border-b-[1px] border-[#EEF0F2]">YSS - Fleet Warden</td>
                            <td className="text-[1.125] sm:text-[0.5rem] text-[#4F4B4B] p-3 md:p-1 border-solid border-b-[1px] border-[#EEF0F2]">500</td>
                            <td className="text-[1.125] sm:text-[0.5rem] text-[#4F4B4B] p-3 md:p-1 border-solid border-b-[1px] border-[#EEF0F2]">
                                <p className="flex items-center justify-center rounded-[8px] py-1 text-[#FFFFFF] bg-[rgb(247,49,49)]">Cancel</p>
                            </td>
                            <td className="flex justify-center gap-5 text-[1.125] sm:text-[0.5rem] text-[#4F4B4B] p-3 md:p-1 border-solid border-b-[1px] border-[#EEF0F2]"><FaEye size={25} className="item" fill='#09CCF6'/></td>
                        </tr>
                        <tr>
                            <td className="text-[1.125] sm:text-[0.5rem] text-[#4F4B4B] p-3 md:p-1 border-solid border-b-[1px] border-[#EEF0F2]">J@gmail.com</td>
                            <td className="text-[1.125] sm:text-[0.5rem] text-[#4F4B4B] p-3 md:p-1 border-solid border-b-[1px] border-[#EEF0F2]">#78451123695</td>
                            <td className="text-[1.125] sm:text-[0.5rem] text-[#4F4B4B] p-3 md:p-1 border-solid border-b-[1px] border-[#EEF0F2]">YSS - Fleet Warden</td>
                            <td className="text-[1.125] sm:text-[0.5rem] text-[#4F4B4B] p-3 md:p-1 border-solid border-b-[1px] border-[#EEF0F2]">500</td>
                            <td className="text-[1.125] sm:text-[0.5rem] text-[#4F4B4B] p-3 md:p-1 border-solid border-b-[1px] border-[#EEF0F2]">
                                <p className="flex items-center justify-center rounded-[8px] py-1 text-[#FFFFFF] bg-[rgb(45,213,92)]">Complete</p>
                            </td>
                            <td className="flex justify-center gap-5 text-[1.125] sm:text-[0.5rem] text-[#4F4B4B] p-3 md:p-1 border-solid border-b-[1px] border-[#EEF0F2]"><FaEye size={25} className="item" fill='#09CCF6'/></td>
                        </tr>
                        <tr>
                            <td className="text-[1.125] sm:text-[0.5rem] text-[#4F4B4B] p-3 md:p-1 border-solid border-b-[1px] border-[#EEF0F2]">J@gmail.com</td>
                            <td className="text-[1.125] sm:text-[0.5rem] text-[#4F4B4B] p-3 md:p-1 border-solid border-b-[1px] border-[#EEF0F2]">#78451123695</td>
                            <td className="text-[1.125] sm:text-[0.5rem] text-[#4F4B4B] p-3 md:p-1 border-solid border-b-[1px] border-[#EEF0F2]">YSS - Fleet Warden</td>
                            <td className="text-[1.125] sm:text-[0.5rem] text-[#4F4B4B] p-3 md:p-1 border-solid border-b-[1px] border-[#EEF0F2]">500</td>
                            <td className="text-[1.125] sm:text-[0.5rem] text-[#4F4B4B] p-3 md:p-1 border-solid border-b-[1px] border-[#EEF0F2]">
                                <p className="flex items-center justify-center rounded-[8px] py-1 text-[#FFFFFF] bg-[rgb(45,213,92)]">Complete</p>
                            </td>
                            <td className="flex justify-center gap-5 text-[1.125] sm:text-[0.5rem] text-[#4F4B4B] p-3 md:p-1 border-solid border-b-[1px] border-[#EEF0F2]"><FaEye size={25} className="item" fill='#09CCF6'/></td>
                        </tr>
                        <tr>
                            <td className="text-[1.125] sm:text-[0.5rem] text-[#4F4B4B] p-3 md:p-1 border-solid border-b-[1px] border-[#EEF0F2]">J@gmail.com</td>
                            <td className="text-[1.125] sm:text-[0.5rem] text-[#4F4B4B] p-3 md:p-1 border-solid border-b-[1px] border-[#EEF0F2]">#78451123695</td>
                            <td className="text-[1.125] sm:text-[0.5rem] text-[#4F4B4B] p-3 md:p-1 border-solid border-b-[1px] border-[#EEF0F2]">YSS - Fleet Warden</td>
                            <td className="text-[1.125] sm:text-[0.5rem] text-[#4F4B4B] p-3 md:p-1 border-solid border-b-[1px] border-[#EEF0F2]">500</td>
                            <td className="text-[1.125] sm:text-[0.5rem] text-[#4F4B4B] p-3 md:p-1 border-solid border-b-[1px] border-[#f2eeee]">
                                <p className="flex items-center justify-center rounded-[8px] py-1 text-[#FFFFFF] bg-[rgb(247,49,49)]">Cancel</p>
                            </td>
                            <td className="flex justify-center gap-5 text-[1.125] sm:text-[0.5rem] text-[#4F4B4B] p-3 md:p-1 border-solid border-b-[1px] border-[#EEF0F2]"><FaEye size={25} className="item" fill='#09CCF6'/></td>
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