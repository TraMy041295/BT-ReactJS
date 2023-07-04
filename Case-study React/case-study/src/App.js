
import './App.css';
import './Login.css'
import TableStudent from './components/TableStudents';
import AddStudent from './components/AddStudent';
import Sidebar from './components/Sidebar';
import ShowList from './components/Showlist';
import Login from './components/Login';
import axios from 'axios';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom"


const api = "https://6496d60c83d4c69925a326f0.mockapi.io/"

function App() {
  const [listStudent, setListStudent] = useState([])
  const [value , setValue ] = useState()
 
  useEffect(() => {
    axios.get(
      `${api}/Liststudent/`,
    )
      .then(res => {
        setListStudent(res.data)
      })
      .catch(res => {
        console.log(res)
      })
  }, [])


  function xoa_sach(id){
   axios.delete(`${api}/Liststudent/${id}`)
   .then(res=>{
     const listStudentNew = listStudent.filter(item=>item.id!==id)
     setListStudent(listStudentNew)
   })
  }
  
  function addStudent(item){
    if (item.id !== undefined){
      
      // setValue(item)
      // axios.put(`${api}/Liststudent`,{...item})
      // .then(res=>{
      //   const index = listStudent.findIndex(item=>item.id===form.id)
      //   const listStudentNew = [...listStudent] 
      //   listStudentNew[index] = res.data
      //   setListStudent(listStudentNew)
      // })
    }else {
      axios.post(`${api}/Liststudent`,{...item})
      .then(res=>{
        const listStudentNew = [...listStudent]
        listStudentNew.push(res.data)
        setListStudent(listStudentNew)
       
      })
      item.name = "";
      item.gender = "";
      item.avatar ="";
      item.dateofbirth ="";
    }
    }
    console.log(value)
    // function edit_student(item){
    //   console.log(item)
    // }

  return <>
    <Router >  
      
    <Routes>
     <Route  path="/admin" element={<Sidebar/>} >
      <Route index path="showlist" element={<ShowList listStu={listStudent}/>}/>
      <Route path="tablestudent" element={<TableStudent listStu={listStudent} xoaSach={xoa_sach} addStudent={addStudent}/>}/>
      <Route path="addstudent" element={<AddStudent addStudent={addStudent} />}/>
      <Route path='editstudent/:id' element={<AddStudent listStu={listStudent} addStudent={addStudent} value={value} />}/>
      </Route>
      <Route path="/" element={<Login/>}/>
      
    </Routes>
 

    </Router>

  </>
}

export default App;
