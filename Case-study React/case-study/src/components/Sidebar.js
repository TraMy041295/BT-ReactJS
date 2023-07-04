import TableStudent from "./TableStudents"

import {
    Link, Outlet,
  } from "react-router-dom"
function Sidebar(){

    return<>

    <header class="header" role="banner">
        <h1 class="logo">
          <Link to="/admin/showlist" > <span> Bảng tổng hợp </span></Link>
        </h1>
        <div class="nav-wrap">
          <nav class="main-nav" role="navigation">
            <ul class="unstyled list-hover-slide">
          
              <li><Link to="/admin/tablestudent">Sửa - Xoá Thành viên </Link></li>
              <li><Link to ="/admin/addstudent/">thêm mới</Link></li>
              <li><Link to ="/">Log Out</Link></li>
         
            </ul>
          </nav>

          </div>

        </header>
        <Outlet/>
     
    </>
}
export default Sidebar