exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('tasks')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          task_name: 'make seeds',
          project_id: '1',
          description: 'making seeds for database',
          notes: 'remember everything',
          completed: 'false',
        },
      ]);
    });
};
