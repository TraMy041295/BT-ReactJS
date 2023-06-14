import { Component } from "react";
import StudentInfo from "./Component/StudentInfo";
import './App.css';

class App extends Component{
  constructor(props){
    super(props)
    this.ListInfo = [
      {id:1,name:"Nguyễn Văn A",Age:30,Address:"Hà Nội"},
      {id:2,name:"Nguyễn Văn B",Age:31,Address:"Đà Nẵng"},
      {id:3,name:"Nguyễn Văn C",Age:32,Address:"TPHCM"},
    ]
  }
  render(){
    return <>
    <StudentInfo ListStudent={this.ListInfo}/>
    </>
  }
}

export default App;
