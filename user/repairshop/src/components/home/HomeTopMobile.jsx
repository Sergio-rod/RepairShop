import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import HomeSlider from './HomeSlider'

import axios from 'axios'
import AppURL from '../../api/AppURL'

 class HomeTopMobile extends Component {

    constructor(){
        super();
        this.state = {
            MenuData:[] ,
            SliderData: []   
        }

    }

    
    componentDidMount(){
        

        axios.get(AppURL.AllSlider).then(response =>{
            this.setState({SliderData:response.data})


        }).catch(error=>{

        })
    }

    render() {
        return (
            <Fragment>
                <Container className='p-0 m-0 overflow-hidden' fluid={true}>
                    <Row className='p-o m-o overflow-hidden'>
                
                        <Col ls={12} md={12} sm={12}>
                            <HomeSlider data={this.state.SliderData} ></HomeSlider>
                        </Col>
                    </Row>
                </Container>

            </Fragment>
        )
    }
}

export default HomeTopMobile