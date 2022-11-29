import axios from 'axios';
import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import AppURL from '../../api/AppURL';
import validation from '../../validation/validation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export class Contact extends Component {


    constructor(){
        super();
        this.state={

            name:'',
            email:'',
            message:''
        }
    }

    nameOnChange = (event) => {
        let name = event.target.value;
        this.setState({name:name})
    }
    emailOnChange = (event) => {
        let email = event.target.value;
        this.setState({email:email})
    }
    messageOnChange = (event) => {
        let message = event.target.value;
        this.setState({message:message})

    }
    onFormSubmit = (event) => {
        let name = this.state.name;
        let email = this.state.email;
        let message = this.state.message;
        let sendBtn = document.getElementById('sendBtn');
        let contactForm = document.getElementById('contactForm');



        if(message.length==0){
            toast.error('Your message cant be empty')
        }else if (name.length==0){
            toast.error('Please, type your name')
        }else if(email.length==0){
            toast.error('Please, type your email')
        }
        else if (!(validation.NameRegx).test(name)){
            toast.error("Invalid Name")
        }
        else{

            
            sendBtn.innerHTML='Sending...';
            let MyFormData = new FormData();
            MyFormData.append('name',name)
            MyFormData.append('email',email)
            MyFormData.append('message',message)


            axios.post(AppURL.PostContact,MyFormData).then(function(response){
                if(response.status==200 && response.data==1){
                    toast.success('Message send successfully!');
                    sendBtn.innerHTML='Send'
                    contactForm.reset();
                }else{
                    toast.error('error')
                }

            }).catch(function(error){
                toast.error(error)
                sendBtn.innerHTML='Cannot send'

            });
        }

        event.preventDefault();
    }


    render() {


        return (
            <Fragment>
                <Container>
                    <Row className='p-2' >
                        <Col className='shadow-sm bg-white mt-2' lg={12} md={12} sm={12} xs={12}>
                            <Row className='text-center' >
                                <Col className='d-flex justify-content-center' lg={6} md={6} sm={12} xs={12}>
                                    <Form id='contactForm' onSubmit={this.onFormSubmit} className='onboardForm'>
                                        <h4 className='section-title-login'> CONTACT WITH US</h4>
                                        <h6 className='section-sub-title' >Please contact with us </h6>
                                        <input onChange={this.nameOnChange} className='form-control m-2' type="text"
                                            placeholder='Enter your name' />

                                        <input onChange={this.emailOnChange} className='form-control m-2' type="email"
                                            placeholder='Enter email' />

                                        <Form.Control onChange={this.messageOnChange} as="textarea" className="form-control m-2"
                                        rows={3} placeholder='Message'></Form.Control>
                                        <Button  id="sendBtn" type ='submit' className='btn btn-block m-2 site-btn-login' > Send
                                        </Button>

                                    </Form>

                                </Col>
                                <Col className='p-0 Desktop m-0' lg={6} md={6} sm={12} xs={12}>
                                    <br /><br />
                                    <p className='section-title-contact' >Jesus Marmolejo 206
                                    </p>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.66151375447!2d-99.16978803765701!3d19.427025645898855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02ff7!2sEl%20%C3%81ngel%20de%20la%20Independencia!5e0!3m2!1ses!2smx!4v1667438281555!5m2!1ses!2smx" width="550" height="450" styles="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                </Container>
                <ToastContainer></ToastContainer>
            </Fragment>
        )
    }
}

export default Contact
