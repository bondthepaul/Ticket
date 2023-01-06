import React from "react";
import './Content.css';
import { Link } from "react-router-dom";

export class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 1, checked1: true, checked2: false }
        this.handleCheck = this.handleCheck.bind(this)
        this.handleAddingDivs = this.handleAddingDivs.bind(this)
        this.handleDeletingDivs = this.handleDeletingDivs.bind(this)
        this.storeSoHanhKhack = this.storeSoHanhKhack.bind(this)
    }
    popupbutton() {
        var x = document.getElementsByClassName("popupbutton");
        if (x[0].style.display !== "none")
            x[0].style.display = "none";
        else x[0].style.display = "block";
    }
    handleCheck() {
        console.log(this.state.checked1);
        console.log(this.state.checked2);
        this.setState({ checked1: !this.state.checked1 });
        this.setState({ checked2: !this.state.checked2 });
        var x = document.getElementsByName("checkbox");
        x[0].checked = this.state.checked1; x[1].checked = this.state.checked2;
        if (this.state.checked1) this.setState({ count: this.state.count = 1 });
        this.popupbutton();
        console.log(this.state.checked1);
        console.log(this.state.checked2);
    }
    handleAddingDivs() {
        if (this.state.count < 5)
            this.setState({ count: this.state.count + 1 })
    }
    handleDeletingDivs() {
        if (this.state.count > 1)
            this.setState({ count: this.state.count - 1 })
    }
    renderDivs() {
        let count = this.state.count, uiItems = [];
        console.log(count);
        while (count--)
            uiItems.push(
                <div key={count}>
                    <select placeholder="Nhập tên điểm đi" name="DiemDi" className="Form">
                        <option value="">Nhập tên điểm đi</option>
                        <option value="Đà Nẵng">Đà Nẵng</option>
                        <option value="Sài Gòn">Sài Gòn</option>
                        <option value="Hà Nội">Hà Nội</option>
                    </select>
                    <select placeholder="Nhập tên điểm đến" className="Form1">
                        <option value="">Nhập tên điểm đến</option>
                        <option value="Đà Nẵng">Đà Nẵng</option>
                        <option value="Sài Gòn">Sài Gòn</option>
                        <option value="Hà Nội">Hà Nội</option>
                    </select>
                    <input type="date" placeholder="Ngày đi" className="Form2" />
                </div>
            )
        return uiItems;
    }
    storeSoHanhKhack() {

        var y = document.getElementsByClassName("Form");
        var from = [...y].map(input => input.value);
        //console.log('ass'+x.value)
        localStorage.setItem("NoiDi", JSON.stringify(from));

        y = document.getElementsByClassName("Form1");
        from = [...y].map(input => input.value);
        //console.log('ass'+x.value)
        localStorage.setItem("NoiDen", JSON.stringify(from));

        y = document.getElementsByClassName("Form2");
        from = [...y].map(input => input.value);
        //console.log('ass'+x.value)
        localStorage.setItem("NgayDi", JSON.stringify(from));

        var x = document.getElementById("SoHanhKhach");
        //console.log('ass '+JSON.parse(localStorage.getItem("NoiDi")));
        localStorage.setItem("NumOfPeople", JSON.stringify(x.value));
        x = document.getElementById("loaighe");
        //console.log('ass '+JSON.parse(localStorage.getItem("NoiDi")));
        localStorage.setItem("Seat", JSON.stringify(x.value));
        localStorage.setItem("NumofTicket", JSON.stringify(this.state.count));
    }
    render() {
        return (
            <div className="Content">
                <div className="Checkallbox" ><label class="container" style={{ paddingRight: 20 }}>Một chiều
                    <input type="checkbox" name="checkbox" onChange={this.handleCheck} defaultChecked={this.state.checked1} />
                    <span class="checkmark"></span>
                </label>
                    <label class="container">Nhiều thành phố
                        <input type="checkbox" name="checkbox" onChange={this.handleCheck} defaultChecked={this.state.checked2} />
                        <span class="checkmark"></span>
                    </label></div>
                <div className='container'>
                    {this.renderDivs()}
                </div>
                <div className="popupbutton">
                    <button onClick={this.handleAddingDivs} className="Special-button-add">Thêm chuyến bay</button><button onClick={this.handleDeletingDivs} className="Special-button-delete">Xóa chuyến bay</button>
                </div>
                <div style={{ marginBottom: "10px" }}>

                    <div>
                        <input type="number" placeholder="Số hành khách" id="SoHanhKhach" value={1} />
                        Loại ghế:
                        <select className="Select-option" id="loaighe">
                            <option value="0">Phổ thông</option>
                            <option value="1">Phổ thông đăc biệt</option>
                            <option value="2">Thương gia</option>
                            <option value="3">Hạng nhất</option>
                        </select>
                    </div>
                </div>
                <Link to="/GetJson" type="button" onClick={this.storeSoHanhKhack} className="Special-button">Tìm kiếm</Link>
            </div>
        )
    }
}
export default Content;
