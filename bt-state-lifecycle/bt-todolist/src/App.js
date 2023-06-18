import { Component} from "react";
import React from "react";
import FormTodo from "./components/FormTodo"
import Table from "./components/Table"

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      list : ["đi học", "đi chơi"]
    }
    this.submit_list = this.submit_list.bind(this)
  }
  submit_list(get_value){
    console.log(get_value)
    var listt = get_value
    const todoList = [...this.state.list]
    todoList.push(listt)
    this.setState({list:todoList})

  }
  
  render(){
    console.log(this.state.list)
    return <>
    <FormTodo submitList={this.submit_list}/>
    <Table listtodo = {this.state.list}/>
    
    </>
  }
}

export default App;
