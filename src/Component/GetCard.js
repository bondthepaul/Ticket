import React from "react";
import { Link } from "react-router-dom";
import "./GetCard.css";
class GetCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { listitem: [],id:0 };
        this.renderDivs = this.renderDivs.bind(this);
        this.addAllIn=this.addAllIn.bind(this);
        this.addsingleticket=this.addsingleticket.bind(this);
    }
    state = {
        vouchers: []
    }
    addsingleticket(ticketID,flightID,customerID,dateOfPurchase,seatClass,price,numberOfPassenger){
        var axioss = require('axios');
                var configg = {
                    method: 'post',
                    url: 'http://128.199.198.243:1001/api/v1/tickets',
                    headers: {},
                    params: {
                        TicketID: ticketID,
                        FlightID: flightID,
                        CustomerID: customerID,
                        DateOfPurchase: dateOfPurchase,
                        SeatClass: seatClass,
                        Price: price,
                        NumberOfPassenger: numberOfPassenger
                    }
                };
                axioss(configg)
                    .then(function (response) {
                        console.log(JSON.stringify(response.data));
                    })
                    .catch(function (error) {
                        console.log(error);
                    });    
    }
    componentDidMount(){
        var ticketID = 0;
        var axios = require('axios');
            var config = {
                method: 'get',
                url: 'http://128.199.198.243:1001/api/v1/tickets',
                headers: {}
            };

            axios(config).then(response => {
                    console.log(JSON.stringify(response.data));
                    ticketID = JSON.parse(JSON.stringify(response.data)).length + 1;
                    //this.addsingleticket(ticketID,flightID,customerID,dateOfPurchase,seatClass,pricer,numberOfPassenger);
                    this.setState({id:this.state.id=ticketID})
                })
                .catch(function (error) {
                    console.log(error);
                    return 0;
                });
    }
    addAllIn() {

        var flight = JSON.parse(localStorage.getItem("ListFlight"));
        var price = JSON.parse(localStorage.getItem("Price"));
        var ticketID=this.state.id;
        var i=0;
        while(i<flight.length)
        {
            var flightID = flight[i];
            var pricer = price[i];
            var today = new Date();
            var customerID = localStorage.getItem("CustomerID");
            var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            var dateOfPurchase = date + ' ' + time;
            var seatClass = 3 - JSON.parse(localStorage.getItem("Seat"));
            var numberOfPassenger = JSON.parse(localStorage.getItem("NumOfPeople"));
            console.log(ticketID + " " + customerID + " " + dateOfPurchase + " " + seatClass + " " + numberOfPassenger + " " + flightID + " " + pricer);
            console.log(flightID + " " + pricer);
            this.addsingleticket(ticketID,flightID,customerID,dateOfPurchase,seatClass,pricer,numberOfPassenger);
            ticketID++;
            i++;
        }
    }
    renderDivs() {
        let v = this.state.listitem;
        console.log(v);
        let count = v.length;
        let uiItems = [];
        console.log(count);
        while (count--)
            uiItems.push(
                <div>
                    {v[count]}
                </div>
            )
        return uiItems;
    }

    render() {

        return (
            <>
                <div className="App">
                    <h1>Thông tin thẻ ngân hàng</h1>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    Số thẻ
                                </td>
                                <td>
                                    <input type="text" className="Input-sp"></input>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Hiệu lực đến
                                </td>
                                <td>
                                    <input type="date" className="Input-sp"></input>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    CVV
                                </td>
                                <td>
                                    <input type="text" className="Input-sp"></input>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    CVV
                                </td>
                                <td>
                                    <input type="text" className="Input-sp"></input>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Gift card
                                </td>
                                <td>
                                    <select className="Select-sp"><option value="1">1</option><option value="1">2</option><option value="1">3</option></select>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Voucher
                                </td>
                                <td>
                                    <select className="Select-sp">
                                        {this.state.listitem.map(item => <option value={item.voucherCode}>{item.title}</option>)}
                                    </select>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <Link to="/Paymentend" type="button"><button className="Button-sp" onClick={this.addAllIn.bind(this)}>Next</button></Link>
                </div>
            </>

        )

    }
}
export default GetCard;