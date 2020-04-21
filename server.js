const express = require('express');
const tasksrouter = require('./tasks-router');
const projectsrouter = require('./projects-router');
const resourcerouter = require('./resource-router');
const server = express();
server.use(express.json());
server.use('/tasks', tasksrouter);
server.use('/projects', projectsrouter);
server.use('/resource', resourcerouter);

server.get('/', (req, res) => {
  res.send('we are receiveing data from the api request api');
});
server.use((error, req, res, next) => {
  res.status(400).json({ message: '', error });
});

module.exports = server;
