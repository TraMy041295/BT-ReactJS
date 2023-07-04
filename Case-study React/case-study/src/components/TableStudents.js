import { Layout, Menu, Icon } from 'antd';
// import React from "react"
import {
  EditFilled,
  DeleteOutlined
} from '@ant-design/icons';
import { Button, Space } from 'antd';
import { useParams, useNavigate } from 'react-router-dom';

function TableStudent(props) {
  const navigate = useNavigate()
  const { listStu, xoaSach , addStudent } = props
  const id = useParams().id
  function xoa_sach(e, id) {
    xoaSach(id)
  }
  function edit_student(e, item) {
    navigate(`/admin/editstudent/${item.id}`)
    addStudent(item)
    
  }
 
  return (
    <>
      <table className="table" style={{marginLeft:300,width:1000}}>
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Avatar</th>
            <th scope="col">gender</th>
            <th scope="col">Dateofbirth</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {listStu.map((item) =>
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td><img style={{ width: 80, heigh: 80 }} src={item.avatar} /></td>
              <td>{item.gender}</td>
              <td>{item.dateofbirth}</td>
              <td><Space wrap>
                <Button onClick={(e) => { edit_student(e, item) }}>
                  <EditFilled />
                </Button>
              </Space>
              </td>
              <td><Space wrap>
                <Button onClick={(e) => { xoa_sach(e, item.id) }} >
                  <DeleteOutlined />
                </Button>
              </Space>
              </td>
            </tr>)}
        </tbody>
      </table>
    </>
  )

}
export default TableStudent