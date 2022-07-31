import React from 'react'
import {TbArrowsRightLeft} from 'react-icons/tb'



const Dashboard = () => {
    return (
        <div className="flex flex-col w-[80%] 3xl:w-[90%] 2xl:w-[95%] lg:items-center m-auto">

            {/* Title */}
            <div className=" flex mt-[80px] items-center gap-5">
                <TbArrowsRightLeft size={30} color='#7F8DA1' /> 
                <h1 className="font-semibold text-[1.75rem]"><span className="text-[#7F8DA1]">Transactions / </span> View Transaction Payments</h1>
            </div>

            {/* content */}
            <div className="w-[full] bg-[#E5E8EC] mt-[100px] mb-[50px]">
                <div className="flex justify-between">
                    <div className="flex flex-col items-center w-[45%]">
                        <div className="w-[90%]  flex flex-col justify-end gap-2 py-10">
                            <div className="flex justify-end">
                                <label className="font-semibold text-[1.375rem] p-2">In-Game Name:</label>
                                <input type="text" placeholder="`jkcp-POGI" className="text-[1.125rem] p-2 outline-none"/>
                            </div>
                            <div className="flex justify-end">
                                <label className="font-semibold text-[1.375rem] p-2">User ID:</label>
                                <input type="text" value="896547123" className="text-[1.125rem] p-2 outline-none"/>
                            </div>
                            <div className="flex justify-end">
                                <label className="font-semibold text-[1.375rem] p-2">Server ID:</label>
                                <input type="text" value="4213" className="text-[1.125rem] p-2 outline-none"/>
                            </div>
                            <div className="flex justify-end">
                                <label className="font-semibold text-[1.375rem] p-2">Payment method:</label>
                                <input type="text" value="G-cash" className="text-[1.125rem] p-2 outline-none"/>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center  w-[50%]">
                        <div className="w-[80%] flex flex-col justify-end  gap-2 p-3">
                            <div className="flex justify-end">
                                <label className="font-semibold text-[1.375rem] p-2">Status:</label>
                                <input type="text" value="Complete" className="text-[1.125rem] p-2 outline-none"/>
                            </div>
                            <div className="flex justify-end">
                                <label className="font-semibold text-[1.375rem] p-2">Trans No.:</label>
                                <input type="text" value="9564421447" className="text-[1.125rem] p-2 outline-none"/>
                            </div>
                            <div className="flex justify-end">
                                <label className="font-semibold text-[1.375rem] p-2">Amount:</label>
                                <input type="text" readonly value="500" className="text-[1.125rem] p-2 outline-none" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="flex flex-col w-[47%] px-[50px] p-5 gap-2">
                        <h1 className="text-[1.375rem] font-semibold">Proof of Payment</h1>
                        <div className="w-full h-[450px] bg-white"></div>
                    </div>
                    <div className="flex flex-col w-[47%] px-[145px] p-5 gap-2">
                        <h1 className="text-[1.375rem] font-semibold">Image</h1>
                        <div className="w-full h-[350px] bg-white"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard