const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const Student = require("./models/students");
require("./db/conn");
app.use(express.json());
// app.get("/", (req,res) => {
//     res.send("Home page Connected");
// })
// create a new student
app.post("/students", (req,res)=> {
    console.log(req.body)
    const user = new Student(req.body);
    user.save().then(() => {
        res.status(201).send(user);
    }).catch((error) => {
         res.status(404).send(error);
    })
})

app.listen(port, () => {
    console.log(`listen from ${port}`);
});