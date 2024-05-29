import React from 'react'
import Head from 'next/head'
import { FaLinkedin, FaInstagram, FaFacebook, } from "react-icons/fa"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'

const about = () => {
    return (
        <div>
            <Head>
                <title>BLVESS</title>
                <link rel="icon" href="/favicon.ico" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossOrigin="anonymous" />
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossOrigin="anonymous" async></script>
            </Head>
            <Navbar />
            <h1 style={{ textAlign: 'center' }}>About</h1>
            <div style={{ padding: '20px 10%', textAlign: 'center' }}>
                <div className='about1'>
                    <h2> INTRODUCTION</h2>
                    Bharatiya Lok Vikash Evam Shodh Sansthan (BLVESS) is a non-Government, non-political, non-profit organization engaged in agriculture. It was founded by a group of like-minded individuals belonging to different sections of society in the year 1996. The head office of BLVESS is located in the Mirzapur district of Uttar Pradesh. It is based in Varanasi and Mirzapur.  The organization is operating for the past 10-15 years in and around Vindhyan/hilly regions in Mirzapur, Varanasi, Sonebhadra, and Bhabhua districts of Uttar Pradesh and Bihar.
                    BLVESS was overtaken by Dr Abhay Shanker Tiwari in 2007. It has worked for farmers’ prosperity, along with Banaras Hindu University (BHU) since 2008. In 2009 a project was sanctioned by the Institute of Agriculture Sciences, BHU by the National Agriculture Innovation Project (NAIP). BLVESS was one of the associates involved in developing 2000 farmers of 16 village clusters of the Vindhyan region of the Mirzapur district. National Planning Commission identified Mirzapur as the most disadvantaged area, known for low fertile land, smallholding, and poor farmers. The majority of women and children in this district are anaemic and suffer from zinc and iron deficiency.
                    In 2010, International Food Policy Research Institute (IFPRI) alongwith International Maize and Wheat Improvement Center (CIMMYT) collected data in wheat-producing areas. In 2012, the first trial of HarvestPlus i.e., HPVS & HPST was done at Mirzapur. In 2013 and 2014, Biofortified seeds were provided to 15-20 farmers. The effort showed a positive impact on the target farmers, as the farmer’s income increased from 1.5 to 2 times.
                </div>
                <div className='about1'>
                    <h2>COVID-19 LOCKDOWN IN INDIA</h2>
                    On the evening of 24th March 2020, the Government of India ordered a nationwide lockdown for 21 days, limiting the movement of the entire 1.38 billion (138 crores) population of India as a preventive measure against the COVID-19 pandemic in India. The lockdown was placed when the number of confirmed positive coronavirus cases in India was approximately 500. Upon its announcement, a mass movement of people across the country was described as the largest since the partition of India in 1947.
                    The lockdown restricted people from stepping out of their homes. All transport services-road, air and rail- were suspended, with exceptions for transportation of essential goods, fire, police, and emergency services. Educational institutions, industrial establishments, and hospitality services were also suspended. Services such as food shops, banks and ATMs, petrol pumps, other essentials and their manufacturing are exempted. The restrictions turned into a challenge for daily wage workers and migrant labourers who cannot continue to earn their living nor return to their hometowns, due to the closure of rail and road networks.
                    India went under four phases of lockdown extensions and entered its fifth phase on 8 June, where regions deemed safe, called “green zones,” will have more liberty in movements and business operations, whereas danger “red” zones will continue strict travel and trade restrictions. However, limited domestic air travel and railway travel with appropriate safety precautions for citizens in necessity resumed on 25 May and 1 June 2020, respectively. An “unlock” phase coincided with the 5th lockdown to restart selected businesses, educational institutions, and local public transport while maintaining distance and hygiene.
                    During the pandemic period, Bharatiya Lok Vikas Evam Shodh Sansthan (BLVESS) was involved in seed production of Biofortified wheat and provided funds to farmers on time, which turned into their lifeblood. All the farmers associated with BLVESS were provided with their sale proceeds on time and on the Maximum Selling Price (MSP).
                </div>
            </div>
            <div style={{ padding: '20px 10%',margin:'30px',fontSize:'20px',fontFamily:'serif' }}><h3>Contact Us On</h3>
                Bharatiya Lok Vikash Evam Shodh Sansthan<br/>
                Dr. Abhay Shanker Tiwari<br/>
                Varanasi – 221001, India<br/>
                Phone: +91 8299513350<br/>
                Email: blvess@gmail.com<br/>
                <div className='social1'>
                <a href=''><FaInstagram className="social-icons ins"></FaInstagram></a>
                <a href=''><FaFacebook className="social-icons fac"></FaFacebook></a>
                <a href=''><FaLinkedin className="social-icons lin"></FaLinkedin></a>
            </div>
            </div>
            <Footer />
        </div>
    )
}

export default about
