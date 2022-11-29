import React, { Component, Fragment } from 'react'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import withRouter from '../validation/withRouter'
import axios from 'axios'
import AppURL from '../api/AppURL'
import SubCategory from '../components/ProductDetails/SubCategory'

 class ProductSubcategoryPage extends Component {


    

    constructor(props){
     
        super();
        this.state={
            Category:props.params.category,
            SubCategory:props.params.subcategory,

            ProductData:[]
       }
    }
  
  componentDidMount(){
      window.scroll(0,0)
      // alert(this.state.Category);
      // alert(this.state.SubCategory)
      axios.get(AppURL.ProductListBySubCategory(this.state.Category,
        this.state.SubCategory)).then(response => {
          
        this.setState({ProductData:response.data});
  
    }).catch(error => {
  
    })
    }

  render() {
 console.log(this.state.ProductData);
    

    return (
        <>
        <Fragment>
        <div className='Desktop'>
          <NavMenuDesktop></NavMenuDesktop>
  
        </div>
        <div className='Mobile'>
          <NavMenuMobile></NavMenuMobile>
  
        </div>
      
        <SubCategory 
        Category={this.state.Category} 
        SubCategory={this.state.SubCategory}
        ProductData={this.state.ProductData} ></SubCategory>
     
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

export default withRouter(ProductSubcategoryPage) ;
