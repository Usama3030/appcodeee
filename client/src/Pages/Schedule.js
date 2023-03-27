import React from 'react'


const Schedule = () => {
  
  return (
    <div>
    <h1>TimeTable</h1>
       <div class="container mt-4" >
    <form class="row g-3">
  <div class="col-md-6">
    <label for="inputname" class="form-label">Professor Name</label>
    <input type="text" class="form-control" id="inputname" />
  </div>
  <div class="col-md-6">
    <label for="inputclass" class="form-label">CLass</label>
    <input type="text" class="form-control" id="inputclass" />
  </div>
  <div class="col-4">
    <label for="inputsec" class="form-label">Section</label>
    <input type="text" class="form-control" id="inputsec" placeholder="reg/Self" />
  </div>
  <div class="col-4">
    <label for="inputsession" class="form-label">Sesssion</label>
    <input type="text" class="form-control" id="inputsession" placeholder="" />
  </div>
  <div class="col-4">
    <label for="inputsemester" class="form-label">Semester</label>
    <input type="text" class="form-control" id="inputsemester" placeholder="" />
  </div>
  <div class="col-md-2">
  <label for="start-time-input">Start Time:</label>
  <input type="time" class="form-control" id="start-time-input" name="start-time" />
    </div>
    <div class="col-md-2">
  <label for="end-time-input">End Time:</label>
  <input type="time" class="form-control" id="end-time-input" name="end-time" />
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
    <button type="submit" class="btn btn-primary">Submit</button>
  </div>
</form>
</div>
</div>
  )
}

export default Schedule
