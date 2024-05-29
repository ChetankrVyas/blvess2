import React from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from 'next/image'
import F1 from '../assets/f1.jpg'
import F2 from '../assets/f2.jpg'

const field = () => {
    return (
        <div>
            <Head>
                <title>BLVESS</title>
                <link rel="icon" href="/favicon.ico" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossOrigin="anonymous" />
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossOrigin="anonymous" async></script>
            </Head>
            <Navbar />
            <h1 style={{ textAlign: 'center' }}>Field Visit</h1>
            <div style={{ padding: '20px 10%', textAlign: 'justify', margin: '30px', fontSize: '20px', fontFamily: 'serif' }}>
                Harvest Plus with the support of The Bill and Melinda Gates Foundation, U.S.A initiated the Wheat Biofortification Program. Under this program, the new wheat variety, with increased zinc and iron and improved yield, was distributed to the farmers, and the result was demonstrated in their field, with the help of the Farmers’ group and Bharatiya Lok Vikas Evam Shodh Sansthan (BLVESS).
                To assess the impact of the new wheat variety, Maria Boyle, a representative of the Bill & Melinda Gates Foundation, visited Mirzapur and Varanasi to monitor the progress of the Harvest Plus project running in collaboration with Banaras Hindu University (BHU). Maria visited different villages of the Mirzapur district and interacted with the farmers growing high zinc wheat varieties and using zinc-rich wheat for their own consumption.
                <Image src={F1} className='img-fluid' />
                At village Jagarnathpur, she interacted with 50 women farmers. These women farmers shared their experience with Biofortified wheat, especially the yield and the “Chapatti/Roti” (a thin, flat unleavened bread of India, usually of whole-wheat flour, baked in a hot, dry skillet) quality. Maria recorded the progress made by women farmers in seed production and assessed the popularity of wheat in the area.
                <Image src={F2} className='img-fluid' />
                Maria also visited Bahuti village near the South campus of BHU and interacted with each of the farmers separately, (Image 3). She also chatted with the children of the farmers’ family about Biofortified wheat varieties, especially the “Chapatti/Roti” quality. She was optimistic about the performance of the Harvest Plus project in the future, with much better technology likely to come in the future.
                <br />Prof. Ramesh Chand, Director Institute of Agriculture Sciences, BHU, Prof. V.K. Mishra, Principal Investigator Harvest Plus Project, and their team’s contribution were acknowledged by Maria Boyle.

            </div>
            <Footer />
        </div>
    )
}

export default field
