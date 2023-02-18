const express = require('express');
const mongo = require('./connect');
const cors = require('cors');
const dotenv = require('dotenv');
const register1 = require('./router/registerRouter');
const student = require('./router/studentRouter');
const teacher = require('./router/teacherRouter');

dotenv.config();
mongo.connect();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/register', register1);
app.use('/student', student);
app.use('/teacher', teacher);
app.listen(process.env.PORT);