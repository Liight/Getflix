import React from 'react';
import './TopBar.css';

import Search from '../../UI/Search/Search';

const TopBar = () => {
    return (
      <div className="top-bar-container">
        <span className="header">GETFLIX</span>
        <div className="search">
          <Search />
        </div>
      </div>
    );
}

export default TopBar;
