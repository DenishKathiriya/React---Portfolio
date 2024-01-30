import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";
import { FaPinterest } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import Layouts from './Layouts';


export default function Footer() {
    return (



        <div className="container mt-4">
            <footer className='footer'>
                <p>Copyright 2024 © DevCRUD Distribution ThemeWagon</p>
                <div className="social-links ms-auto ml-sm-auto text-wright">
                    <a href="http://www.facebook.com"><FaFacebookF /></a>
                    <a href="http://www.twitter.com"><FaTwitter /></a>
                    <a href="http://www.google.com"><TiSocialGooglePlus /></a>
                    <a href="http://www.pinterest.com"><FaPinterest /></a>
                    <a href="http://www.instagram.com"><IoLogoInstagram /></a>
                    <a href="http://www.whatsapp.com"><FaWhatsapp /></a>

                </div >
            </footer >
        </div >




    )
}
