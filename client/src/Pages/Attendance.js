import React from 'react'
import { NavLink} from 'react-router-dom'


const Attendance = () => {



  return (
  

<div>
<NavLink to="/">Home</NavLink>
       <h1>Professor Details</h1>
       <div class="container mt-4" >
       <form class="row g-3">
       <div class="col-md-4">
    <label for="pfname" class="form-label">First Name</label>
    <input type="text" class="form-control" id="pfname" />
  </div>
  <div class="col-md-4">
    <label for="plname" class="form-label">Last Name</label>
    <input type="text" class="form-control" id="plname" />
  </div>
  <div class="col-md-4">
    <label for="pcontact" class="form-label">Contact no.</label>
    <input type="text" class="form-control" id="pcontact" />
  </div>
  <div class="col-md-6">
    <label for="pemail" class="form-label">Email</label>
    <input type="email" class="form-control" id="pemail" />
  </div>
  <div class="col-md-4">
    <label for="ppin" class="form-label">4 Digit Password</label>
    <input type="password" class="form-control" id="ppin" />
  </div>
  <div class="col-md-4">
    <label for="psubject" class="form-label">Subject</label>
    <input type="text" class="form-control" id="psubject" />
  </div>
  <div class="col-md-4">
    <label for="pdepart" class="form-label">Department</label>
    <input type="text" class="form-control" id="pdepart" />
  </div>
  <div class="col-12">
    <label for="pAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="pAddress" placeholder="1234 Main St" />
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity" />
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Zip</label>
    <input type="text" class="form-control" id="inputZip" />
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck" />
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Sign in</button>
  </div>
</form>
          </div>
 
<table class="table table-dark" align="center">
  <thead>
    <tr>
      <th scope="col">Student Id</th>
      <th scope="col">Student Name</th>
      <th scope="col">Course</th>
      <th scope="col">Fee</th>
      
      <th scope="col">Option</th>
    </tr>
  </thead>
       
           
            <tbody>
                <tr>
                <th scope="row">id</th>
                <td>name</td>
                <td>csss</td>
                <td>feee</td>        
                <td>
                    <button type="button" class="btn btn-warning" >Edit</button>  
                    <button type="button" class="btn btn-danger" >Delete</button>
                </td>
                </tr>
            </tbody>
           
              </table>
       </div>
  )
}

export default Attendance
