import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/header/navbar';
import Footer from './components/Footer/footerr';
import Buy from './components/BuyCollections/buy';
import Sell from './components/SellCollection/sell';
import Department from './components/Department/depmnt';
import Services from './components/Services/serviceProvided';
import ReachUs from './components/ReachUs/reachus';
import Register from './components/Register/signin';
import Auction from './components/auction/AuctionDept';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Muzeolux/auctions" element={<Auction />} />
        <Route path="/Muzeolux/buy" element={<Buy />} />
        <Route path="/Muzeolux/sell" element={<Sell />} />
        <Route path="/Muzeolux/departments" element={<Department />} />
        <Route path="/Muzeolux/services" element={<Services />} />
        <Route path="/Muzeolux/reach-us" element={<ReachUs />} />
        <Route path='/Muzeolux/Register' element={<Register />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
