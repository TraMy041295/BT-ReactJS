import { Component } from "react";


class StudentInfo extends Component{
    constructor(props){
        super(props)
        
    }


render() {
    return <table class="table">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Name</th>
        <th scope="col">Age</th>
        <th scope="col">Address</th>
      </tr>
    </thead>
    <tbody>
      {this.props.ListStudent.map(item=>
      <tr>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.Age}</td>
          <td>{item.Address}</td>
          
      </tr>
      )}
    </tbody>
  </table>

}
}






export default StudentInfo;
