const express = require('express');
const router = express.Router();
const teacher= require('../modules/teacherModule');

router.get('/get', teacher.getTeacher);

router.post('/create', teacher.createTeacher);

router.put('/update/:teacherId', teacher.updateTeacher);

router.delete('/delete/:teacherId', teacher.deleteTeacher);

module.exports = router;