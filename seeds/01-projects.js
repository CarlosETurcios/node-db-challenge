exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('projects')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          project_name: 'making a data base',
          description: 'learining how to make data bases ',
          completed: 'true',
        },
      ]);
    });
};
