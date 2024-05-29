import Head from 'next/head'
import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const contract = () => {
  return (
    <div>
      <Head>
        <title>Contracts</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossOrigin="anonymous" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossOrigin="anonymous" async></script>
      </Head>
      <Navbar />
      <h1 style={{ textAlign: 'center' }}>CONTRACTS</h1>
      <div style={{ padding: '20px 10%', textAlign: 'justify' }}>
        <div className='contract'>
          <h3>		Contract for the Year 2018-19 </h3>
          International Food Policy Research Institute (IFPRI) acting on behalf of the donors of the Harvest Plus Program entered into a contract with Bharatiya Lok Vikas Evam Shodh Sansthan (BLVESS) for the year 2018-19.
          Harvest Plus agrees to procure 50,000 Kg of good quality, processed, and cleaned zinc wheat seed varieties BHU-25 (35,000 kg) & BHU-31 (15,000 Kg) in Bihar.
        </div>
        <div className='contract'>
          <h3>	Contract for Bihar for the Year 2019-20</h3>
          International Food Policy Research Institute (IFPRI) acting on behalf of the donors of the Harvest Plus Program entered into a contract with Bharatiya Lok Vikas Evam Shodh Sansthan (BLVESS) for the year 2019-20 for Bihar.
          Harvest Plus agrees to procure 110,000 Kg of good quality, processed, and cleaned zinc wheat seed BHU-25 (30,000 Kg) & BHU-31 (80,000 Kg) in 100 Acres from district Kaimur (Bhabhua), Bihar.
        </div>
        <div className='contract'>
          <h3>Contract for Uttar Pradesh for the Year 2019-20</h3>
          International Food Policy Research Institute (IFPRI) acting on behalf of the donors of the Harvest Plus Program entered into a contract with Bharatiya Lok Vikas Evam Shodh Sansthan (BLVESS) for the year 2019-20 for Uttar Pradesh.
          Harvest Plus agrees to procure 50,000 Kg of good quality, processed, and cleaned zinc wheat seed BHU-31 variety on 40 Acres from Uttar Pradesh.
        </div>
        <div className='contract'>
          <h3>Contract for Farmers Meet for the Year 2019-20</h3>
          International Food Policy Research Institute (IFPRI) acting on behalf of the donors of the Harvest Plus program entered into a contract with Bharatiya Lok Vikas Evam Shodh Sansthan (BLVESS) for the year 2019-20.
          The details of the contract are mentioned below:
          Farmers Meeting – 150 Farmers (each meeting)
          Sr. No.	Location	Timeline - Tentative
          1	Varanasi (Dist. Gazipur)	14th March 2020
          2	Sonbhadra	28th March 2020

          The contract could not materialize due to Lockdown conditions in India during Covid – 19 outbreaks.</div>
        <div className='contract'>
          <h3>Procurement Of Grains</h3>
          As per the contract with HarvestPlus in 2018-19, 550 Quintal was procured constituting ---
          o	320 Quintal of BHU-25
          o	230 Quintal of BHU-31
          while As per the contract Harvest Plus procured in 2019-2020
          I.	110,000 Kg of good quality, processed, and cleaned zinc wheat seed varieties of BHU-25 (30,000 Kg) and BHU-31 (80,000 Kg) in 100 Acre from district Kaimur, Bhabhua, Bihar and
          II.	50,000 Kg of good quality, processed, and cleaned zinc wheat seed BHU-31 variety on 40 Acre from Uttar Pradesh.
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default contract
