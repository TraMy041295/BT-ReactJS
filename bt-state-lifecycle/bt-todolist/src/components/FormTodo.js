import { Component } from "react";



class FormTodo extends Component {
    constructor(props) {
        super(props)
        this.on_submit = this.on_submit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.state = {value:""}
        console.log(this.state.value)
    }
    on_submit(e){
        e.preventDefault()
        this.props.submitList(this.state.value)
    }
    handleChange (e){
        // console.log(e.target.value)
        this.setState({value:e.target.value})
    }
    
    
    render() {
        return <>
        <h1>Todo List</h1>
            <form style={{width:"50%"}} onSubmit={this.on_submit}>
                <input type="text" name="name" onChange={this.handleChange} />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    }
}

export default FormTodo