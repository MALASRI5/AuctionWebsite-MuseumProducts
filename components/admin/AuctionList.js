import React from "react";
import MasterLegacy from '../assets/MasterLegacy.jpg';
import ContemporaryArts from '../assets/Contemporary Indian Arts.jpg';
import HairloomCollectibles from '../assets/Hairloom Collectibles.jpg';
import './AuctionList.css'; 
const AuctionList = () => {
  const auctions = [
    {
      status: "Auction announced",
      image: MasterLegacy,
      title: "Masters Legacy",
      date: "April 23-24, 2025",
      tba: false,
    },
    {
      status: "TBA",
      image: ContemporaryArts,
      title: "Contemporary Indian Art - May 2025",
      date: "Yet to be Announced",
      tba: true,
    },
    {
      status: "TBA",
      image: HairloomCollectibles,
      title: "Heirloom Collectibles - May 2025",
      date: "Yet to be Announced",
      tba: true,
    },
  ];

  return (
    <div className="admin-auction-list">
      <h2>Manage Auctions</h2>
      <table className="auction-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {auctions.map((auction, index) => (
            <tr key={index}>
              <td>
                <img src={auction.image} alt={auction.title} className="thumbnail" />
              </td>
              <td>{auction.title}</td>
              <td>{auction.date}</td>
              <td>
                <span className={`status-badge ${auction.tba ? 'tba' : 'announced'}`}>
                  {auction.status}
                </span>
              </td>
              <td className="editbtn">
                <button className="action-btn edit">Edit</button>
                <button className="action-btn delete">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AuctionList;
