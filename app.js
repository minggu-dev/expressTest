const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "test",
  password: "alwpf00",
  port: 3306,
  database: "MY_TEST",
});

con.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
});

app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/`));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  con.query("select * from MEMOS", (err, rows, fields) => {
    if (err) {
      console.log("데이터 가져오기 실패");
    } else {
      console.log("데이터 가져오기 성공");
      res.render("test1", {});
    }
  });
});

app.get("/test", (req, res) => {
  res.render("test2", {});
});

app.post("/postTest", (req, res) => {
  console.log(req.body); // body에 있는 정보를 콘솔창에 출력
  // 클라이언트에 성공했다고 신호를 보낸다.
  con.query("select * from MEMOS", (err, rows, fields) => {
    if (err) {
      console.log("데이터 가져오기 실패");
    } else {
      console.log("데이터 가져오기 성공");
      console.log(rows);
      res.json({ ok: true });
    }
  });
});

app.listen(port, () => {
  console.log("Example app listening at http://localhost:%s", port);
});
