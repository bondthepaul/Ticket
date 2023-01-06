import './App.css';
import Partner1 from './partner/Partner1';
import Partner2 from './partner/Partner2';
import Partner3 from './partner/Partner3';
import GetJson from './Component/GetJson';
import GetInfo from './Component/GetInfo';
import GetCard from './Component/GetCard';
import Navbar from './Component/Navbar';
import history from './history';
import Cart from "./Component/Cart";
import Home from "./Component/Home";
import About from "./Component/About";
import Footer from "./Component/Footer";
import Paymentend from "./Component/Paymentend";
import ContactUs from "./Component/ContactUs";
import React , { useState } from 'react';
import {Provider} from 'react-redux';
import store from "./store";
import DangNhap from "./Component/LoginForm";
import Dangky from "./Component/SignUpForm";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
  
function App() {
  return (
    <>
    <Provider store={store}>
    <Router history={history}>
    <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contactus" component={ContactUs} />
          <Route path="/GetJson" component={GetJson} />
          <Route path="/GetInfo" component={GetInfo} />
          <Route path="/GetCard" component={GetCard} />
          <Route path="/Paymentend" component={Paymentend} />
          <Route path="/DangNhap" component={DangNhap} />
          <Route path="/Dangky" component={Dangky} />
          <Route path="/them" component={Partner1} />
          <Route path="/partner" component={Partner2} />
          <Route path="/chitiet" component={Partner3} />
          <Route path="/Cart" component={Cart} />
          <Redirect to="/"/>
        </Switch>
      </Router>
      <Footer></Footer>
    </Provider>
    
     
      </>
  );
} 

export default App;
