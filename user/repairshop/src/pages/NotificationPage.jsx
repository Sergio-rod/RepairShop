import React, { Component, Fragment } from 'react'
import Notification from '../components/Notification/Notification'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'

 class NotificationPage extends Component {

    componentDidMount(){
        window.scroll(0,0)
      }

  render() {
    

    
    return (
        <Fragment>
        <div className='Desktop'>
          <NavMenuDesktop></NavMenuDesktop>
  
        </div>
        <div className='Mobile'>
          <NavMenuMobile></NavMenuMobile>
  
        </div>

        <Notification></Notification>
     
         <div className='Desktop'>
          <FooterDesktop></FooterDesktop>
          
  
        </div>
        <div className='Mobile'>
          <FooterMobile></FooterMobile>
  
        </div>
         
      </Fragment>
    )
  }
}

export default NotificationPage
