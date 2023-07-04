import axios from 'axios';
import { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import {
  Link,
} from "react-router-dom"
import Image from './Image';

const REGEX = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
}
const api = "https://6496d60c83d4c69925a326f0.mockapi.io/"
function Login (props) {

  const navigate = useNavigate()
  const [ isExpand , setExpand ] = useState("false")
  const [ account , setAccount] = useState([])
  const [ form, setForm ] = useState({
      username:"",
      password:"",
  })
  const [ error, setError ] = useState({
      username:"",
      password:"",
  })
  useEffect(() => {
      axios.get(
        `${api}/Username/`,
      )
        .then(res => {
          setAccount(res.data)
        })
        .catch(res => {
          console.log(res)
        })
    }, [])


function handleSubmit(e){
e.preventDefault();
const errorClone = {
  username:"",
  password:"",
}
var haveError = false
if(!form.username){
  errorClone["username"] = "Vui lòng điền username"
  haveError = true
}
else if (!REGEX.email.test(form.username)) {
  errorClone["username"] = "Không đúng định dạng email"
  haveError = true
}
if (!form.password) {
  errorClone["password"] = "Vui lòng điền password"
  haveError = true
}

setError(errorClone)
if(haveError) return

for ( let item of account){

  if ( form.username == item.name && form.password == item.password){
    alert("Đăng nhập thành công")
    navigate("/admin")
    return
  }
}
alert("Đăng nhập thất baị")
}
function handleChange(e){
setForm({
  ...form,
  [e.target.name]:e.target.value,
})
}
  function expand(){
    if (isExpand == "false") {
      setExpand("true")
    }
     else {
      setExpand("false")
     }
    }

function hander(){
  expand()
}
    return <div>
      <div style={{backgroundImage:`url("https://s1.img.yan.vn//YanNews/2167221/201508/20150813-031526-12%20(2)_520x292.gif")`,backgroundRepeat:"no-repeat",backgroundSize:"100%",height:"100vh",width:"100%"}}>
        
  <button style={{width:200 , position:"absolute" , left:650 , top: 300 } } onClick={expand} >Login</button>
  <div className='modal' style={isExpand == "false" ? {display:"none"} : {display:"block"} }>
  <form onSubmit={handleSubmit} className="modal-content animate" >


    <div className="container">
      <label for="uname"><b>Username</b></label>
      <input type="text" value={form.username} placeholder="Enter Username" name="username" onChange={handleChange}/>
      {(error.username !== "") ? <p style={{color:"red"}} >{error.username}</p> : null}

      <label for="psw"><b>Password</b></label>
      <input type="password" value={form.password} placeholder="Enter Password" name="password" onChange={handleChange}/>
      {(error.password !== "") ? <p style={{color:"red"}} >{error.password}</p> : null}


      <button >Login</button>
      <label>
        <input type="checkbox" checked="checked" name="remember"/> Remember me
      </label>
    </div>

    <div className="container" style={{backgroundColor:"#f1f1f1"}}>
      <button type="button"  onClick={hander} className="cancelbtn">Cancel</button>
    </div>
  </form>
  </div>
</div>
</div>
}

export default Login