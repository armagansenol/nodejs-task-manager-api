const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/userRouter');
const taskRouter = require('./routers/taskRouter');

const app = express();

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);
app.use(require('cors')());

module.exports = app;
