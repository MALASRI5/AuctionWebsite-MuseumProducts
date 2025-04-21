import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import MasterLegacy from '../assets/MasterLegacy.jpg';
import ContemporaryArts from '../assets/Contemporary Indian Arts.jpg';
import HairloomCollectibles from '../assets/Hairloom Collectibles.jpg';
import './Auction.css';
import lion from './assets/Imperial.jpg';
import dimensions from './assets/Dimensions.jpg';
import jewellery from './assets/HairloomCollection.jpg';
import silver from './assets/HeirloomAntiques.jpg';
import history from './assets/HistoricMasterpieces.jpg'
import classicMotors from './assets/Classics.jpg';
import IconicMaster from './assets/iconicMasters.jpg';
import BeyondBold from './assets/beyondBOld.jpg'
import CollectorsChoice from './assets/collectors_choice_2023-2.jpg'
import ImperialTimepice from './assets/ImperialTimepice.jpg';
import InTernationalIconic from './assets/International-IconicGirls.jpg';
import JewlleryMay from './assets/Jewellery_May24.jpg';
import OpulentHeritage from './assets/OpulentHeritage.jpg';
import Manifest from './assets/manifest.jpg';
import ModernOdysey from './assets/ModernOdysey.jpg';
const auctions = [
  {
    status: "Auction announced",
    image: MasterLegacy,
    title: "Masters Legacy",
    date: "April 23-24, 2025",
    buttonText: "VIEW CATALOGUE",
    tba: false,
  },
  {
    status: "TBA",
    image: ContemporaryArts,
    title: "Contemporary Indian Art - May 2025",
    date: "Yet to be Announced",
    buttonText: "SHOW INTEREST",
    tba: true,
  },
  {
    status: "TBA",
    image: HairloomCollectibles,
    title: "Heirloom Collectibles - May 2025",
    date: "Yet to be Announced",
    buttonText: "SHOW INTEREST",
    tba: true,
  },
];

const auctionResults = [
  {
    image: lion,
    title: 'Imperial Treasures',
    date: 'February 25–27, 2025',
    sale: '₹ 5,47,50,580',
  },
  {
    image: dimensions,
    title: 'Dimensions Defined',
    date: 'February 20–22, 2025',
    sale: '₹ 30,56,44,140',
  },
  {
    image: jewellery,
    title: 'Heirloom Jewellery & Timepieces',
    date: 'December 20–21, 2024',
    sale: '₹ 12,77,00,790',
  },
  {
    image: silver,
    title: 'Heirloom  Antiques & Silver',
    date: 'December 18–19, 2024',
    sale: '₹ 4,82,87,320',
  },
  {
    image: history,
    title:'Historic Masterpieces' ,
    date:'December 14–16, 2024' ,
    sale: '₹ 79,06,797' ,
  },
  {
    image: classicMotors,
    title:'Classics Of Motoring' ,
    date:'March 01 - 05, 2025' ,
    sale: '₹ 12,72,922 ' ,
  },
  {
    image:  Manifest,
    title:'Manifest' ,
    date:'November 07–09, 2024' ,
    sale: '₹ 25,26,361' ,
  },
  {
    image: IconicMaster,
    title:'Iconic Masters' ,
    date:'October 22-23, 2024' ,
    sale: '₹ 9,05,36,704' ,
  },
  {
    image: ImperialTimepice ,
    title:'The Exceptionals Timepieces ' ,
    date:'September 24-26, 2024' ,
    sale: '₹ 88,12,42,730' ,
  },
  {
    image: OpulentHeritage ,
    title:'Opulent Heritage' ,
    date:'March 10 - 12, 2025' ,
    sale: '₹  8,17,21,517' ,
  },
  {
    image: InTernationalIconic ,
    title:'International Iconic' ,
    date:'July 19-20, 2024' ,
    sale: '₹ 23,85,26,250' ,
  },
  {
    image: JewlleryMay ,
    title:'Jewellery, Silver & Timepieces' ,
    date:'June 20-21, 2024' ,
    sale: '₹ 18,36,98,481 ' ,
  },
  {
    image: BeyondBold,
    title:'Beyond Bold' ,
    date:'December 14–16, 2023' ,
    sale: '₹  10,17,00,283' ,
  },
  {
    image: ModernOdysey,
    title:'Modern Odyssey' ,
    date:'December 11-12, 2023' ,
    sale: '₹ 72,60,66,010' ,
  },
  {
    image: ImperialTimepice ,
    title:'Imperial Treasures' ,
    date:'August 12-13, 2023' ,
    sale: '₹  3,16,87,952' ,
  },
  {
    image: CollectorsChoice,
    title:'Collectors Choice' ,
    date:'March 29-30, 2023' ,
    sale: '₹ 24,09,87,493' ,
  },
  
];

function Auction() {
  const navigate = useNavigate();

  const handleViewResults = () => {
    navigate('/AuctionResults');
  };
  const [activeTab, setActiveTab] = useState('Live');

  const getResultsCount = () => {
    switch (activeTab) {
      case 'Upcoming':
        return `Showing ${auctions.length} results`;
      case 'Auction Results':
        return `Showing ${auctionResults.length} results`;
      default:
        return 'Showing 0 results';
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'Live':
        return (
          <div className='auction-message'>
            <p>
              NO LIVE AUCTION RUNNING CURRENTLY. PLEASE FOLLOW OUR UPCOMING AUCTION CALENDAR FOR DETAILS OF THE NEXT AUCTION.
            </p>
          </div>
        );
      case 'Upcoming':
        return (
          <div className="auction-gallery">
            <div className="auction-grid">
              {auctions.map((auction, index) => (
                <div className="auction-card" key={index}>
                  <h3 className="auction-status">{auction.status}</h3>
                  <div className="card">
                    <img
                      src={auction.image}
                      alt={auction.title}
                      className="card-image"
                    />
                    <div className="card-content">
                      <h4 className="card-title">{auction.title}</h4>
                      <div className="card-date">📅 {auction.date}</div>
                      <button className="card-button">{auction.buttonText}</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'Auction Results':
        return (
          <div className="auction-grided">
            {auctionResults.map((item, index) => (
              <div className="auction-carded" key={index}>
                <img src={item.image} alt={item.title} className="carded-image" />
                <div className="card-details">
                  <h4 className="card-title">{item.title}</h4>
                  <p className="card-date">
                    <i className="fa fa-calendar"></i> <strong>{item.date}</strong>
                  </p>
                  <p className="card-sale">Total Sale<br /><strong>{item.sale}</strong></p>
                  <button className="view-btn" onClick={handleViewResults}>VIEW AUCTION RESULT</button>
                </div>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="auction-container">

      <div className="auction-tabs">
        <h3 onClick={() => setActiveTab('Live')} className={activeTab === 'Live' ? 'active' : ''}>Live</h3>
        <h3 onClick={() => setActiveTab('Upcoming')} className={activeTab === 'Upcoming' ? 'active' : ''}>Upcoming</h3>
        <h3 onClick={() => setActiveTab('Auction Results')} className={activeTab === 'Auction Results' ? 'active' : ''}>Auction Results</h3>
      </div>

      <div className="auction-search">
        <input type="text" placeholder="search" />
        <button><i className="fa fa-search"></i></button>
        <div className="view-toggle">
          <i className="fa fa-th-large"></i>
          <i className="fa fa-list"></i>
        </div>
      </div>

      <div className="filter-bar">
        <button className="filter-btn active">All</button>
        <div className="results-info">{getResultsCount()}</div>
      </div>

      {renderContent()}
    </div>
  );
}

export default Auction;
