const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "bytes",
  multipleStatements: true
});

app.post("/create", (req, res) => {

  const name = req.body.name;
  const email = req.body.email;
  const age = req.body.age;
  const mobile = req.body.mobile;
  const pswd = req.body.pswd;
  const add = req.body.add;

  db.query(
    'INSERT INTO student (name, email, age, mobile, password, address) VALUES (?,?,?,?,?,?)',
    [name, email, age, mobile, pswd, add],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.get("/student", (req, res) => {
  db.query("SELECT * FROM student", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/update", (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  db.query(
    "UPDATE `student` SET `name`= ?, `email`= ? ,`age`= ? ,`mobile`= ? ,`password`= ? ,`address`= ?  WHERE id = ?",
    [name, id, email, age, mobile, pswd, add ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM `student` WHERE id = ?", id, 
  (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(8080, () => {
  console.log("Yey, your server is running on port 8080");
});



//let sql = `DELETE FROM student WHERE id =${req.params.id}`; 
//let query = db.query(sql, (err, result) =>{
  // if (err) throw err;
   //console.log("result");
   //res.send("post deleted");
//});