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
import MasterLegacy from './components/assets/MasterLegacy.jpg';
import ContemporaryArts from './components/assets/Contemporary Indian Arts.jpg';
import HairloomCollectibles from './components/assets/Hairloom Collectibles.jpg';
import './App.css'
function App() {
  return (
    <Router basename='MuzeoLux'>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/' element={
            <>
              <div className="App-content">
                <div className='banner'>
                </div>
                <section className="auctions-container">
                  <h2 className="auction-heading">Auctions On The Way</h2>
                  <div className="auction-content">
                    <div className="auction-description">
                      <p style={{textAlign:'justify'}}>
                        Over the years, we have curated a wide range of online auctions in India, covering a diverse array of categories.
                        Our portfolio boasts an impressive collection of Modern Indian Art from famous painters, exquisite vintage jewellery,
                        fine silverware, rare timepieces, luxurious textiles, coveted celebrity memorabilia, rare books, numismatic treasures,
                        philatelic gems, and even vintage cars. Take a look at the offering’s in our upcoming online auctions.
                      </p>
                      <button className="auction-button" style={{width:'200px', height: '50px'}}>ALL UPCOMING AUCTIONS</button>
                    </div>

                    <div className="auction-cards">
                      <div className="auction-card">
                        <img src={MasterLegacy} alt="Masters Legacy" />
                        <h4>Masters Legacy</h4>
                        <p>April 23 – 24, 2025</p>
                      </div>

                      <div className="auction-card">
                        <img src={ContemporaryArts} alt="Contemporary Indian Art" />
                        <h4>Contemporary Indian Art - May 25</h4>
                        <p>Yet to be Announced</p>
                      </div>

                      <div className="auction-card">
                        <img src={HairloomCollectibles} alt="Heirloom Collectibles" />
                        <h4>Heirloom Collectibles</h4>
                        <p>Yet to be Announced</p>
                      </div>
                    </div>
                  </div>
                </section>
               
              </div>
            </>
          }>

          </Route>
          <Route path="/auctions" element={<Auction />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/departments" element={<Department />} />
          <Route path="/services" element={<Services />} />
          <Route path="/reach-us" element={<ReachUs />} />
          <Route path='/Register' element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </Router>


  );
}

export default App;
