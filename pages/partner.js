import Head from 'next/head'
import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const partner = () => {
  return (
    <div>
      <Head>
        <title>Partners</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossOrigin="anonymous" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossOrigin="anonymous" async></script>
      </Head>
      <Navbar />
      <h1 style={{ textAlign: 'center' }}>Our Partners</h1>
      <div style={{ padding: '20px 10%',textAlign:'justify',fontSize:'20px',fontFamily:'sans-serif' }}>
        Bharatiya Lok Vikas Evam Shodh Sansthan (BLVESS) is associated with the following government and private organizations<br/>
        •	Banaras Hindu University (BHU)<br/>
        •	Indian Institute of Technology (IIT), BHU – Gramin Gyan Kendra (GGK) Project<br/>
        •	National Agriculture Innovation Project (NAIP – BHU)<br/>
        •	Indian Institute of Vegetable Research (IIVR), Varanasi<br/>
        •	Indian Agriculture Research Institute (ICAR Project)<br/>
        •	Health Oriented Program and Education (HOPE) Initiative, Lucknow<br/>
        •	Krishi Vigyan Kendra (KVK), BHU<br/>
        •	National Bank for Agriculture and Rural Development (NABARD)<br/>
        •	Allahabad Bank<br/>
        •	International Food Policy Research Institute (IFPRI)<br/>
        •	International Maize and Wheat Improvement Center (CIMMYT) state of Mexico, Mexico<br/>
        •	Harvest Plus is located at the International Food Policy Research Institute (IFPRI) and collaborates with multiple CGIAR (Consultative Group on International Agricultural Research) centers and partner organizations.<br/>
        Harvest Plus principal donors are the UK Government, The Bill and Melinda Gates Foundation; The U.S. Government’s Feed the Future Initiative; The European Commission; The Government of Canada and donors to A4NH (Agriculture for Nutrition and Health). The John D. and Catherine T. MacArthur Foundation also supports Harvest Plus.<br/>
      </div>
      <Footer />
    </div>
  )
}

export default partner
