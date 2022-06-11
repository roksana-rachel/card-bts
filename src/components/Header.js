import React from "react";
import './bts.css';
import group from './assets/header.png';
import groupName from './assets/name2.png';

const Header = () => {
    return (
        <div className="parent-header">
            <div>
                <img src={group} alt="bts" className="header-img" />
            </div>
            <div className="header-gradient">
                <img src={groupName} alt="groupName" className="header-name" />
            </div>
        </div>
    );
}

export default Header;