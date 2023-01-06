import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
export class Navbar extends React.Component {
  removeUser(){
    localStorage.setItem("CustomerName",null);
    localStorage.setItem("CustomerID",null);
    console.log(localStorage.getItem("CustomerName"));
    window.location.reload();
  }
  redirect(){
    if(localStorage.getItem("Types")==="USER") window.location.replace("/");
    else window.location.replace("/partner");
  }
  redirectCart(){
    window.location.replace("/cart");
  }
  renderNav(){
    console.log(localStorage.getItem("CustomerName"));
    if(localStorage.getItem("CustomerName")==="null") return <NavBtn><NavBtnLink to='/Dangky'>Đăng ký</NavBtnLink><NavBtnLink to='/DangNhap'>Đăng nhập</NavBtnLink></NavBtn>;
    else return <NavBtn><p style={{color:"white"}} onClick={this.redirectCart}>Chào: {localStorage.getItem("CustomerName")}</p><NavBtnLink to='/' onClick={this.removeUser}>Đăng xuất</NavBtnLink></NavBtn>;
  }
  render(){
    return (
      <>
        <Nav>
          <NavLink to='/'  onClick={this.redirect}>
            <img src={require('./plane.png')} alt='logo' width={50}/>
          </NavLink>
          <Bars />
          <NavMenu>
            <NavLink to='/' onClick={this.redirect} activeStyle>
              Home
            </NavLink>
            <NavLink to='/about' activeStyle>
              About
            </NavLink>
            <NavLink to='/contactus' activeStyle>
              Contact Us
            </NavLink>
            {/* Second Nav */}
            {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
          </NavMenu>
           {this.renderNav()}
        </Nav>
      </>
    );
  }
};

export default Navbar;
