import React, { Component } from "react";
// Getting local JSON file
import Flight from "./data.json";
import "./Partner2.css"
import { Link } from "react-router-dom";
export class Partner2 extends Component {
    
    constructor(props)
    {   
        super(props);
        this.state = {chuyenbay:[]}
        console.log(props.trigger);
       // this.saveFlightID=this.saveFlightID.bind(this);
    }
    componentDidMount(){
        var axios = require('axios');

        var config = {
          method: 'get',
          url: 'http://128.199.198.243:1001/api/v1/flights',
          headers: { }
        };
        var tam="";
        axios(config).then(response=> {
          //console.log(JSON.stringify(response.data.recordsets));
          tam=JSON.stringify(response.data);
         // getlist(tam);
         const cb=JSON.parse(tam).recordsets;
         console.log(cb);
         this.setState({ chuyenbay:this.state.chuyenbay=cb[0]});
        })
        .catch(function (error) {
          console.log(error);
        });
        
    }
    saveFlightID(tmp){
        console.log(tmp);
        localStorage.setItem("FlightID",tmp);
    }
    renderList(){
        let uiItems = [];
        console.log(localStorage.getItem("Types"));
        {this.state.chuyenbay.map(item => {
            if(localStorage.getItem("Types")==item.AirlineID)
            uiItems.push(<><tr className="TRTR" key={item.FlightID}>        
                <td>{item.FromCity}</td>
                <td>{item.ToCity}</td>
                <td>{item.DepartTime}</td>
                <td>{item.ArrivalTime}</td>
                <td>{localStorage.getItem("CustomerName")}</td>
                <td>{item.SeatsClassAPrice}</td>
                <td><Link to="/chitiet" type="button" onClick={this.saveFlightID.bind(this,item.FlightID)}>
                    <button className="Button-sp" >Chi tiết</button></Link></td></tr>
            <tr style={{height: "30px"}}></tr>
            </>
            );

             })}
        return uiItems;
    }
    render() {
         
        return(
            <>
            <div  align="center">
            <Link to="/them"> <button className="Button-sp" style={{width:'300px'}}>Thêm chuyến bay</button></Link>
            </div>
            
                <table className="FlightTable" align="center">
        <tbody>
        <tr>       
        <th>Từ</th>
        <th>Đến</th>
        <th>Thời gian đi</th>
        <th>Thời gian đến</th>
        <th>Hãng máy bay</th>
        <th>Giá tiền</th>
        </tr>   
        <tr style={{height: "50px"}}></tr>                       
        {this.renderList()}           
         </tbody>
        </table>
        
            </>
        
        )  
    }
}

export default Partner2;