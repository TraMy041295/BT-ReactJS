import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const students = []

var hv1 ={
  company: 'Alfreds Futterkiste',
  contact: 'Maria Anders',
  country: 'Germany'
}

var hv2 ={
    company: 'Alfreds Futterkiste',
    contact: 'Maria Anders',
    country: 'Germany'
  }
var hv3={
    company: 'Centro comercial Moctezuma',
    contact: 'Francisco Chang',
    country: 'Mexico'
  }
var hv4={
    company: 'Ernst Handel',
    contact: 'Roland Mendel',
    country: 'Austria'
  }
var hv5={
    company: 'Island Trading',
    contact: 'Helen Bennett',
    country: 'UK'
  }
var hv6={
    company: 'Laughing Bacchus Winecellars',
    contact: 'Yoshi Tannamuri',
    country: 'Canada'
  }
var hv7={
    company: 'Magazzini Alimentari Riuniti',
    contact: 'Giovanni Rovelli',
    country: 'Italy'
  }

  students.push(hv1,hv2,hv3,hv4,hv5,hv6,hv7)

function renderTable(){
    return <table>
      <thead>
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
      {students.map(student=>(
        <tr>
          <td>{student.company}</td>
          <td>{student.contact}</td>
          <td>{student.country}</td>
        </tr>
      ))}
      </tbody>
    </table>
}

root.render(
  renderTable()
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
