import React from 'react'
import {BsFillTagsFill} from 'react-icons/bs'


const Dashboard = () => {
    return (
        <div className="flex flex-col w-[80%] 3xl:w-[90%] 2xl:w-[95%] lg:items-center m-auto">

            {/* Title */}
            <div className=" flex mt-[80px] items-center gap-5">
                <BsFillTagsFill size={30} fill='#7F8DA1' /> 
                <h1 className="font-semibold text-[1.75rem]"><span className="text-[#7F8DA1]">Products / </span> Add Products</h1>
            </div>

            {/* Hero Name / Skin Name */}
            <div className="flex items-center justify-between bg-white px-[150px] py-3 mt-[110px] shadow-[0px_4px_4px_rgba(216,214,214,0.7)]">
                <div className="w-[35%]">
                    <h1 className="text-[1.375rem] font-semibold">Hero Name</h1>
                    <input type="text" placeholder="Hayabusa" className="w-[100%] border-solid border-[2px] p-2 font-semibold outline-none"/>
                </div>
                <div className="w-[35%]">
                    <h1 className="text-[1.375rem] font-semibold">Skin Name</h1>
                    <input type="text" placeholder="Sushi Master" className="w-[100%] border-solid border-[2px] p-2 font-semibold outline-none"/>
                </div>
            </div>

            {/* Image / Price / Status / Category */}
            <div className="flex justify-between mt-[36px] mb-[50px]">
                <div className="flex flex-col w-[47%] h-[500px] bg-[#FFFFFF] gap-5 p-7 shadow-[0px_4px_4px_rgba(216,214,214,0.7)]">
                    <h1 className="text-[#322E2E] text-[1.375rem] font-semibold">Image</h1>
                    <div className="w-[100%] h-[350px] bg-slate-400"></div>
                    <div className="w-[100%] flex justify-end">
                        <input type="file" className="w-[250px]"/>
                    </div>
                </div>
                <div className="w-[47%]">
                    <div className="flex gap-5 bg-[#FFFFFF] p-2 items-center justify-center shadow-[0px_4px_4px_rgba(216,214,214,0.7)]">
                        <label className="text-[#322E2E] text-[1.375rem] font-semibold">Price:</label>
                        <input type="text" placeholder="500" className="w-[70%] p-2 border-solid border-[2px] outline-none"/>
                    </div>
                    <div className="flex flex-col w-[100%] bg-white mt-[36px] p-2 items-center justify-center gap-3 shadow-[0px_4px_4px_rgba(216,214,214,0.7)]">
                        <div className="flex w-[100%] bg-white items-center justify-center gap-5">
                            <label className="text-[#322E2E] text-[1.375rem] font-semibold">Status:</label>
                            <select name="stats" id="1" className="w-[68%] p-2 border-solid border-[2px] outline-none">
                                <option value="">Available</option>
                                <option value="">Time-Limited Only</option>
                                <option value="">Comming Soon</option>
                            </select>
                        </div>
                        <div className="flex w-[100%] bg-white items-center justify-center gap-5">
                            <label className="text-[#322E2E] text-[1.375rem] font-semibold">Category:</label>
                            <select name="stats" id="1" className="w-[63%] p-2 border-solid border-[2px] outline-none">
                                <option value="">Special Skin</option>
                                <option value="">Epic Skin</option>
                                <option value="">Legend Skin</option>
                                <option value="">Normal Skin</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex justify-end w-[100%] mt-[64px]">
                        <button className="w-[10.313rem] py-2 rounded-[6px] bg-[#25E806] font-semibold text-white">Save</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dashboard