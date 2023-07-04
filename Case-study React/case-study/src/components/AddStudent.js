import {useState} from 'react'
import { useNavigate, useParams } from "react-router-dom"

function AddStudent(props) {
    const { addStudent , listStu ,value } = props
    const [ form , setForm ] = useState({
        name:"",
        gender:"",
        avatar:"",
        dateofbirth:""
    })
    const navigate = useNavigate()
    const id = useParams().id
console.log(value)
function handleChange(e){
setForm({
...form,
    [e.target.name]:e.target.value
})
}
// if(id != null){
//     const index = listStu.findIndex(item=>item.id==id)
//     form.name = listStu[index].name
//     form.gender = listStu[index].gender
//     form.avatar = listStu[index].avatar
//     form.dateofbirth = listStu[index].dateofbirth
   
// }

function submitBook(e){
e.preventDefault()
addStudent(form)
navigate("/admin/tablestudent")

}
    return <>
    <form style={{marginLeft:300}} onSubmit={submitBook}>
    <div className="row">
        <div className="col-4 mt-5">
            <input placeholder="Tên" name="name" id="input-name" value={form.name} className="form-control" onChange={handleChange}/>
        </div>
        <div className="col-4 mt-5">
            <input placeholder="Giới tính" name="gender" id="input-avatar" value={form.gender} className="form-control" onChange={handleChange} />
        </div>
        <div className="col-4 mt-5">
            <input placeholder="Hình ảnh" name="avatar" id="input-avatar" value={form.avatar} className="form-control" onChange={handleChange}/>
        </div>
        <div className="col-4 mt-5">
            <input placeholder="Ngày tháng năm sinh" name="dateofbirth" id="input-avatar" value={form.dateofbirth} className="form-control" onChange={handleChange} />
        </div>
        <div className="col-4 mt-5">
            <button className="btn btn-info" id="submit-book" type="submit">
                {(id !== undefined) ? "Edit" : "Create"}
            </button>
        </div>
    </div> 
</form>
</>
}

export default AddStudent