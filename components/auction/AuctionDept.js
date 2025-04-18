import React from 'react';
import './Auction.css';
function auction() {
    return (
        <div className='Auction-section'>
            <div className='auction-navbar'>
                <h3>Live</h3>
                <h3>Upcoming</h3>
                <h3>Auction Results</h3>
            </div>
            <div>
                <p>No Live auction running currently. Please follow our upcoming auction calendar for details of the next auction.</p>
            </div>

        </div>
    );
}
export default auction;