import React, { Component, Fragment } from 'react'
import { Route, Routes } from "react-router-dom"
import ContactPage from '../pages/ContactPage';
import HomePage from '../pages/HomePage';
import UserLoginPage from '../pages/UserLoginPage';
import PurchasePage from '../pages/PurchasePage';
import RefundPage from '../pages/RefundPage';
import PrivacyPage from '../pages/PrivacyPage';
import ProductDetailsPage from '../pages/ProductDetailsPage';
import NotificationPage from '../pages/NotificationPage';
import FavouritePage from '../pages/FavouritePage';
import CartPage from '../pages/CartPage';
import AboutPage from '../pages/AboutPage';
import ProductCategoryPage from '../pages/ProductCategoryPage';
import ProductSubcategoryPage from '../pages/ProductSubcategoryPage';
import SearchPage from '../pages/SearchPage';
import RegisterPage from '../pages/RegisterPage';
import ForgetPasswordPage from '../pages/ForgetPasswordPage';
import ResetPasswordPage from '../pages/ResetPasswordPage';
import ProfilePage from '../pages/ProfilePage';
import AppURL from '../api/AppURL';
import axios from 'axios';
import NavMenuDesktop from '../components/common/NavMenuDesktop';
import OrderListPage from '../pages/OrderListPage';









class AppRoute extends Component {


  constructor() {
    super();
    this.state = {
      user: {}

    }
  }


  componentDidMount() {
    axios.get(AppURL.UserData).then(response => {
      this.setUser(response.data)


    }).catch(error => {

    })
  }



  setUser = (user) => {
    this.setState({ user: user })

  }

  render() {
    return (
      <Fragment>
        <NavMenuDesktop user={this.state.user} setUser={this.setUser} ></NavMenuDesktop>
        <Routes>



          <Route exact path="/" element={<HomePage  ></HomePage>} />
          <Route exact path="/login" element={<UserLoginPage user={this.state.user} setUser={this.setUser}></UserLoginPage>} />
          <Route exact path="/contact" element={<ContactPage></ContactPage>} />
          <Route exact path="/purchase" element={<PurchasePage></PurchasePage>} />
          <Route exact path="/privacy" element={<PrivacyPage></PrivacyPage>} />
          <Route exact path="/refund" element={<RefundPage></RefundPage>} />
          <Route exact path="/about" element={<AboutPage></AboutPage>} />
          <Route exact path="/productdetails/:code" element={<ProductDetailsPage user={this.state.user} ></ProductDetailsPage>} />
          <Route exact path="/notification" element={<NotificationPage></NotificationPage>} />
          <Route exact path="/favourite" element={<FavouritePage user={this.state.user} ></FavouritePage>} />
          <Route exact path="/cart" element={<CartPage user={this.state.user}></CartPage>} />
          <Route exact path="/productcategory/:category" element={<ProductCategoryPage></ProductCategoryPage>} />
          <Route exact path="/productsubcategory/:category/:subcategory" element={<ProductSubcategoryPage></ProductSubcategoryPage>} />
          <Route exact path="/productbysearch/:searchkey" element={<SearchPage></SearchPage>} />
          <Route exact path="/register" element={<RegisterPage user={this.state.user} setUser={this.setUser}></RegisterPage>} />
          <Route exact path="/forget" element={<ForgetPasswordPage></ForgetPasswordPage>} />
          <Route exact path="/reset/:id" element={<ResetPasswordPage></ResetPasswordPage>} />
          <Route exact path="/profile/" element={<ProfilePage user={this.state.user} setUser={this.setUser} ></ProfilePage>} />
          <Route exact path="/orderlist" element={<OrderListPage user={this.state.user} ></OrderListPage>}  />







        </Routes>
      </Fragment>
    )
  }
}
//            <Route exact path='/' element={<HomePage/>}/>
//             <Route exact path="/productsubcategory/:category/:subcategory" element={<ProductSubcategoryPage></ProductSubcategoryPage>}/>

export default AppRoute;
/*

      <Route exact path="/" render={(props) => <HomePage {...props} key={Date.now()} />} />
          <Route exact path="/login" render={(props) => <UserLoginPage {...props} key={Date.now()} />} />
          <Route exact path="/contact" render={(props) => <ContactPage {...props} key={Date.now()} />} />
          <Route exact path="/purchase" render={(props) => <PurchasePage {...props} key={Date.now()} />} />
          <Route exact path="/privacy" render={(props) => <PrivacyPage {...props} key={Date.now()} />} />
          <Route exact path="/refund" render={(props) => <RefundPage {...props} key={Date.now()} />} />
          <Route exact path="/about" render={(props) => <AboutPage {...props} key={Date.now()} />} />

          <Route exact path="/productdetails/:code" render={(props) => <ProductDetailsPage {...props} key={Date.now()} />} />

          <Route exact path="/notification" render={(props) => <NotificationPage {...props} key={Date.now()} />} />

          <Route exact path="/favourite" render={(props) => <FavouritePage {...props} key={Date.now()} />} />

          <Route exact path="/cart" render={(props) => <CartPage {...props} key={Date.now()} />} />

          <Route exact path="/productcategory/:category" render={(props) => <ProductCategoryPage {...props} key={Date.now()} />} />

          <Route exact path="/productsubcategory/:category/:subcategory" render={(props) => <ProductSubcategoryPage {...props} key={Date.now()} />} />
*
 * 
 */