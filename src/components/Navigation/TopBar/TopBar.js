import React from 'react';
import './TopBar.css';

import Search from '../../UI/Search/Search';

import * as dims from "../../../utility/dimensions";

const TopBar = () => {
    return (
      <div
        className="top-bar-container"
        style={{
          paddingLeft: dims.offSetButtonWidth,
          paddingRight: dims.offSetButtonWidth,
          width: dims.featureWidth
        }}
      >
        <span
          className="header"
          style={{
            width: dims.column60Width
          }}
        >
          GETFLIX
        </span>
        <div
          className="search"
          style={{
            width: dims.column40Width
          }}
        >
          <Search />
        </div>
      </div>
    );
}

export default TopBar;
