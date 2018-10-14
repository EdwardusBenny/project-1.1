import React, { Component } from 'react';
import {Grid, Row, Col,  } from 'react-bootstrap';
import image1 from '../images/logo.png';
import image2 from '../images/QR.png';

class Footer extends Component {
    render() {
        return (
            <Grid fluid className="footer-css">
                <Row className="show-grid">
                    <Col xs={2} >
                    </Col>
                    <Col xs={2} >
                        <h3>Toko Dagang</h3>
                        <hr />
                        <a href='#'>Tentang Kami</a><br />
                        <a href='#'>Karir</a><br />
                        <a href='#'>Blog</a><br />
                        <a href='#'>Gratis Ongkir</a><br />
                        <a href='#'>Garansi Toko Dagang</a>
                    </Col>
                    <Col xs={2} >
                        <h3>Layanan Pelanggan</h3>
                        <hr />
                        <a href='#'>Bantuan</a><br />
                        <a href='#'>FAQ</a><br />
                        <a href='#'>Lacak Pengiriman</a><br />
                        <a href='#'>Kebijakan Pembayaran</a><br />
                        <a href='#'>Cara Berbelanja</a><br />
                    </Col>
                    <Col xs={2} >
                        <h3>Ikuti Kami</h3>
                        <hr />
                        <a href='#'>Facebook</a><br />
                        <a href='#'>Instagram</a><br />
                        <a href='#'>Twitter</a><br />
                        <a href='#'>Line</a><br />
                    </Col>
                    <Col xs={2} >
                        <h4>Download Aplikasi Mobile Toko Dagang</h4>
                        <hr />
                        <img src={image2 }height="140px" width="140px"></img >
                    </Col>

                </Row>
                <Row className="show-grid">


                <Col xs={2} >
                    </Col>
                <Col xs={2} >

                        <hr />
                        <img src={image1}height="80px" width="140px"></img >
                    </Col>
                    <Col xs={4} >
                    </Col>
                    <Col xs={2} >
                    <hr />
                    <h1></h1>
                    <h1></h1>
                    © Toko Dagang 2018
                    </Col>
                </Row>
                </Grid>

             
        );
    }
}

export default Footer;