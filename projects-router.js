const express = require('express');
const router = express.Router();
const db = require('./project-model');

router.get('/projects', (req, res) => {
  db.getProjects()
    .then((project) => {
      res.json(project);
    })
    .catch((err) => {
      res.status(500).json({ message: 'failed to retrieve any users', err });
    });
});

router.post('/projects', (req, res) => {
  const projectData = req.body;
  db.addProjects(projectData)
    .then((project) => {
      res.json(project);
    })
    .catch((err) => {
      res.status(500).json({ message: 'failed to create a new project', err });
    });
});

router.get('/tasks', (req, res) => {
  db.getTasks()
    .then((task) => {
      console.log(task);
      res.json(task);
    })
    .catch((err) => {
      res.status(500).json({ message: 'failed to get task', err });
    });
});

router.post('/tasks', (req, res) => {
  const taskData = req.body;
  console.log('hello');
  db.addTasks(taskData)
    .then((task) => {
      console.log(task);

      res.json(task);
    })
    .catch((err) => {
      res.status(500).json({ message: 'failed to post tasks', err });
    });
});

router.post('/resource', (req, res) => {
  const resData = req.body;
  db.addResources(resData)
    .then((res) => {
      res.json(res);
    })
    .catch((err) => {
      res.status(500).json({ message: 'could not add resource', err });
    });
});

router.get('/resource', (req, res) => {
  db.getResources()
    .then((re) => {
      res.json(re);
    })
    .catch((err) => {
      res.status(500).json({ message: 'could not get resources', err });
    });
});
router.get('/project_resource', (req, res) => {
  db.getprojectResources()
    .then((pr) => {
      res.json(pr);
    })
    .catch((err) => {
      res.status(500).json({ message: 'could not get informaion', err });
    });
});

module.exports = router;
