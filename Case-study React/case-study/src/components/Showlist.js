import { Card, Button, Space } from 'antd';
import {
    UserOutlined
} from '@ant-design/icons';

import { useParams } from "react-router-dom"

import axios from 'axios';
import { useEffect, useState } from 'react';
const { Meta } = Card;

function ShowList(props) {
    const { listStu } = props
    return <div style={{marginLeft:300 }}>
        <div  >

            <h1 className='col-md-9' style={{ textAlign: "center" }}>DANH SÁCH HỌC SINH</h1>
        </div>
        <div className='row mx-5 my-5 '>
            {listStu.map(item =>
                <div style={{ border: "1px solid red", padding: "0", margin: "0", backgroundColor: "wheat" }} className='col-md-3 row justify-content-center'><Card
                    hoverable
                    style={{ width: 300 }}
                    cover={<img style={{ height: 350 }} alt="example" src={item.avatar} />}
                >
                    <Meta title={item.name} />
                    <p>Giới tính : {item.gender}</p>
                    <p>STT : {item.id}</p>
                </Card>
                </div>
            )}
        </div>

    </div>
}

export default ShowList
