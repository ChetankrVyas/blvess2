import Head from 'next/head'
import React from 'react'
import Footer from '../components/Footer'
import ImDiamonds from "react-icons/im";
import Navbar from '../components/Navbar'

const mission = () => {
  return (
    <div>
      <Head>
        <title>Missions</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossOrigin="anonymous" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossOrigin="anonymous" async></script>
      </Head>
      <Navbar />
      <h1 style={{ textAlign: 'center' }}>Missions</h1>
      <div style={{ padding: '50px', textAlign: 'justify' }}>
        <h2 style={{ textAlign: 'justify' }}>Aims of Organization</h2>
        <div style={{padding:'2% 5%',textAlign:'justify'}}>
          <li className='missions'>To build a prosperous and sustainable agriculture sector through participation and capacity building of farmers that enable farmers to enhance productivity with efficient cost-effective and sustainable resource use in increasing quality and quantity of crop production.</li>
          <li className='missions'>To build a channel for linkage of buyers and producers and to increase the efficiencies and income of farmers and awareness levels towards modern agriculture practices.</li>
          <li className='missions'>To gradually shift towards more modern and sustainable methods of cultivation.</li>
          <li className='missions'>To create awareness among farmers regarding the advantages of using High zinc Biofortified seeds over normal seeds.</li>
          <li className='missions'>To make the populace of the area aware of issues of health and sanitation for creating a clean and healthy environment among the rural mass.</li>
          <li className='missions'>To spread awareness among the farmers regarding various government schemes aimed to uplift rural and economically backward citizens, and to advise and assist them to avail of such schemes.</li>
          <li className='missions'>To encourage farm women and farmers since the inception of the project, to participate in village-level meetings and training programs.</li>
          <li className='missions'>Tocial and economic uplift of small and marginal farmers and their families, and farm labourers.</li>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default mission
