import React from "react";
import "./signinpage.css";
import Header from "../Component/Header"
import Content from '../Component/Content';
export class Dangky extends React.Component {
    constructor(props) {
        super(props);
        this.state = { tmp: 0 };
    }
    addNewUser() {
        var customerID = document.getElementById("CustomerID").value;
        var customerName = document.getElementById("CustomerName").value;
        var passwords = document.getElementById("Passwords").value;
        var rePasswords = document.getElementById("RePasswords").value;
        var doanh = document.getElementById("doanhnghiep");
        var types = 0;
        if (customerID === "" || customerName === "" || passwords !== rePasswords) alert("nhap du lieu sai");
        else {
            if (doanh.checked == true) {
                /*var axios = require('axios');
                var config = {
                    method: 'get',
                    url: 'http://128.199.198.243:1001/api/v1/airlines',
                    headers: {}
                };
                axios(config)
                    .then(response => {
                        console.log(JSON.stringify(response.data));
                        var s = JSON.parse(JSON.stringify(response.data));
                        types = s.length + 1;
                        var axioss = require('axios');
                        var configg = {
                            method: 'post',
                            url: 'http://128.199.198.243:1001/api/v1/customers',
                            headers: {},
                            params: {
                                CustomerID: customerID,
                                CustomerName: customerName,
                                Passwords: passwords,
                                Types: types
                            }
                        };
                        axioss(configg)
                            .then(function (res) {
                                console.log(JSON.stringify(res.data));
                            })
                            .catch(function (err) {
                                alert("nhap du lieu sai");
                            });
                    })
                    .catch(function (error) {
                        alert("nhap du lieu sai");
                    });*/
                    var axios = require('axios');
                    var data = JSON.stringify({
                      "username": customerID,
                      "password": passwords,
                      "name": customerName,
                      "email": "sadsads@gmail.com",
                      "gender": false,
                      "dob": "2022-06-14",
                      "phone": "0988888888",
                      "address": "Your mom str,VN",
                      "reward": 0,
                      "company_name": "sadass",
                      "services": [
                        "eaeaacf3-3ba7-4bba-916b-2b0c108c57bc"
                      ]
                    });
                    
                    var config = {
                      method: 'post',
                      url: 'http://139.59.104.129:6010/api/user/postRegister',
                      headers: { 
                        'Content-Type': 'application/json'
                      },
                      data : data
                    };
                    
                    axios(config)
                    .then(function (response) {
                      console.log(JSON.stringify(response.data));
                    })
                    .catch(function (error) {
                      console.log(error);
                    });
                    
                    
            }
            else {
                var axios = require('axios');
                var data = JSON.stringify({
                  "username": customerID,
                  "password": passwords,
                  "name": customerName,
                  "email": "sadsads@gmail.com",
                  "gender": false,
                  "dob": "2022-06-14",
                  "phone": "0988888888",
                  "address": "Your mom str,VN",
                  "reward": 0,
                  "company_name": "",
                  "services": []
                });
                
                var config = {
                  method: 'post',
                  url: 'http://139.59.104.129:6010/api/user/postRegister',
                  headers: { 
                    'Content-Type': 'application/json'
                  },
                  data : data
                };
                
                axios(config)
                .then(function (response) {
                  console.log(JSON.stringify(response.data));
                })
                .catch(function (error) {
                  console.log(error);
                });
                
            }
            //window.location.replace("/DangNhap");
        }
    }
    render() {
        return (
            <div>
                <div>

                    <div align="center">
                        <div>
                            <h2 style={{ marginTop: '10px' }}>Đăng ký tài khoản</h2>
                        </div>
                        <div>
                            <div><h3 className="labelinputemail">Tên tài khoản</h3></div>
                            <div>
                                <input type="text" name="" id="CustomerID" className="inputemailhoacdidong" />
                            </div>
                        </div>
                        <div>
                            <div><h3 className="labelinputemail">Tên người dùng</h3></div>
                            <div>
                                <input type="text" name="" id="CustomerName" className="inputemailhoacdidong" />
                            </div>
                        </div>
                        <div>
                            <div><h3 className="labelinputemail">Mật khẩu</h3></div>
                            <div>
                                <input type="text" name="" id="Passwords" className="inputemailhoacdidong" />
                            </div>
                        </div>
                        <div>
                            <div>
                                <div><h3 className="labelinputemail">Xác nhận lại mật khẩu</h3></div>
                            </div>

                            <div>
                                <input type="password" name="" id="RePasswords" className="inputmatkhau" />
                            </div>

                            <div>
                                Có phải là doanh nghiệp không? <input type="checkbox" name="" id="doanhnghiep" />
                            </div>

                            <div style={{ marginTop: '10px' }}>
                                <button className="btndangnhap" onClick={this.addNewUser}>Đăng ký</button>
                            </div>

                            <div>
                                <h3>Bạn đã có tài khoản? <a href="/DangNhap"><u className="dangkynhanh">Đăng nhập</u></a></h3>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
};
export default Dangky;