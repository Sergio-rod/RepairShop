import React, { Component, Fragment } from 'react'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import Category from '../components/ProductDetails/Category'
import { Params, useParams } from 'react-router'
import withRouter from '../validation/withRouter'
import axios from 'axios'
import AppURL from '../api/AppURL'

class ProductCategoryPage extends Component {


      constructor(props){
     
          super();
          this.state={
              Category:props.params.category,
              ProductData:[]
         }
      }
    
    componentDidMount(){
        window.scroll(0,0)
        // alert(this.state.Category);
        axios.get(AppURL.ProductListByCategory(this.state.Category)).then(response => {
          this.setState({ProductData:response.data});
    
      }).catch(error => {
    
      })
      }

  render() {
    console.log(this.state.Category)
    return (<>
        <Fragment>
        <div className='Desktop'>
          <NavMenuDesktop></NavMenuDesktop>
  
        </div>
        <div className='Mobile'>
          <NavMenuMobile></NavMenuMobile>
  
        </div>
      
        <Category 
        Category={this.state.Category} 
        ProductData={this.state.ProductData} ></Category>
     
         <div className='Desktop'>
          <FooterDesktop></FooterDesktop>
          
  
        </div>
        <div className='Mobile'>
          <FooterMobile></FooterMobile>
  
        </div>
         
      </Fragment>
      </>
    )
  }
}

export default withRouter(ProductCategoryPage)
