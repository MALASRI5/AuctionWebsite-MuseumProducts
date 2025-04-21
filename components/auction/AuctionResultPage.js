import React, { useState } from 'react';
import './AuctionResultPage.css';
import './Auction.css'
import rollsRoyce from './assets/rollsroyce.jpg'
import Mercedes from './assets/mercedes.jpg'

const cars = [
    {
        id: 1,
        name: 'Rolls-Royce 20-25 Limousine',
        price: '₹ 1,98,59,400',
        image: rollsRoyce,
        lot: 'LOT 1'
    },
    {
        id: 2,
        name: 'Mercedes-Benz W123',
        price: '₹ 14,13,522',
        image: Mercedes,
        lot: 'LOT 8'
    },
];

function AuctionResultsPage() {
    const [search, setSearch] = useState('');

    const filteredCars = cars.filter((car) =>
        car.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <div className="auction-tabs" style={{marginLeft:"20px",width:'1200px'}}>
                <h3 >Live</h3>
                <h3 >Upcoming</h3>
                <h3>Auction Results</h3>
            </div>

            <div className="auction-search"  style={{marginLeft:"20px",width:"1200px"}}>
                <input type="text" placeholder="search" />
                <button><i className="fa fa-search"></i></button>
                <div className="view-toggle">
                    <i className="fa fa-th-large"></i>
                    <i className="fa fa-list"></i>
                </div>
            </div>
            <div className='resultBanner'>
                
            </div>
            <div className="auction-results-page">
                <aside className="filters">
                    <div className="filters-header">
                        <h4>Filters</h4>

                    </div>

                    <div className="filter-section">
                        <strong>CURRENT PRICE</strong>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}> Low to High<input type="checkbox" /></div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>High to Low<input type="checkbox" /> </div>
                    </div>

                    <div className="filter-section">
                        <strong>BID PRICE</strong>
                        <input type="range" min="17669" max="248242" />
                        <p>₹ 14,13,522 - ₹ 1,98,59,400  </p>
                    </div>

                    <div className="filter-section">
                        <strong>CATEGORY</strong>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}> Classic and Vintage Automobiles<input type="checkbox" /></div>
                    </div>
                </aside>

                <main className="results-area">
                    <div className="results-header">
                        <div className="tabs">
                            <span className="active-tab">View Results</span>
                            <span>Auction Analysis</span>
                        </div>

                        <div className="search-currency-view">
                            <input
                                type="text"
                                placeholder="search"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />

                            <span className="view-icons">☰</span>
                        </div>
                    </div>

                    <p>Showing {filteredCars.length} result{filteredCars.length !== 1 && 's'}</p>

                    <div className="results-grid">
                        {filteredCars.map((car) => (
                            <div key={car.id} className="car-card">
                                <img src={car.image} alt={car.name} />
                                <h5>{car.name}</h5>
                                <span className="lot">{car.lot}</span>
                                <div className="price">
                                    <strong>{car.price.toLocaleString()}</strong>
                                    <div>(Inclusive 18% margin)</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
}

export default AuctionResultsPage;
