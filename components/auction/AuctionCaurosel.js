import React from 'react';
import { useNavigate } from "react-router-dom";
import './AuctionCarousel.css';
import Classics from './assets/Classics.jpg';
import Dimensions from './assets/Dimensions.jpg';
import HairloomCollection from './assets/HairloomCollection.jpg';
import HeirloomAntiques from './assets/HeirloomAntiques.jpg';
import HistoricMasterpieces from './assets/HistoricMasterpieces.jpg';
import Imperial from './assets/Imperial.jpg';
import Jewellerytimepieces from './assets/Jewellerytimepices.jpg';
import Manifest from './assets/manifest.jpg';
import OpulentHeritage from './assets/OpulentHeritage.jpg';

const auctions = [
  {
    title: "Opulent Heritage",
    date: "March 10 - 12, 2025",
    image: OpulentHeritage,
  },
  {
    title: "Vintage Cars",
    date: "March 01 - 05, 2025",
    image: Classics,
  },
  {
    title: "Jewellery Timepieces",
    date: "February 25 - 27, 2025",
    image: Jewellerytimepieces,
  },
  {
    title: "Modern Art Expo",
    date: "February 20 - 22, 2025",
    image: Manifest,
  },
  {
    title: "Imperial Treasures",
    date: "February 05 - 08, 2025",
    image: Imperial,
  },
  {
    title: "Dimensions Defined",
    date: "January 20 - 22, 2025",
    image: Dimensions,
  },
  {
    title: "Heirloom Collectibles Jewellery & Timepieces",
    date: "December 20 - 21, 2024",
    image: HairloomCollection,
  },
  {
    title: "Heirloom Collectibles Antiques & Silver",
    date: "December 18 - 19, 2024",
    image: HeirloomAntiques,
  },
  {
    title: "Historical Art",
    date: "December 10 - 12, 2024",
    image: HistoricMasterpieces,
  },
];

const AuctionList = () => {
  const navigate = useNavigate();

  const handleViewResults = () => {
    navigate('/AuctionResults');
  };

  return (
    <div className="auction-containerr">
      <h2>Most Recent Auctions</h2>
      <div className="auction-grid">
        {auctions.map((auction, index) => (
          <div className="auction-cad" key={index}>
            <img src={auction.image} alt={auction.title} />
            <h3>{auction.title}</h3>
            <p>{auction.date}</p>
            <button onClick={handleViewResults}>View Results</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AuctionList;
