import React, { Component, Fragment } from 'react'
import FeaturedProducts from '../components/home/FeaturedProducts'
import Categories from '../components/home/Categories'
import Collection from '../components/home/Collection'
import NewArrival from '../components/home/NewArrival'
import HomeTop from '../components/home/HomeTop'
import HomeTopMobile from '../components/home/HomeTopMobile'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import axios from 'axios'
import AppURL from '../api/AppURL.jsx'

export class HomePage extends Component {

  componentDidMount(){
    window.scroll(0,0);
    this.GetVisitorDetails();
  }

  GetVisitorDetails=()=>{
    axios.get(AppURL.VisitorDetails).then().catch();
  }

  render() {
    return (
    <Fragment>
      <div className='Desktop'>
        <NavMenuDesktop></NavMenuDesktop>
        <HomeTop></HomeTop>

      </div>
      <div className='Mobile'>
        <NavMenuMobile></NavMenuMobile>
        <HomeTopMobile></HomeTopMobile>

      </div>
   
       <FeaturedProducts></FeaturedProducts>
       <NewArrival></NewArrival>
       <Categories></Categories>
       <Collection></Collection>
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

export default HomePage
