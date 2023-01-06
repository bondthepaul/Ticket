import React from "react";
import "./Partner1.css";
import { Link, useParams } from "react-router-dom";
class Partner1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { listitem: [] };
        this.addNewFlight=this.addNewFlight.bind(this);
    }
    addNewFlight() {
        var flightID=document.getElementById("FlightID").value;
        var airlineID=localStorage.getItem("Types");
        var fromCity=document.getElementById("FromCity").value;
        var toCity=document.getElementById("ToCity").value;
        var departTime=document.getElementById("DepartTime").value;
        var arrivalTime=document.getElementById("ArrivalTime").value;
        var seatsClassA=document.getElementById("SeatsClassA").value;
        var seatsClassB=document.getElementById("SeatsClassB").value;
        var seatsClassC=document.getElementById("SeatsClassC").value;
        var seatsClassD=document.getElementById("SeatsClassD").value;
        var seatsClassAPrice=document.getElementById("SeatsClassAPrice").value;
        var seatsClassBPrice=document.getElementById("SeatsClassBPrice").value;
        var seatsClassCPrice=document.getElementById("SeatsClassCPrice").value;
        var seatsClassDPrice=document.getElementById("SeatsClassDPrice").value;
        var axios = require('axios');
        var config = {
            method: 'post',
            url: 'http://128.199.198.243:1001/api/v1/flights',
            headers: {},
            params: {
                FlightID:flightID,
                AirlineID:airlineID,
                FromCity:fromCity,
                ToCity:toCity,
                DepartTime:departTime,
                ArrivalTime:arrivalTime,
                SeatsClassA:seatsClassA,
                SeatsClassB:seatsClassB,
                SeatsClassC:seatsClassC,
                SeatsClassD:seatsClassD,
                SeatsClassAPrice:seatsClassAPrice,
                SeatsClassBPrice:seatsClassBPrice,
                SeatsClassCPrice:seatsClassCPrice,
                SeatsClassDPrice:seatsClassDPrice
              }
        };
        console.log(config);
        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                localStorage.setItem("FlightID",flightID);
                window.location.replace("/chitiet");
            })
            .catch(function (error) {
                console.log(error);
            });
        
    }
    render() {
        return <div className="App1">
            <div className="divtong3">
                <div>
                    <div style={{ textAlign: "left" }}>
                        <div><h1>Tạo chuyến bay</h1></div>
                    </div>

                </div>
                <div>
                    <form className="FormTaoChuyenBay">

                        <div style={{ display: "flex" }}>
                            <div style={{ textAlign: "left" }}>
                                <div><h5 style={{ marginBottom: "2px" }}>FlightID</h5></div>
                                <div><input type="text" className="Input-sp" id="FlightID"></input></div>
                            </div>
                            <div style={{ textAlign: "left", paddingLeft: "12px" }}>
                                <div><h5 style={{ marginBottom: "2px" }}>AirlineID</h5></div>
                                <div>{localStorage.getItem("CustomerName")}
                                </div>
                            </div>
                        </div>
                        <div style={{ display: "flex" }}>
                            <div style={{ textAlign: "left" }}>
                                <div><h5 style={{ marginBottom: "2px" }}>FromCity</h5></div>
                                <div style={{ display: "flex" }}>
                                    <select placeholder="Nhập tên điểm đến" style={{ width: "250px" }} className="Select-option1" id="FromCity">
                                        <option value="Đà Nẵng">Đà Nẵng</option>
                                        <option value="Sài Gòn">Sài Gòn</option>
                                        <option value="Hà Nội">Hà Nội</option>
                                    </select>
                                </div>
                            </div>
                            <div style={{ textAlign: "left", paddingLeft: "12px" }}>
                                <div><h5 style={{ marginBottom: "2px" }}>ToCity</h5></div>
                                <div><select placeholder="Nhập tên điểm đến" style={{ width: "250px" }} className="Select-option1" id="ToCity">
                                    <option value="Đà Nẵng">Đà Nẵng</option>
                                    <option value="Sài Gòn">Sài Gòn</option>
                                    <option value="Hà Nội">Hà Nội</option>
                                </select></div>

                            </div>
                        </div>
                        <div style={{ display: "flex" }}>
                            <div style={{ textAlign: "left" }}>
                                <div><h5 style={{ marginBottom: "2px" }}>DepartTime</h5></div>
                                <div style={{ display: "flex" }}>
                                    <input type="datetime-local" className="Input-sp" style={{ width: "230px" }} id="DepartTime"></input>
                                </div>
                            </div>
                            <div style={{ textAlign: "left", paddingLeft: "12px" }}>
                                <div><h5 style={{ marginBottom: "2px" }}>ArrivalTime</h5></div>
                                <div><input type="datetime-local" className="Input-sp" id="ArrivalTime"></input></div>

                            </div>
                        </div>

                        <div style={{ display: "flex" }}>
                            <div style={{ textAlign: "left" }}>
                                <div><h5 style={{ marginBottom: "2px" }}>SeatsClassA</h5></div>
                                <div style={{ display: "flex" }}>
                                    <input type="number" className="Input-sp" style={{ width: "230px" }} id="SeatsClassA"></input>
                                </div>
                            </div>
                            <div style={{ textAlign: "left", paddingLeft: "12px" }}>
                                <div><h5 style={{ marginBottom: "2px" }}>SeatsClassB</h5></div>
                                <div><input type="number" className="Input-sp" id="SeatsClassB"></input></div>

                            </div>
                        </div>
                        <div style={{ display: "flex" }}>
                            <div style={{ textAlign: "left" }}>
                                <div><h5 style={{ marginBottom: "2px" }}>SeatsClassC</h5></div>
                                <div style={{ display: "flex" }}>
                                    <input type="number" className="Input-sp" style={{ width: "230px" }} id="SeatsClassC"></input>
                                </div>
                            </div>
                            <div style={{ textAlign: "left", paddingLeft: "12px" }}>
                                <div><h5 style={{ marginBottom: "2px" }}>SeatsClassD</h5></div>
                                <div><input type="number" className="Input-sp" id="SeatsClassD"></input></div>

                            </div>
                        </div>
                        <div style={{ display: "flex" }}>
                            <div style={{ textAlign: "left" }}>
                                <div><h5 style={{ marginBottom: "2px" }}>SeatsClassAPrice</h5></div>
                                <div style={{ display: "flex" }}>
                                    <input type="number" className="Input-sp" style={{ width: "230px" }} id="SeatsClassAPrice"></input>
                                </div>
                            </div>
                            <div style={{ textAlign: "left", paddingLeft: "12px" }}>
                                <div><h5 style={{ marginBottom: "2px" }}>SeatsClassBPrice</h5></div>
                                <div><input type="number" className="Input-sp" id="SeatsClassBPrice"></input></div>

                            </div>
                        </div>
                        <div style={{ display: "flex" }}>
                            <div style={{ textAlign: "left" }}>
                                <div><h5 style={{ marginBottom: "2px" }}>SeatsClassCPrice</h5></div>
                                <div style={{ display: "flex" }}>
                                    <input type="number" className="Input-sp" style={{ width: "230px" }} id="SeatsClassCPrice"></input>
                                </div>
                            </div>
                            <div style={{ textAlign: "left", paddingLeft: "12px" }}>
                                <div><h5 style={{ marginBottom: "2px" }}>SeatsClassDPrice</h5></div>
                                <div><input type="number" className="Input-sp" id="SeatsClassDPrice"></input></div>

                            </div>
                        </div>
                    </form>
                    <div style={{ display: "flex" }}>
                        <div style={{ margin: 'auto' }}>
                            <Link to="/partner" > <button className="Button-sp">Trở lại</button></Link>
                        </div>
                        <button className="Button-sp" onClick={this.addNewFlight}>Them</button>
                    </div>

                </div>
            </div>
        </div>




    }
}
export default Partner1;