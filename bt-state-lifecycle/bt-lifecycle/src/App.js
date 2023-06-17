import {Component} from "react"
import Introduce from "./components/Introduce";

class App extends Component{
  constructor(props){
    super(props)
    this.state = {isExpand:"true"}
    this.exPand = this.exPand.bind(this)
  }

exPand(){
  if(this.state.isExpand == "true"){
    this.setState({isExpand:"false"})
  }else if (this.state.isExpand == "false"){
    this.setState({isExpand:"true"})}

}

render(){
  return (
    <>
    <Introduce isExpand = {this.exPand} value={this.state.isExpand}/>
    </>
  )
}
}
export default App;
