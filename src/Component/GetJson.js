import React, { Component } from "react";
// Getting local JSON file
import Flight from "./data.json";
import "./GetJson.css"
import { Link } from "react-router-dom";
export class GetJson extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ispop: props.trigger,
            items: "",
            pricee:0,
            flightid:0,
            count: 0,
            flights: [0,0,0,0,0],
            chuyenbay: [],
            DataisLoaded: false
        }
        this.addtocount = this.addtocount.bind(this);
        this.renderList = this.renderList.bind(this);
        //this.savelistflight=this.savelistflight.bind(this);
    }
    addtocount(tmp,p) {
        //console.log(localStorage.getItem("CustomerID"));
        if(localStorage.getItem("CustomerID")=="null") window.location.replace("/DangNhap");
        this.setState({ count: this.state.count + 1 });
        this.setState({ flightid: this.state.flightid = tmp });
        this.setState({ pricee: this.state.pricee = p });
        //console.log(localStorage.getItem("NumofTicket"));
        
    }
    savelistflight(){
        var y=document.getElementsByClassName("FlightID");
        var from=[...y].map(input => input.value);
        localStorage.setItem("ListFlight",JSON.stringify(from));
        var yy=document.getElementsByClassName("Price");
        var fromm=[...yy].map(input => input.value);
        localStorage.setItem("Price",JSON.stringify(fromm));
        //localStorage.setItem("ListFlight",JSON.stringify(this.state.flights));
    }
    renderList() {
        //return this.state.chuyenbay;
        console.log(this.state.count);
        if(this.state.count!=0) {
            var x=document.getElementsByClassName("FlightID");
            x[this.state.count-1].value=this.state.flightid;
            var xx=document.getElementsByClassName("Price");
            xx[this.state.count-1].value=this.state.pricee;
        }
        if (this.state.count == JSON.parse(localStorage.getItem("NumofTicket"))) {
            this.savelistflight(); 
            window.location.replace("/GetInfo");
        }
        var from = JSON.parse(localStorage.getItem("NoiDi"));
        var to = JSON.parse(localStorage.getItem("NoiDen"));
        var date = JSON.parse(localStorage.getItem("NgayDi"));
        var type = JSON.parse(localStorage.getItem("Seat"));
        console.log('json ' + from[this.state.count]);
        console.log('json ' + to[this.state.count]);
        console.log('json ' + date[this.state.count]);
        let uiItems = [];
        {
            this.state.chuyenbay.map(item => {
                // console.log(item);
                if (from[this.state.count] === "" || item.FromCity === from[this.state.count]) {
                    if (to[this.state.count] === "" || item.ToCity === to[this.state.count]) {
                        if (date[this.state.count] === "" || Date(item.DepartTime) === Date(date[this.state.count])) {
                            var price = item.SeatsClassDPrice;
                            if (type == 1) price = item.SeatsClassCPrice;
                            if (type == 2) price = item.SeatsClassBPrice;
                            if (type == 3) price = item.SeatsClassAPrice;
                            //console.log(type);
                            uiItems.push(<><tr className="TRTR" key={item.FlightID}>
                                <td>{item.AirlineID}</td>
                                <td>{item.FromCity}</td>
                                <td>{item.ToCity}</td>
                                <td>{item.DepartTime}</td>
                                <td>{item.ArrivalTime}</td>
                                <td>{price}</td>
                                <td>
                                    <button className="Button-sp" onClick={this.addtocount.bind(this,item.FlightID,price)}>Chọn</button> </td></tr>
                                <tr style={{ height: "30px" }}></tr>
                            </>
                            );
                        }

                    }

                }

            })
        }
        return uiItems;
    }
    just() {
        console.log(localStorage.getItem("From"));
        
    }
    componentDidMount() {
        var axios = require('axios');

        var config = {
            method: 'get',
            url: 'http://128.199.198.243:1001/api/v1/flights',
            headers: {}
        };
        var tam = "";
        axios(config).then(response => {
            //console.log(JSON.stringify(response.data.recordsets));
            tam = JSON.stringify(response.data);
            // getlist(tam);
            const cb = JSON.parse(tam).recordsets;
            console.log(cb);
            this.setState({ chuyenbay: this.state.chuyenbay = cb[0] });
        })
            .catch(function (error) {
                console.log(error);
            });

    }
    renderListFlight(){
        var dem=JSON.parse(localStorage.getItem("NumofTicket"));
        let uiItems = [],demm=0;
        while(demm<dem)
            {uiItems.push(<>
            <h3 align="center">Chuyến đi {demm}:<input type="text" className="FlightID" disabled="disabled"></input><input type="text" className="Price" disabled="disabled"></input></h3>
            </>);
            demm++;}
        return uiItems;
    }
    render() {


        return (
            <>
                {this.renderListFlight()}
                <table className="Ticket-table">
                    <tbody>
                        <tr>
                            <th>Tên hảng máy bay</th>
                            <th>Từ</th>
                            <th>Đến</th>
                            <th>Thời gian đi</th>
                            <th>Thời gian đến</th>
                            <th>Giá tiền</th>
                            <th></th>
                        </tr>
                        <tr style={{ height: "30px" }}></tr>
                        {this.renderList()}
                    </tbody>
                </table>
            </>
        )
    }
}

export default GetJson;