import Image from 'next/image';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Lgo from '../assets/i1.jpg';
import styles from '../styles/Testimonial.module.scss'


const Header = () => {
    return (
        <div className='header'>
            <Row >
                <Col style={{verticalAlign:'middle'}}>
                    <div >
                        <Image src={Lgo} alt='photo' height={400} style={{ borderRadius: '20px', boxShadow:'5px 5px 10px gray', margin: 'auto', display: 'block' }} className='headr'/>
                    </div>
                </Col>
                <Col>
                    <div className={styles.column}>
                        <div className={styles.content}>
                            <div className={styles.heading}>
                                {/* <div className={styles.row}>
            <div className={styles.column}> */}
                                {`Our Aim is to Build`}
                                <br />
                                {/* <span> digital &nbsp; </span> */}
                                {/* <br/> */}
                               
                                <main>
                                    <p className={styles.para}>
                                        {/* <hr/> */}
                                       a prosperous and sustainable agriculture sector, through the participation and capacity building of farmers, thereby enabling them to enhance productivity and cost-effectiveness and utilize sustainable resources by increasing the quality and quantity of crop production.
                                    </p>
                                    <button className={styles.button1}>
                                        <a href='/services'> Contact Us </a>
                                    </button>
                                    {/* </div> */}
                                </main>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Header;
