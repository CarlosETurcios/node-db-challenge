exports.up = function (knex) {
  //the change we want to make to our schema
  //one project has many tasks
  return knex.schema
    .createTable('projects', (tbl) => {
      tbl.increments();
      tbl.string('project_name', 128).notNullable().unique();
      tbl.text('description');
      tbl.boolean('completed').defaultTo(false);
    })
    .createTable('tasks', (tbl) => {
      tbl.increments();
      tbl.string('task_name').unique();
      tbl
        .integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects');
      tbl.text('description').notNullable();
      tbl.text('notes');
      tbl.boolean('completed').defaultTo(false);
    })
    .createTable('resource', (tbl) => {
      tbl.increments();
      tbl.string('resource_name').notNullable().unique();
      tbl.text('description');
    })
    .createTable('project_resource', (tbl) => {
      tbl
        .integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects');
      tbl
        .integer('resource_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('resource');
      tbl.primary(['project_id', 'resource_id']);
    });
};

exports.down = function (knex) {
  //undoing that change
  return knex.schema
    .dropTableIfExists('project_resource')
    .dropTableIfExists('resource')
    .dropTableIfExists('tasks')
    .dropTableIfExists('projects');
};
