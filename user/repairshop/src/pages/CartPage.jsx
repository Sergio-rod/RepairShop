import React, { Component, Fragment } from 'react'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import Cart from '../components/Cart/Cart'


export class CartPage extends Component {

    
  componentDidMount(){
    window.scroll(0,0)
  }
    
  render() {
    const User = this.props.user;

    return (
        <Fragment>
        <div className='Desktop'>
          <NavMenuDesktop></NavMenuDesktop>
  
        </div>
        <div className='Mobile'>
          <NavMenuMobile></NavMenuMobile>
  
        </div>

        <Cart user={User}/>
     
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

export default CartPage
