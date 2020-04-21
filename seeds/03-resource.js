exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('resource')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resource').insert([
        { resource_name: 'computer', description: 'laptop' },
      ]);
    });
};
