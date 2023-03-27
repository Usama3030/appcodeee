
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Reports = () => {
  
  return(
    
    <div>
    
    
            
<table class="table table-dark" align="center">
  <thead>
    <tr>
      <th scope="col">Professor Id</th>
      <th scope="col">Professor Name</th>
      <th scope="col">Course</th>
      <th scope="col">CLass</th>
      <th scope="col">Section</th>
      <th scope="col">Semester</th>
      <th scope="col">TIme</th>

      
      <th scope="col">Option</th>
    </tr>
  </thead>
       
            <tbody>
                <tr>
                <th scope="row">BSEF19M042 </th>
                <td>usama</td>
                <td>ICT</td>
                <td>BSSE</td>  
                <td>Reg</td>  
                <td>8th</td>  
                <td>9:00-10:00</td>        
                <td>
                    <button type="button" class="btn btn-warning"  >Edit</button>  
                    <button type="button" class="btn btn-danger">Delete</button>
                </td>
                </tr>
            </tbody>
           
          
            </table>
            <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                        className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
    </div>
  )
}

export default Reports

   

       
