import React from "react";
import "./Partner3.css";
import { Link } from "react-router-dom";
class Partner3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { chuyenbay:"" };
    }
    componentDidMount() {
        var axios = require('axios');
        var id=JSON.parse(localStorage.getItem("FlightID")); 
        var config = {
            method: 'get',
            url: 'http://128.199.198.243:1001/api/v1/flights/'+id,
            headers: {}
        };
        console.log(config);
        axios(config)
            .then(response=> {
                console.log(JSON.stringify(response.data));
                var s = JSON.stringify(response.data);
                const flight = JSON.parse(s);
                this.setState({ chuyenbay: this.state.chuyenbay = flight[0] });
                console.log(this.state.chuyenbay);
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
                        <div><h1>Thông tin chuyến bay</h1></div>
                    </div>

                </div>
                <div>
                    <form className="FormTaoChuyenBay1" >
                        <div style={{ display: "flex" }}>
                            <div style={{ marginRight: '30px', textAlign: "right", width: '300px' }} className="ThongTin">
                                <div style={{ marginBottom: '10px' }}>Từ</div>
                                <div style={{ marginBottom: '10px' }}>Đến</div>
                                <div style={{ marginBottom: '10px' }}>Thời gian đi</div>
                                <div style={{ marginBottom: '10px' }}>Thời gian đến</div>
                                <div style={{ marginBottom: '10px' }}>Số ghế phổ thông</div>
                                <div style={{ marginBottom: '10px' }}>Số ghế phổ thông đặc biệt</div>
                                <div style={{ marginBottom: '10px' }}>Số ghế thương gia</div>
                                <div style={{ marginBottom: '10px' }}>Số ghế nhất</div>
                                <div style={{ marginBottom: '10px' }}>Giá vé phổ thông</div>
                                <div style={{ marginBottom: '10px' }}>Giá vé phổ thông đặc biệt</div>
                                <div style={{ marginBottom: '10px' }}>Giá vé thương gia</div>
                                <div style={{ marginBottom: '10px' }}>Giá vé nhất</div>
                                <div style={{ marginBottom: '10px' }}>Hảng máy bay</div>
                            </div>
                            <div style={{ textAlign: "left", width: '500px' }}>
                            {
                            <>
                            <div style={{ marginBottom: '10px' }}>{this.state.chuyenbay.FromCity}</div>
                            <div style={{ marginBottom: '10px' }}>{this.state.chuyenbay.ToCity}</div>
                            <div style={{ marginBottom: '10px' }}>{this.state.chuyenbay.DepartTime}</div>
                            <div style={{ marginBottom: '10px' }}>{this.state.chuyenbay.ArrivalTime}</div>
                            <div style={{ marginBottom: '10px' }}>{this.state.chuyenbay.SeatsClassA}</div>
                            <div style={{ marginBottom: '10px' }}>{this.state.chuyenbay.SeatsClassB}</div>
                            <div style={{ marginBottom: '10px' }}>{this.state.chuyenbay.SeatsClassC}</div>
                            <div style={{ marginBottom: '10px' }}>{this.state.chuyenbay.SeatsClassD}</div>
                            <div style={{ marginBottom: '10px' }}>{this.state.chuyenbay.SeatsClassAPrice}</div>
                            <div style={{ marginBottom: '10px' }}>{this.state.chuyenbay.SeatsClassBPrice}</div>
                            <div style={{ marginBottom: '10px' }}>{this.state.chuyenbay.SeatsClassCPrice}</div>
                            <div style={{ marginBottom: '10px' }}>{this.state.chuyenbay.SeatsClassDPrice}</div>
                            <div style={{ marginBottom: '10px' }}>{this.state.chuyenbay.AirlineID}</div></>
                            }
                            </div>
                        </div>
                    </form>
                    <div style={{ display: "flex", margin: 'auto' }}>
                        <div style={{ marginTop: '10px', marginLeft: '300px' }}>
                            <Link to="/partner" > <button className="btnTao">Trở lại</button></Link>
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>




    }
}
export default Partner3;