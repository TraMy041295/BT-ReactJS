import { Component } from "react";


class Introduce extends Component {
    constructor(props) {
        super(props)
        this.handler = this.handler.bind(this)
        
    }
    handler(){
        this.props.isExpand()
        console.log("trong",this.props.value)
    }
    render() {
        return <>
            <h1 style={{backgroundColor:"green",color:"white"}}>Conditional Rendering</h1>
            <button onClick={this.handler} >{this.props.value == "true" ? "Đóng giới thiệu":"Mở giới thiệu"}</button>
            <p style={this.props.value == "false" ? {display:"none"}:{display:"block"}} >
                Trong Reacts, dôi khi ban có môt só component và tuy thuôc vão tüng dièu
                kiên vi du nhu trang thái cua state, props,... mà ban muôn hiên thi môt hoàc
                môt sô component não dó. Khi dó ban có thê sù dung Conditional rendering dê
                render ra component mà ban mong muôn.
            </p>
        </>
    }
}

export default Introduce