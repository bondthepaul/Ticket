import React from "react";
import "./GetInfo.css";
import { Link } from "react-router-dom";
class GetInfo extends React.Component{
    constructor(props)
    {
        super(props);
    }
    renderDivs(){
        let count = localStorage.getItem("NumOfPeople"), uiItems = [];
        count.trim('"')
        var x=count.length
        console.log(x);
        count=count.substring(1,x-1)
        console.log(count);
        while(count--)
           uiItems.push(
            <div key={count}>
                <h2>Thông tin liên hệ {count}</h2>
            <table>
                <tbody>
                    <tr>
                        <td>
                        Họ và tên
                        </td>
                        <td>
                        <input type="text" className="Input-sp"></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        Số điện thoại
                        </td>
                        <td>
                        <input type="text" className="Input-sp"></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        Email
                        </td>
                        <td>
                        <input type="text" className="Input-sp"></input>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
            )
        return uiItems;
    }
    render()
    {
        return  <div className="App">
            <h1>Thông tin liên hệ</h1>
            {this.renderDivs()}
            <Link to="/GetCard" > <button className="Button-sp">Tiếp theo</button></Link>
        </div>
    }
}
export default GetInfo;