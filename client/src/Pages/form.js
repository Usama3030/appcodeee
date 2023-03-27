import React from 'react'
import { useState } from "react";
import Axios from 'axios';
import './style.css';
const Form = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [mobile, setMobile] = useState(0);
  const [pswd, setPswd] = useState("");
  const [add, setAdd] = useState("");
  

  const [newName, setNewName] = useState('');

  const [studentList, setStudentList] = useState([]);

  const addStudent = () => {
    Axios.post('http://localhost:8080/create', {
      name: name,
      email: email,
      age: age,
      mobile: mobile,
      pswd: pswd,
      add: add,
    }).then(() => {
      setStudentList([
        ...studentList,
        {
          name: name,
          email: email,
          age: age,
          mobile: mobile,
          pswd: pswd,
          add: add,
        },
      ]);
    });
  };

  const getStudent = () => {
    Axios.get("http://localhost:8080/student").then((response) => {
      setStudentList(response.data);
    });
  };

  const updateStudentName = (id) => {
    Axios.put("http://localhost:8080/update", { name: newName, id: id }).then(
      (response) => {
        setStudentList(
          studentList.map((val) => {
            return val.id === id
              ? {
                  id: val.id,
                  name: val.name,
                  email: val.email,
                  age: val.age,
                  mobile: val.mobile,
                  pswd: val.pswd,
                  add: val.add,
                }
              : val;
          })
        );
      }
    );
  };

  const deleteStudent = (id) => {
    Axios.delete(`http://localhost:8080/delete/${id}`).then((response) => {
      setStudentList(
        studentList.filter((val) => {
          return val.id === id;
        })
      );
    });
  };

  return (
    <div className="App">
      <div className="information">
        <label>Name:</label>
        <input
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label>Email:</label>
        <input
          type="text"
          onChange={(event) => {
            setEmail(event.target.value)
          }}
        />
        <label>Age:</label>
        <input
          type="number"
          onChange={(event) => {
            setAge(event.target.value)
          }}
        />
        <label>Mobile:</label>
        <input
          type="number"
          onChange={(event) => {
            setMobile(event.target.value)
          }}
        />
        <label>Password:</label>
        <input
          type="text"
          onChange={(event) => {
            setPswd(event.target.value);
          }}
        />
        <label>Address:</label>
        <input
          type="text"
          onChange={(event) => {
            setAdd(event.target.value);
          }}
        />
       
        <button onClick={addStudent}>Add Student</button>
      </div>
      <div className="students">
        <button onClick={getStudent}>Show Student</button>

        {studentList.map((val, key) => {
          return (
            <div className="student">
              <div>
                <h3>Name: {val.name}</h3>
                <h3>Email: {val.email}</h3>
                <h3>Age: {val.age}</h3>
                <h3>Mobile: {val.mobile}</h3>
                <h3>Password: {val.pswd}</h3>
                <h3>Address: {val.add}</h3>
              </div>
              <div>
                <input
                  type="text"
                  placeholder=""
                  onChange={(event) => {
                    setNewName(event.target.value);
                  }}
                />
                <button
                  onClick={() => {
                    updateStudentName(val.id);
                  }}
                >
                  {" "}
                  Update
                </button>

                <button
                  onClick={() => {
                    deleteStudent(val.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    
  );
  
}

export default Form
