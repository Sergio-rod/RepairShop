import React, { Component } from 'react'
import { Fragment } from 'react'
import AppURL from '../api/AppURL'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import axios from 'axios'
import SearchList from '../components/ProductDetails/SearchList'
import withRouter from '../validation/withRouter'

class SearchPage extends Component {

     constructor(props){
          super(); 
          this.state={
               SearchKey:props.params.searchkey,
               ProductData:[] 
          }
     }

     componentDidMount(){
          window.scroll(0,0)
          // alert(this.state.Category);
          axios.get(AppURL.ProductBySearch(this.state.SearchKey)).then(response =>{

               this.setState({ProductData:response.data});         

          }).catch(error=>{

          });

     } 

     render() {
          console.log(this.state.SearchKey)
          return (
               <Fragment> 
               <div className="Desktop">
                <NavMenuDesktop /> 
               </div>

               <div className="Mobile">
               <NavMenuMobile />  
               </div>                       

               <SearchList SearchKey={this.state.SearchKey} ProductData={this.state.ProductData} /> 

               <div className="Desktop">
               <FooterDesktop/>
               </div>

               <div className="Mobile">
               <FooterMobile/>
               </div>

          </Fragment>
          )
     }
}

export default withRouter(SearchPage)
