import React from 'react';

import './page-header.scss';

import bg from '../../assets/footer-background.jpg';

const PageHeader = () => {
    return (
        <div className="page-header" style={{backgroundImage: `url(${bg})`}}/>
    );
}


export default PageHeader;
