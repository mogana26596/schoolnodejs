const express = require('express');
const router = express.Router();
const student= require('../modules/studentModule');

router.get('/get', student.getStudent);

router.post('/create', student.createStudent);

router.put('/update/:studentId', student.updateStudent);

router.delete('/delete/:studentId', student.deleteStudent);

module.exports = router;