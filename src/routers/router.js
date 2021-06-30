const express = require("express");
const Student = require("../models/students")
const router = new express.Router();

// create a new student
router.post("/students", (req,res)=> {
    console.log(req.body)
    const user = new Student(req.body);
    user.save().then(() => {
      res.status(201).send(user);
    }).catch((error) => {
         res.status(404).send(error);
    })
})

// create -> Post data
router.post("/students", async (req,res) => {
    try {
        const user = new Student(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
    } catch (error) {
        res.status(404).send(error);
    }
})

// Get > read data
// students data
router.get("/students", async(req,res) => {
    try {
        const studentsData = await Student.find();
        res.status(200).send(studentsData)
    } catch (error) {
        res.status(400).send(error);
    }
})

// individual student data by id.
// router.get("/students/:id", async(req,res) => {
//     try {
//         const _id = req.params.id
//         // console.log(_id);
//         const studentData = await Student.findById(_id);
//         res.send(studentData);
//     } catch (error) {
//         res.send(error);
//     }
// })

// individual student data by name.
router.get("/students/:name", async(req,res) => {
    try {
        const name = req.params.name;
        console.log(name);
        const studentDataByName = await Student.findOne({name});
        console.log(studentDataByName);
        res.status(200).send(studentDataByName);
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})

// delete
router.delete("/students/:id", async(req,res) => {
    try {
        const _id = req.params.id;
        const deleteStudentsData =  await Student.findByIdAndDelete(_id);
        if(!_id) {
            return res.status(400).send();
        }
        res.status(200).send(deleteStudentsData);
        
    } catch (error) {
        res.send(error);
        console.log(error);
    }
})

// Update and patch
router.patch("/students/:name", async(req,res) => {
    try {
        const name = req.params.name;
        const updateData = await Student.findOneAndUpdate(name, req.body, {
            new: true
        });
        res.status(200).send(updateData);
    } catch (error) {
        console.log(error);
        res.status(404).send(error)
    }
})

module.exports = router;