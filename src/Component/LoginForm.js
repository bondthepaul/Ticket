import React from "react";
import "./signinpage.css";
import Header from "../Component/Header"
import Content from '../Component/Content';
export class DangNhap extends React.Component {
    constructor(props) {
        super(props);
        this.hienthimatkhau = this.hienthimatkhau.bind(this)
    }
    hienthimatkhau() {
        console.log("CCCCC")
        var checkboxhienthi = document.getElementById('Passwords');
        if (checkboxhienthi.type === "password") {
            checkboxhienthi.type = "text";
        } else {
            checkboxhienthi.type = "password";
        }
    }
    dangnhap() {
        var customerID = document.getElementById("CustomerID").value;
        var passwords = document.getElementById("Passwords").value;
        var axios = require('axios');
        var data = JSON.stringify({
            "username": customerID,
            "password": passwords
        });

        var config = {
            method: 'post',
            url: 'http://139.59.104.129:6010/api/user/postLogin',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(response=>{
                console.log(JSON.stringify(response.data));
                var xx = JSON.parse(JSON.stringify(response.data));
                console.log(xx);
                if(xx.success==true)
                {
                    localStorage.setItem("Types",xx.data.type);
                    localStorage.setItem("CustomerName",xx.data.name);
                    localStorage.setItem("CustomerID",xx.accessToken);
                    if(xx.data.type=="USER") window.location.replace("/"); else window.location.replace("/partner");                 
                } 
            })
            .catch(function (error) {
                console.log(error);
            });

        /*
        var config = {
          method: 'get',
          url: 'http://128.199.198.243:1001/api/v1/customers/'+customerID,
          headers: { }
        };
        
        axios(config)
        .then(response=>{
          console.log(JSON.stringify(response.data));
          var s = JSON.parse(JSON.stringify(response.data));
          console.log(s[0].Passwords);
          if(passwords===s[0].Passwords) {
            localStorage.setItem("Types",s[0].Types);
            localStorage.setItem("CustomerName",s[0].CustomerName);
            localStorage.setItem("CustomerID",s[0].CustomerID);
            if(s[0].Types==0) window.location.replace("/");
            else window.location.replace("/partner");
        }
        })
        .catch(function (error) {
          console.log(error);
        });
        */
    }
    render() {
        return (
            <div>
                <div>
                        <div align="center">
                            <div>
                                <h2 style={{ marginTop: '10px' }}>Đăng nhập tài khoản</h2>
                            </div>
                            <div>
                                <div><h3 className="labelinputemail">Tên tài khoản</h3></div>
                                <div>
                                    <input type="text" name="" id="CustomerID" className="inputemailhoacdidong" />
                                </div>
                            </div>
                            <div>
                                <div>
                                    <div><h3 className="labelinputemail">Mật khẩu</h3></div>

                                </div>

                                <div>
                                    <input type="password" name="" id="Passwords" className="inputmatkhau" />
                                    <div style={{ display: 'flex', marginTop: '5px', marginLeft: '470px' }}>
                                        <div><input type="checkbox" name="" id="" className="checkboxhienthi" onClick={this.hienthimatkhau} /></div>
                                        <div><h3 className="labelcheckboxhienthimatkhau">Hiển thị password</h3></div>
                                        <div style={{ paddingLeft: '40px' }}><a href=""><h3 className="textquenmatkhau">Quên mật khẩu</h3></a></div>
                                    </div>

                                </div>

                                <div style={{ marginTop: '10px' }}>
                                    <button className="btndangnhap" onClick={this.dangnhap}>Đăng nhập</button>
                                </div>

                                <div>
                                    <h3>Bạn chưa có tài khoản? <a href=""><u className="dangkynhanh">Đăng ký</u></a></h3>
                                </div>
                            </div>
                        </div>
                    
                </div>
            </div>
        );
    }
};
export default DangNhap;