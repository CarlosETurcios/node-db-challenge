const db = require('./data/db.confing');

module.exports = {
  addProjects,
  getProjects,
  addTasks,
  getTasks,
  addResources,
  getResources,
  getprojectResources,
};

function addProjects(projects) {
  return db('projects').insert(projects);
}

function getProjects() {
  return db('projects');
}

function addTasks(tasks) {
  return db('tasks').insert(tasks);
}
function getTasks() {
  return db('tasks')
    .join('projects', 'tasks.project_id', 'projects.id')
    .select(
      'tasks.task_name',
      'tasks.project_id',
      'tasks.description',
      'tasks.notes',
      'projects.description',
      'projects.project_name',
      'tasks.completed'
    );
}

function addResources(resource) {
  return db('resource').insert(resource);
}

function getResources() {
  return db('resource');
}

function getprojectResources() {
  return db('project_resource');
}
