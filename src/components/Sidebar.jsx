import React from 'react'
import { Link } from "react-router-dom";
import LOGO from '../assets/LOGO.png'
import {AiFillDashboard} from 'react-icons/ai'
import {BsCartCheck} from 'react-icons/bs'
import {BsFillTagsFill} from 'react-icons/bs'
import {HiOutlineUsers} from 'react-icons/hi'
import {HiOutlineUserGroup} from 'react-icons/hi'
import {TbArrowsRightLeft} from 'react-icons/tb'



const Sidebar = ({toggle}) => {
    return (
        <div className={toggle ? "" : "w-[230px]"}>
        {   toggle ?
            <div className="fixed z-10 w-[30%] lg:w-[33%] md:w-[40%] sm:w-[80%] sm:px-4 h-full py-2 bg-[#333840]">
            {/* Content */}
            <div className="flex flex-col w-[100%]">
                {/* img LOGO */}
                <div className="flex justify-center w-[100%]">
                    <img className="w-[80%]" src={LOGO} alt="LOGO" />
                </div>

                {/* list */}
                <div className="mt-[3rem]">
                    {/* Dashboard */}
                        <div className="flex gap-2 items-center font-normal text-[#7B889B]">
                            <AiFillDashboard size={20}/> 
                            <h1 className=""><Link onClick={toggle} to ="/">Dashboard</Link></h1>
                        </div>

                    {/* Store */}
                    <div className="flex flex-col pt-[4rem] font-normal gap-2">
                        <h1 className="text-[#545D6A]">Store</h1>

                            {/* Orders */}
                            <div className="flex flex-col gap-2 text-[#7B889B]">
                                <div className="flex items-center gap-2">
                                    <BsCartCheck size={20}/> 
                                    <h1>Orders</h1>
                                </div>
                                <ul className="flex flex-col gap-2 mx-7">
                                        <li><Link onClick={toggle} to="pendingorders">Pending Orders</Link></li>
                                    
                                        <li><Link onClick={toggle} to="orderlist">Order List</Link></li>
                                    
                                </ul>
                            </div>
                            

                            {/* Products */}
                            <div className="flex flex-col gap-2 text-[#7B889B]">
                                <div className="flex items-center gap-2">
                                    <BsFillTagsFill size={20}/> 
                                    <h1>Products</h1>
                                </div>
                                <ul className="flex flex-col gap-2 mx-7">
                                    
                                        <li><Link onClick={toggle} to="AddProducts">Add Products</Link></li>
                                    
                                    
                                        <li><Link onClick={toggle} to="ViewProducts">View Products</Link></li>
                                    
                                </ul>
                            </div>

                            {/* Costumers */}
                            <div className="flex flex-col gap-2 text-[#7B889B]">
                                <div className="flex items-center gap-2">
                                    <HiOutlineUsers size={20}/> 
                                    <h1>Customers</h1>
                                </div>
                                <ul className="flex flex-col gap-2 mx-7">
                                    
                                        <li><Link onClick={toggle} to="ManageUsers">Manage Users</Link></li>
                                    
                                </ul>
                            </div>

                            {/* Administrator */}
                            <div className="flex flex-col gap-2 text-[#7B889B]">
                                <div className="flex items-center gap-2">
                                    <HiOutlineUserGroup size={20}/>
                                    <h1>Administrator</h1>
                                </div>
                                <ul className="flex flex-col gap-2 mx-7">
                                    
                                        <li><Link onClick={toggle} to="SubAdmin">Sub-Admin</Link></li>
                                    
                                </ul>
                            </div>
                    </div>

                    
                    {/* Reports */} 
                    <div className="flex flex-col pt-[4rem] font-normal gap-2">
                        <h1 className="text-[#545D6A]">Report</h1>
                    
                        <div className="flex flex-col gap-2 text-[#7B889B]">
                            <div className="flex items-center gap-2">
                                <TbArrowsRightLeft size={20}/>
                                <h1>Transactions</h1>
                            </div>
                            <ul className="flex flex-col gap-2 mx-7">
                                
                                    <li><Link onClick={toggle} to="Payments">Payments</Link></li>
                                
                            </ul>
                        </div>
                    </div>
                    

                </div>
                
                

            </div>
        </div>
            : 
            <div className="fixed left-0 w-[260px] h-full py-2 bg-[#333840]">
                {/* Content */}
                <div className="flex flex-col w-[90%] items-center">
                    {/* img LOGO */}
                    <div className="flex justify-center w-[100%]">
                        <img className="w-[80%]" src={LOGO} alt="LOGO" />
                    </div>

                    {/* list */}
                    <div className="mt-[3rem]">
                        {/* Dashboard */}
                        
                            <div className="flex gap-2 items-center font-normal text-[#7B889B]">
                                <AiFillDashboard size={20}/> 
                                <h1 className=""><Link to="/">Dashboard</Link></h1>
                            </div>
                        

                        {/* Store */}
                        <div className="flex flex-col pt-[4rem] font-normal gap-2">
                            <h1 className="text-[#545D6A]">Store</h1>

                                {/* Orders */}
                                <div className="flex flex-col gap-2 text-[#7B889B]">
                                    <div className="flex items-center gap-2">
                                        <BsCartCheck size={20}/> 
                                        <h1>Orders</h1>
                                    </div>
                                    <ul className="flex flex-col gap-2 mx-7">
                                        
                                            <li><Link to="pendingorders">Pending Orders</Link></li>
                                        
                                        
                                            <li><Link to="OrderList">Order List</Link></li>
                                        
                                    </ul>
                                </div>
                                

                                {/* Products */}
                                <div className="flex flex-col gap-2 text-[#7B889B]">
                                    <div className="flex items-center gap-2">
                                        <BsFillTagsFill size={20}/> 
                                        <h1>Products</h1>
                                    </div>
                                    <ul className="flex flex-col gap-2 mx-7">
                                        
                                            <li><Link to="AddProducts">Add Products</Link></li>
                                        
                                        
                                            <li><Link to="ViewProducts">View Products</Link></li>
                                        
                                    </ul>
                                </div>

                                {/* Costumers */}
                                <div className="flex flex-col gap-2 text-[#7B889B]">
                                    <div className="flex items-center gap-2">
                                        <HiOutlineUsers size={20}/> 
                                        <h1>Customers</h1>
                                    </div>
                                    <ul className="flex flex-col gap-2 mx-7">
                                        
                                            <li><Link to="ManageUsers">Manage Users</Link></li>
                                        
                                    </ul>
                                </div>

                                {/* Administrator */}
                                <div className="flex flex-col gap-2 text-[#7B889B]">
                                    <div className="flex items-center gap-2">
                                        <HiOutlineUserGroup size={20}/>
                                        <h1>Administrator</h1>
                                    </div>
                                    <ul className="flex flex-col gap-2 mx-7">
                                        
                                            <li><Link to="SubAdmin">Sub-Admin</Link></li>
                                        
                                    </ul>
                                </div>
                        </div>

                        
                        {/* Reports */} 
                        <div className="flex flex-col pt-[4rem] font-normal gap-2">
                            <h1 className="text-[#545D6A]">Report</h1>
                        
                            <div className="flex flex-col gap-2 text-[#7B889B]">
                                <div className="flex items-center gap-2">
                                    <TbArrowsRightLeft size={20}/>
                                    <h1>Transactions</h1>
                                </div>
                                <ul className="flex flex-col gap-2 mx-7">
                                    
                                        <li><Link to="Payments">Payments</Link></li>
                                    
                                </ul>
                            </div>
                        </div>
                        

                    </div>
                    
                    

                </div>
            </div>
            }
    </div>
    )
}

export default Sidebar