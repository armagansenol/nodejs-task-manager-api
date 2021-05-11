const express = require('express');
require('./db/mongoose');
var cors = require('cors');
const userRouter = require('./routers/userRouter');
const taskRouter = require('./routers/taskRouter');

const app = express();

app.use(express.json());

app.options('*', cors());
app.use(cors());

app.use(userRouter);
app.use(taskRouter);

module.exports = app;
