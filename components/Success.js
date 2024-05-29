import Image from 'next/image';
import React from 'react'
import { Row, Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import P1 from '../assets/p1.png'
import P2 from '../assets/p2.png'
import P3 from '../assets/p3.png'
import P4 from '../assets/p4.png'
import P5 from '../assets/p5.png'

const Success = () => {
  return (
    <div style={{ marginTop: '2%' }}>
        <h1 style={{ textAlign: 'center', margin: '30px' }}>Success Story</h1>
      <div className='container container-fluid text-center'>
        <Row className='Text-Image'>
          <Col>
            <div><h4>The leading progressive farmers during the year 2019-20 for biofortified high zinc wheat seed variety BHU-25 are:-</h4>
              <h5>I.	Shri Ramanuj Upadhyay, Area-14 Acre, Village-Upadhyay Sagar, Block-Ramgarh, District-Kaimur (Bihar).</h5>
              <h5>II.	Shri Baban Upadhyay, Area-14 Acre, village-Upadhyay Sagar, block-Ramgarh, district-Kaimur (Bihar)</h5>
              <h4 style={{ marginTop: '30px' }}>The leading progressive farmers during the year 2019-20 for biofortified high zinc wheat seed variety BHU-31 are: -</h4>
              <h5>I.	Shri Dev Mani Pande, Area-32 Acre, village-Amrupur, Block-Bhawarkol, District-Ghazipur (Uttar Pradesh)</h5>
              <h5>II.	Shri Munna Pathak, Area- 20 Acre, village- Kaithi, block-Barahmpur, district-Buxar (Bihar)</h5>
              <h5>III.	Shri Karan Singh, Area-15 Acre, village-Kanhuwa, block-Nuwaon, District- Kaimur (Bihar)</h5>
            </div>
          </Col>
          <Col>
            <div>
              <Carousel>
                <Carousel.Item interval={1000}>
                  <Image
                    className="d-block w-100 imgfluid"
                    src={P1}
                    height={500}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>Shri Dev Mani Pande</h3>
                    <p>Variety-BHU-31, Village-Amrupur, Block-Bhawarkol, District-Ghazipur (Uttar Pradesh)</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                  <Image
                    className="d-block w-100 imgfluid"
                    height={500}
                    src={P2}
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <h3>Shri Ramanuj Upadhyay</h3>
                    <p>Variety-BHU-25, Village-Upadhyay Sagar, Block-Ramgarh, District-Kaimur (Bihar)</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    className="d-block w-100 imgfluid"
                    src={P3}
                    height={500}
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <h3>Shri Baban Upadhyay</h3>
                    <p> Variety-BHU-25, Village-Upadhyay Sagar, Block-Ramgarh, District-Kaimur (Bihar)</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    className="d-block w-100 imgfluid"
                    src={P4}
                    height={500}
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <h3>Shri Karan Singh</h3>
                    <p>Variety-BHU-31, Village-Kanhuwa, Block-Nuwaon, District-Kaimur, (Bihar)</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    className="d-block w-100 imgfluid"
                    src={P5}
                    height={500}
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <h3>Shri Munna Pathak</h3>
                    <p>Variety-BHU-31, Village-Kaithi, Block-Barahmpur, District-Buxar (Bihar)</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </Col>
          <hr style={{height:'4px',marginTop:'20px'}}></hr>
        <div style={{ padding: '20px 10%', textAlign: 'justify', fontSize: '20px', fontFamily: 'sans-serif' }}>
          Special mention is to be made of Shri Baban Upadhyay and Shri Ramanuj Upadhyay, two progressive farmers in Kaimur district of Bihar, who are involved in the cultivation of BHU-25 varieties of wheat on approximately 28 Acres of land.
          Shri Dev Mani Pande, Ghazipur district Uttar Pradesh, Shri Munna Pathak, Buxar district Bihar and Shri Karan Singh, Kaimur district Bihar cultivated BHU-31 variety of wheat on approximately 70 Acre of land and were of the opinion that BHU-31 has wide leaves, which helps in better photosynthesis and the cattle eats them very fondly.
        </div>
        </Row>
      </div>
    </div>
  )
}

export default Success