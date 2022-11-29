import React, { Component, Fragment } from 'react'
import { Col,Container,Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Apple from '../../assets/images/apple.png'
import Google from '../../assets/images/google.png'

 class FooterMobile extends Component {
  render() {
    return (
      <Fragment>
    <div className='footerback m-0 mt-3 p-3 shadow-sm'>    
      <Container className='text-center'>
      <Row className='px-0 my-5'>
        <Col className='p-2' lg={3} md={3} sm={6} xs={12}> 
        <h5 className='footer-menu-title'> Office Address </h5>
        <p>Jesus Marmolejo 206
        <br />
        Email: sergio@gmail.com
        </p>
        <h5 className='footer-menu-title'>Social Link</h5>
        <a href=""><i className='fab m-1 h4 fa-facebook'></i></a>
        <a href=""><i className='fab m-1 h4 fa-instagram'></i></a>
        <a href=""><i className='fab m-1 h4 fa-twitter'></i></a>

        
        </Col>
        
        <Col className='p-2' lg={3} md={3} sm={6} xs={12}> 
        <h5 className='footer-menu-title'> Download Apps</h5>
        <a href="/"><img src={Google}  /></a><br />
        <a href="/"><img className='mt-2' src={Apple}  /></a><br />

        </Col>
      </Row>
    </Container>

    <Container fluid={true} className="text-center m-0 pt-3 pb-1 bg-black">
      <Container>
        <Row>
          <h6 className='text-white' >© Copyright 2022 by RepairShop, All Rights Reserved</h6>
        </Row>
      </Container>
    </Container>
    </div>

   </Fragment>
    )
  }
}

export default FooterMobile
