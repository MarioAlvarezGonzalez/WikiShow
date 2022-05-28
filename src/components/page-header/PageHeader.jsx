import React from 'react';

import background from '../../assets/footer-background.jpg';

import './page-header.scss';

const PageHeader = () => {
    return (
        <div className="page-header" style={{backgroundImage: `url(${background})`}}/>
    );
}
export default PageHeader;
