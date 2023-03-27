import React from 'react'
import { NavLink} from 'react-router-dom'

import './style.css';
// styleline50
const Professors = () => {
  return (
    <div className="container-fluid Professors">
        <div>
            <button className="p-3 btn btn-primary justify-content-around align-items-center rounded" style={{}}>
        <NavLink to="/Professors/form" style={{ textDecoration: "none", color: "black"}} >
        ADD Professors
            </NavLink>
            </button>
        </div>
        
        <div className="row">
          <div className="col-md-12 p-1 ">
            <div className="header justify-content-around align-items-center">
           <h3>Professors List</h3>
            </div>
            </div>
          </div>
   
    <div className="row">
          <div className="col-md-12 p-1">
           
<table class="table table-dark" align="center">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Professor Name</th>
      <th scope="col">Email</th>
      <th scope="col">Contact</th>
      <th scope="col">Course</th>
      <th scope="col">Department</th>
      <th scope="col">Address</th>
      <th scope="col">Code</th>
      <th scope="col">Active</th>
      
      <th scope="col">Option</th>
    </tr>
  </thead>
       
           
            <tbody>
                <tr>
                <th scope="row">01</th>
                <td>Usama</td>
                <td>usama@gmail.com</td>
                <td>0304-5509363</td>
                <td>CS & IT</td>
                <td>CS & IT</td>
                <td>Sargodha DHA</td>
                <td>1234</td>
                <td>yes</td>        
                <td>
                    <button type="button" class="btn btn-warning" >Edit</button>  
                    <button type="button" class="btn btn-danger" >Delete</button>
                </td>
                </tr>
            </tbody>
           
              </table>
            </div></div>
    </div>
  )
}

export default Professors
