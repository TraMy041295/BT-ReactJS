import { Component } from "react";

class Table extends Component {
  constructor(props){
    super(props)
    console.log(this.props.listtodo)
  }
  
  
  
  render(){
    return<>

    <table >
    <tbody>
      <tr>
        <td>danh sách</td>
        </tr>
        {this.props.listtodo.map((item)=>
          <tr>
          <td>{item}</td>
          </tr>
        )}
        {/* </tr>
        <td>{this.props.listtodo[0]}</td>
        <tr>
        <td>{this.props.listtodo[1]}</td>
      </tr>
      <tr>
        <td>{this.props.listtodo[2]}</td> */}
    
      </tbody>
    </table>
    </>
  }
}

export default Table;