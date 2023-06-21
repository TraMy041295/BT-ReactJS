import './App.css';
import { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      studentList: [{ name: "my", phone: "090", email: "mynguyen", id: 1 }],
      form: {name: "", phone: "", email: "", id: ""},
      isValid: false,
      indexSelected: -1
    }
    console.log(this.state.form)
  }
  handleChange = (event) => {
    this.setState((state) => {
      const form = state.form
      form[event.target.name] = event.target.value
      return { form }
    }, () => this.checInvalidForm())
  }
  checInvalidForm = () => {
    const { name, phone, email } = this.state.form
    const value = name && phone && email
    this.setState({
      isValid: value
    })
  }
  handleSelect = (e,item) => {
    this.setState({form:item})
   
  }
  
  handleSubmit = (form) => {
  
    if (this.state.isValid) {
      const newList = this.state.studentList
      if (form.id === undefined) {
        newList.push({...this.state.form,id:Math.floor(Math.random()*1000)})
        this.setState({ studentList: newList,form:{name: "", phone: "", email: "", id: ""} })
      } else if ( form.id !== undefined){
        const index = newList.findIndex(item=>item.id === form.id)
        newList[index] = {...this.state.form}
        this.setState({form:{name: "", phone: "", email: "", id: ""}})
        
      }
      
    }
  }
  handleDelete = (e,id) => {
     
    this.setState({
      studentList : this.state.studentList.filter(item=>item.id!==id)
    })
  }


  render() {
    const { studentList, form } = this.state
    return (
      <div>
        <div>
          <h1>Student List</h1>
          <div>
            <label>Name: </label>
            <input name="name" value={form.name} onChange={this.handleChange} />
          </div>
          <div>
            <label>Phone: </label>
            <input type="number" name="phone" value={form.phone} onChange={this.handleChange} />
          </div>
          <div>
            <label>Email: </label>
            <input name="email" value={form.email} onChange={this.handleChange} />
          </div>
          <button onClick={this.handleSubmit}>Submit</button>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {studentList.map(item =>
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.phone}</td>
                  <td>{item.email}</td>
                  <td>
                    <button onClick={(e)=>{this.handleSelect(e,item)}} className={/*(this.props.choose_book.id == item.id) ? 'btn btn-primary' : 'btn btn-info'*/"null"}>Sửa</button>
                    <button onClick={(e)=>{this.handleDelete(e,item.id)}} className="btn btn-danger">Xóa</button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    )
  }

}

export default App;
