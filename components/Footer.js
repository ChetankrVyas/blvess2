import Link from 'next/link'
import React from 'react'
import { FaLinkedin, FaInstagram, FaFacebook, } from "react-icons/fa"

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='social' style={{marginBottom:'20px'}}>
                <a href=''><FaInstagram className="social-icons ins"></FaInstagram></a>
                <a href=''><FaFacebook className="social-icons fac"></FaFacebook></a>
                <a href=''><FaLinkedin className="social-icons lin"></FaLinkedin></a>
            </div>
            <div className='links'>
                <Link href='/' className='link'>Home</Link>
                <Link href='/partner' className='link'>Partners</Link>
                <Link href='/field' className='link'>Field Visit</Link>
                <Link href='/contract' className='link'>Contracts</Link>
            </div>
            <div style={{background:'rgb(181, 176, 176)',height:'2px',margin:'3% 10%'}}></div>
            <p style={{margin:'auto',textAlign:'justify',padding:'0% 10%'}}>To build a prosperous and sustainable agriculture sector, through the participation and capacity building of farmers, thereby enabling them to enhance productivity and cost-effectiveness and utilize sustainable resources by increasing the quality and quantity of crop production   <br/>@2023BLVESS</p>
        </footer>
    )
}

export default Footer