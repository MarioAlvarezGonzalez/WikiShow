//Como en el header llamamos a todos los recursos de imagenes y archivos
import React from 'react';
import { Link } from 'react-router-dom';


import background from '../../assets/footer-background.jpg';
import logo from '../../assets/Logo.JPG';
import './footer.scss';

//No hay mucho que entender es un html con añadidos de Link
const Footer = () => {
    return (
        <div className="footer" style={{ backgroundImage: `url(${background})` }}>
            <div className="footer__content container">
                <div className="footer__content__logo">
                    <div className="logo">
                        <img src={logo} alt="" />
                        <Link to="/">WikiShow</Link>
                    </div>
                </div>
                <div className="footer__content__menus">
                    <div className="footer__content__menu">
                        <Link to="/"><h3>THE BASICS</h3></Link>
                        <Link to="/">About TMDB</Link>
                        <Link to="/">Contact</Link>
                        <Link to="/">Help forums</Link>
                        <Link to="/">API</Link>
                        <Link to="/">System status</Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/"><h3>PARTICIPATES</h3></Link>
                        <Link to="/">Contribution Guide</Link>
                        <Link to="/">Add new movie</Link>
                        <Link to="/">Add new tv show</Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/"><h3>COMMUNITY</h3></Link>
                        <Link to="/">Guidelines</Link>
                        <Link to="/">Discussions</Link>
                        <Link to="/">Leaderboard</Link>
                        <Link to="/">Twitter</Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/"><h3>LEGAL</h3></Link>
                        <Link to="/">Terms of use</Link>
                        <Link to="/">API Terms of Use</Link>
                        <Link to="/">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
