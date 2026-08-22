import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import EventDetail from './pages/EventDetail';
import Login from './pages/Login';
import Register from './pages/Register';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';
import PaymentSuccess from './pages/PaymentSuccess';
import PaymentFailed from './pages/PaymentFailed';

import About from './pages/About'
import Gallery from './pages/Gallery';
import Contactus from './pages/Contactus';
import Terms from './pages/Terms'

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-gray-50 flex flex-col">
                <Navbar />
                <main className=" flex grow container mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <Routes>
                        <Route path="/about" element={<About />} />
                        <Route path='/Contactus' element={<Contactus/>} />
                        <Route path="/" element={<Home />} />
                        <Route path="/events/:id" element={<EventDetail />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/dashboard" element={<UserDashboard />} />
                        <Route path="/admin" element={<AdminDashboard />} />
                        <Route path="/payment-success" element={<PaymentSuccess />} />
                        <Route path="/payment-failed" element={<PaymentFailed />} />
                        <Route path="*" element={<h1 className="text-3xl font-bold text-center mt-20">404 - Page Not Found</h1>} />
                        <Route path="/gallery" element={<Gallery/>}/>
                        <Route path='/terms' element={<Terms/>} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;


