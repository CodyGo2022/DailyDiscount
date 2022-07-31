import React from 'react'
import {BsCartCheck} from 'react-icons/bs'
import {HiOutlineUsers} from 'react-icons/hi'
import {BsFillTagsFill} from 'react-icons/bs'

const Dashboard = () => {
    return (
        <div className="flex flex-col w-[80%] 3xl:w-[90%] 2xl:w-[95%] lg:items-center m-auto">

            {/* Title */}
            <div className="mt-[80px]">
                <h1 className="font-semibold text-[1.75rem]">Dashboard</h1>
            </div>

            {/* Updates */}
            <div className="flex lg:flex-col lg:gap-3 justify-between mt-[49px] lg:mt-[30px]">
                <div className="flex items-center justify-center gap-20 w-[23.5rem] 1.5xl:w-[20.5rem] lg:w-[30.5rem] sm:w-[20.5rem] h-[6.563rem] bg-[#FFFFFF] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
                    <div>
                        <h1 className="font-semibold leading-[1.9rem] text-[1.063rem] text-[#333840]">New Pending Orders</h1>
                        <span className="font-bold leading-[2.125rem] text-[1.75rem]">+5</span>
                    </div>
                    <div className="text-[#6e54ff]">
                        <BsCartCheck size={40}/>
                    </div>
                </div>

                <div className="flex items-center justify-center gap-20 w-[23.5rem] 1.5xl:w-[20.5rem] lg:w-[30.5rem] sm:w-[20.5rem] h-[6.563rem] bg-[#FFFFFF] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
                    <div>
                        <h1 className="font-semibold leading-[1.9rem] text-[1.063rem] text-[#333840]">Registered User</h1>
                        <span className="font-bold leading-[2.125rem] text-[1.75rem]">20</span>
                    </div>
                    <div className="text-[#6e54ff]">
                        <HiOutlineUsers size={40}/>
                    </div>
                </div>

                <div className="flex items-center justify-center gap-20 w-[23.5rem] 1.5xl:w-[20.5rem] lg:w-[30.5rem] sm:w-[20.5rem] h-[6.563rem] bg-[#FFFFFF] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
                    <div>
                        <h1 className="font-semibold leading-[1.9rem] text-[1.063rem] text-[#333840]">Available Products</h1>
                        <span className="font-bold leading-[2.125rem] text-[1.75rem]">50</span>
                    </div>
                    <div className="text-[#6e54ff]">
                        <BsFillTagsFill size={40}/>
                    </div>
                </div>
            </div>

            {/* Data */}
            <div className="flex lg:flex-col lg:items-center lg:gap-2 justify-between mt-[72px] lg:mt-[50px] w-[100%]">
                <div className="w-[38.688rem] 2.5xl:w-[35rem] 1.5xl:w-[30.5rem] lg:w-[35.5rem] sm:lg:w-[20.5rem] p-[1.25rem] bg-[#FFFFFF] shadow-[0px_5px_8px_rgba(204,204,204,0.15)]">
                    <h1 className="font-semibold text-[1.125rem] mb-[47px]">Latest Transaction</h1>

                    <table className="w-[100%] table-auto">
                        <tbody>
                            <tr>
                                <td className="font-semibold text-[0.875rem] sm:text-[0.5rem] text-[#7F8DA1] p-3 border-solid border-b-[1px] border-[#EEF0F2]">#123456789</td>
                                <td className="font-semibold text-[0.875rem] sm:text-[0.5rem] text-[#7F8DA1] p-3 border-solid border-b-[1px] border-[#EEF0F2]">Yesterday</td>
                                <td className="font-semibold text-[0.875rem] sm:text-[0.5rem] text-[#7F8DA1] p-3 border-solid border-b-[1px] border-[#EEF0F2]">James</td>
                                <td className="font-semibold text-[0.875rem] sm:text-[0.5rem] text-[#7F8DA1] p-3 border-solid border-b-[1px] border-[#EEF0F2]">&#8369;153</td>
                            </tr>
                            <tr>
                                <td className="font-semibold text-[0.875rem] sm:text-[0.5rem] text-[#7F8DA1] p-3 border-solid border-b-[1px] border-[#EEF0F2]">#123456789</td>
                                <td className="font-semibold text-[0.875rem] sm:text-[0.5rem] text-[#7F8DA1] p-3 border-solid border-b-[1px] border-[#EEF0F2]">Yesterday</td>
                                <td className="font-semibold text-[0.875rem] sm:text-[0.5rem] text-[#7F8DA1] p-3 border-solid border-b-[1px] border-[#EEF0F2]">James</td>
                                <td className="font-semibold text-[0.875rem] sm:text-[0.5rem] text-[#7F8DA1] p-3 border-solid border-b-[1px] border-[#EEF0F2]">&#8369;52</td>
                            </tr>
                            <tr>
                                <td className="font-semibold text-[0.875rem] sm:text-[0.5rem] text-[#7F8DA1] p-3 border-solid border-b-[1px] border-[#EEF0F2]">#123456789</td>
                                <td className="font-semibold text-[0.875rem] sm:text-[0.5rem] text-[#7F8DA1] p-3 border-solid border-b-[1px] border-[#EEF0F2]">Yesterday</td>
                                <td className="font-semibold text-[0.875rem] sm:text-[0.5rem] text-[#7F8DA1] p-3 border-solid border-b-[1px] border-[#EEF0F2]">James</td>
                                <td className="font-semibold text-[0.875rem] sm:text-[0.5rem] text-[#7F8DA1] p-3 border-solid border-b-[1px] border-[#EEF0F2]">&#8369;52</td>
                            </tr>
                            <tr>
                                <td className="font-semibold text-[0.875rem] sm:text-[0.5rem] text-[#7F8DA1] p-3 border-solid border-b-[1px] border-[#EEF0F2]">#123456789</td>
                                <td className="font-semibold text-[0.875rem] sm:text-[0.5rem] text-[#7F8DA1] p-3 border-solid border-b-[1px] border-[#EEF0F2]">Yesterday</td>
                                <td className="font-semibold text-[0.875rem] sm:text-[0.5rem] text-[#7F8DA1] p-3 border-solid border-b-[1px] border-[#EEF0F2]">James</td>
                                <td className="font-semibold text-[0.875rem] sm:text-[0.5rem] text-[#7F8DA1] p-3 border-solid border-b-[1px] border-[#EEF0F2]">&#8369;52</td>
                            </tr>
                            <tr>
                                <td className="font-semibold text-[0.875rem] sm:text-[0.5rem] text-[#7F8DA1] p-3 border-solid border-b-[1px] border-[#EEF0F2]">#123456789</td>
                                <td className="font-semibold text-[0.875rem] sm:text-[0.5rem] text-[#7F8DA1] p-3 border-solid border-b-[1px] border-[#EEF0F2]">Yesterday</td>
                                <td className="font-semibold text-[0.875rem] sm:text-[0.5rem] text-[#7F8DA1] p-3 border-solid border-b-[1px] border-[#EEF0F2]">James</td>
                                <td className="font-semibold text-[0.875rem] sm:text-[0.5rem] text-[#7F8DA1] p-3 border-solid border-b-[1px] border-[#EEF0F2]">&#8369;52</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                

                <div className="w-[38.688rem] 2.5xl:w-[35rem] 1.5xl:w-[30.5rem] lg:w-[35.5rem] sm:lg:w-[20.5rem] p-[1.25rem] bg-[#FFFFFF] shadow-[0px_5px_8px_rgba(204,204,204,0.15)]">
                    <h1 className="font-semibold text-[1.125rem] mb-[47px]">Top Hero Skin Sold</h1>

                    <table className="w-[100%] table-auto">
                        <tbody>
                            <tr>
                                <td className="font-semibold text-[0.875rem] sm:text-[0.5rem] text-[#7F8DA1] p-3 border-solid border-b-[1px] border-[#EEF0F2]">Hayabusa</td>
                                <td className="font-semibold text-[0.875rem] sm:text-[0.5rem] text-[#7F8DA1] p-3 border-solid border-b-[1px] border-[#EEF0F2]">Special Skin</td>
                                <td className="font-semibold text-[0.875rem] sm:text-[0.5rem] text-[#7F8DA1] p-3 border-solid border-b-[1px] border-[#EEF0F2]">&#8369;689</td>
                                <td className="font-semibold text-[0.875rem] sm:text-[0.5rem] text-[#7F8DA1] p-3 border-solid border-b-[1px] border-[#EEF0F2]">20 Sold3</td>
                            </tr>
                            <tr>
                                <td className="font-semibold text-[0.875rem] sm:text-[0.5rem] text-[#7F8DA1] p-3 border-solid border-b-[1px] border-[#EEF0F2]">Hayabusa</td>
                                <td className="font-semibold text-[0.875rem] sm:text-[0.5rem] text-[#7F8DA1] p-3 border-solid border-b-[1px] border-[#EEF0F2]">Special Skin</td>
                                <td className="font-semibold text-[0.875rem] sm:text-[0.5rem] text-[#7F8DA1] p-3 border-solid border-b-[1px] border-[#EEF0F2]">&#8369;689</td>
                                <td className="font-semibold text-[0.875rem] sm:text-[0.5rem] text-[#7F8DA1] p-3 border-solid border-b-[1px] border-[#EEF0F2]">20 Sold</td>
                            </tr>
                            <tr>
                                <td className="font-semibold text-[0.875rem] sm:text-[0.5rem] text-[#7F8DA1] p-3 border-solid border-b-[1px] border-[#EEF0F2]">Hayabusa</td>
                                <td className="font-semibold text-[0.875rem] sm:text-[0.5rem] text-[#7F8DA1] p-3 border-solid border-b-[1px] border-[#EEF0F2]">Special Skin</td>
                                <td className="font-semibold text-[0.875rem] sm:text-[0.5rem] text-[#7F8DA1] p-3 border-solid border-b-[1px] border-[#EEF0F2]">&#8369;689</td>
                                <td className="font-semibold text-[0.875rem] sm:text-[0.5rem] text-[#7F8DA1] p-3 border-solid border-b-[1px] border-[#EEF0F2]">20 Sold</td>
                            </tr>
                            <tr>
                                <td className="font-semibold text-[0.875rem] sm:text-[0.5rem] text-[#7F8DA1] p-3 border-solid border-b-[1px] border-[#EEF0F2]">Hayabusa</td>
                                <td className="font-semibold text-[0.875rem] sm:text-[0.5rem] text-[#7F8DA1] p-3 border-solid border-b-[1px] border-[#EEF0F2]">Special Skin</td>
                                <td className="font-semibold text-[0.875rem] sm:text-[0.5rem] text-[#7F8DA1] p-3 border-solid border-b-[1px] border-[#EEF0F2]">&#8369;689</td>
                                <td className="font-semibold text-[0.875rem] sm:text-[0.5rem] text-[#7F8DA1] p-3 border-solid border-b-[1px] border-[#EEF0F2]">20 Sold</td>
                            </tr>
                            <tr>
                                <td className="font-semibold text-[0.875rem] sm:text-[0.5rem] text-[#7F8DA1] p-3 border-solid border-b-[1px] border-[#EEF0F2]">Hayabusa</td>
                                <td className="font-semibold text-[0.875rem] sm:text-[0.5rem] text-[#7F8DA1] p-3 border-solid border-b-[1px] border-[#EEF0F2]">Special Skin</td>
                                <td className="font-semibold text-[0.875rem] sm:text-[0.5rem] text-[#7F8DA1] p-3 border-solid border-b-[1px] border-[#EEF0F2]">&#8369;689</td>
                                <td className="font-semibold text-[0.875rem] sm:text-[0.5rem] text-[#7F8DA1] p-3 border-solid border-b-[1px] border-[#EEF0F2]">20 Sold</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Dashboard