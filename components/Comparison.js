import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import Chart from '../assets/chart.png'
import Table from '../assets/table1.png'
const Comparison = () => {
    return (
        <div style={{marginTop:'100px'}}>
            <h2 style={{textAlign:'center',marginBottom:'100px'}}>YEAR-WISE COMPARISON OF PRODUCTION</h2>
            <div style={{marginTop:'80px'}}><Image src={Table} style={{display:'block',margin:'auto',width:'70%',height:'auto',border:'2px solid black'}}/></div>
            <div style={{marginTop:'80px'}}><Image src={Chart} style={{display:'block',margin:'auto',width:'70%',height:'auto',marginBottom:'30px'}}/></div>
        </div>
    )
}

export default Comparison