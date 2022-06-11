import React from "react";
import youtube from './assets/youtube-fill.png';
import twitter from './assets/twitter-fill.png';
import instagram from './assets/instagram-fill.png';
import spotify from './assets/spotify-fill.png';
import './bts.css';

const Footer = () => {
    return (
        <div>
            <div className="div-footer">
                <div className="footer-space">
                    <a target="_blank" href={"https://www.youtube.com/c/BANGTANTV"}>
                        <img src={youtube} alt="yt" />
                    </a>
                </div>

                <div className="footer-space">
                    <a target="_blank" href={"https://twitter.com/bts_twt"}>
                        <img src={twitter} alt="tt" />
                    </a>
                </div>

                <div className="footer-space">
                    <a target="_blank" href={"https://www.instagram.com/bts.bighitofficial/"}>
                        <img src={instagram} alt="insta" />
                    </a>
                </div>

                <div className="footer-space">
                    <a target="_blank" href={"https://open.spotify.com/artist/3Nrfpe0tUJi4K4DXYWgMUX?si=giXpshjiT8GCXN8JudpsLg"}>
                        <img src={spotify} alt="spotify" />
                    </a>
                </div>

            </div>

            <div>
                <h5 className="copyright">
                    {'Copyright © '}
                    Roksana Rachel
                    {' '}
                    {new Date().getFullYear()}
                </h5>
            </div>

        </div>
    );
}

export default Footer;