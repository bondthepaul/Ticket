import React from "react";
import "./Cart.css"
class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ticket: []
        }
        this.renderlistTicket=this.renderlistTicket.bind(this)
    }
    componentDidMount() {
        var customerID = localStorage.getItem("CustomerID");
        var axios = require('axios');

        var config = {
            method: 'get',
            url: 'http://128.199.198.243:1001/api/v1/tickets/' + customerID,
            headers: {}
        };

        axios(config)
            .then(response => {
                var tam = JSON.stringify(response.data);
                //getlist(tam);
                //console.log(tam);
                const cb = JSON.parse(tam)
                //console.log(cb);
                this.setState({ ticket: this.state.ticket = cb });
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    renderlistTicket(){
        let uiItems = [];
        console.log(this.state.ticket);
        this.state.ticket.map(item=>{
            uiItems.push(<>
            <tr className="TRTR" key={item.TicketID}>
            <td>{item.TicketID}</td>
            <td>{item.NumberOfPassenger}</td>
            <td>{item.SeatClass}</td>
            <td>{item.Price}</td>
            <td>{item.DateOfPurchase}</td>
            </tr>
            </>)
        })
        if(this.state.ticket.length==0) return <h2 align="center">Rỗng</h2>
        else return uiItems;
    }
    render() {
        return <div>
            <h1>Lịch sử giao dịch</h1>
            <table align="center" className="Ticket-table">
                <tbody>
                    <tr>
                        <th>
                        Mả vé
                        </th>
                        <th>
                        Số người đi
                        </th>
                        <th>
                        Loại ghế
                        </th>
                        <th>
                        Giá tiền / 1 người 
                        </th>
                        <th>
                        Ngày mua
                        </th>
                    </tr>
                {this.renderlistTicket()}
                </tbody>
            </table>
            <h2 align="center"></h2>
        </div>
    }
}
export default Cart;