import React, { useState } from 'react';
import './Auction.css';

function Auction() {
    const [activeTab, setActiveTab] = useState('Live');

    const renderContent = () => {
        switch (activeTab) {
            case 'Live':
                return (
                    <div className='Live-Auction'>
                        <p>
                            No Live auction running currently. Please follow our upcoming auction calendar for details of the next auction.
                        </p>
                    </div>
                );
            case 'Upcoming':
                return (
                    <div className='Upcoming-Auction'>
                        <p>Upcoming auction events will be listed here. Stay tuned!</p>
                    </div>
                );
            case 'Auction Results':
                return (
                    <div className='Auction-Results'>
                        <p>Past auction results will be shown here.</p>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className='Auction-section'>
            <h2 style={{textAlign:"center"}}>Auction</h2>
            <div className='auction-navbar'>
                <h3 onClick={() => setActiveTab('Live')} className={activeTab === 'Live' ? 'active' : ''}>Live</h3>
                <h3 onClick={() => setActiveTab('Upcoming')} className={activeTab === 'Upcoming' ? 'active' : ''}>Upcoming</h3>
                <h3 onClick={() => setActiveTab('Auction Results')} className={activeTab === 'Auction Results' ? 'active' : ''}>Auction Results</h3>
            </div>
            {renderContent()}
        </div>
    );
}

export default Auction;
