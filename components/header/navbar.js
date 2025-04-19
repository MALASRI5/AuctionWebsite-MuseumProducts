import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import './navbar.css';
import Logo from './navlogo.png';
import LoginModal from './loginModal';
import Register from '../Register/signin';

function Navbar() {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div className="App">
      <>
        {showLogin && (
          <LoginModal
            onClose={() => setShowLogin(false)}
            onOpenRegister={() => {
              setShowLogin(false);
              setShowRegister(true);
            }}
          />
        )}
        {showRegister && <Register onClose={() => setShowRegister(false)} />}
      </>

      <nav>
        <div><img src={Logo} alt='Logo' className='logo' width={200} /></div>
        <div className='nav-content'>
          <ul>
            <li onClick={() => navigate('auctions')} style={{ cursor: 'pointer' }}>AUCTIONS+</li>
            <li onClick={() => navigate('buy')} style={{ cursor: 'pointer' }}>BUY</li>
            <li onClick={() => navigate('sell')} style={{ cursor: 'pointer' }}>SELL</li>
            <li onClick={() => navigate('departments')} style={{ cursor: 'pointer' }}>DEPARTMENTS</li>
            <li onClick={() => navigate('services')} style={{ cursor: 'pointer' }}>SERVICES+</li>
            <li onClick={() => navigate('reach-us')} style={{ cursor: 'pointer' }}>REACH US</li>
          </ul>
        </div>
        <div>
          <button onClick={() => setShowLogin(true)}>Login / Register</button>
        </div>
        <p><FontAwesomeIcon icon={faSearch} className="icon" /></p>
      </nav>
    </div>
  );
}
export default Navbar;
