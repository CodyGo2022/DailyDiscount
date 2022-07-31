import {useState} from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Sidebar from './components/Sidebar.jsx'
import Navbar from './components/Navbar.jsx'
import Dashboard from './components/Dashboard.jsx'
import PendingOrders from './components/PendingOrders.jsx'
import OrderList from './components/OrderList.jsx'
import AddProducts from './components/AddProducts.jsx'
import ViewProducts from './components/ViewProducts.jsx'
import ManageUsers from './components/ManageUsers.jsx'
import SubAdmin from './components/SubAdmin.jsx'
import Payments from './components/Payments.jsx'
import PaymentDetails from './components/PaymentDetails.jsx'
import Footer from './components/Footer.jsx'

const App = () => {

    const [show, setShow]  = useState(false);

    const handleClick = () => {
        setShow(prevState => !prevState)
    }

    return (
        
        <Router>
         {/* // flex components */}
        <div className="flex">
            
            {/* sidebar right side content align center */}
            {show ?
            <div className="flex flex-column justify-center bg-[#333840]">
                <Sidebar 
                    toggle={show}
                />
            </div> : 
            <div className="xl:hidden flex flex-column justify-center xl:h-0 w-[260px] bg-[#333840]">
                <Sidebar 
                    toggle={show}
                />
            </div>
            }
            {/* Navbar Main Footer right side */}
            <div className="xl:w-full w-[86.5%] h-screen">
                <div className="flex flex-column w-full h-[7%] bg-white">
                    <Navbar 
                        toggle={show}
                        handleClick={handleClick}
                    />
                </div>
                <div className="w-full min-h-screen">
                    
                        <Routes>
                            <Route path="/" element={<Dashboard />}/>
                            <Route path="/pendingorders" element={<PendingOrders />} />
                            <Route path="/OrderList" element={<OrderList />} />
                            <Route path="/AddProducts" element={<AddProducts />} />
                            <Route path="/ViewProducts" element={<ViewProducts />} />
                            <Route path="/ManageUsers" element={<ManageUsers />} />
                            <Route path="/SubAdmin" element={<SubAdmin />} />
                            <Route path="/Payments" element={<Payments />} />
                            <Route path="/Payments/PaymentDetails" element={<PaymentDetails />} />
                        </Routes>
                </div>
                <div className="flex flex-column w-full h-[8%] xl:mt-[20px]">
                    <Footer />
                </div>
            </div>
        </div>
        
        </Router>
    )
}

export default App