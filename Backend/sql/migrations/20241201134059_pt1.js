/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema.createTable('teachers', table => {
    table.integer('t_id').unique().primary();
    table.string('name');
    table.string('email').unique();
    table.string('password');
    table.string('designation');
    table.string('qualification');
    table.string('faculty');
    table.string('department');
    table.string('DOB');
    table.string('phoneNo');
    table.text('res_address');
    table.text('per_address');
  })

  await knex.schema.createTable('teaching_plan', table => {
    table.integer('t_id')
    table.string('year');
    table.string('month');
    table.string('semester');
    table.string('class');
    table.string('course');
    table.string('availablePeriod');
    table.string('title');
    table.integer('paperNo');
    table.text('lectureDetails');
  })

  await knex.schema.createTable('lecture_taken', table => {
    table.integer('t_id')//
    table.increments('entry_id')//
    table.string('year');//
    table.string('month');//
    table.string('date');
    table.string('div');
    table.string('class');
    table.string('time');
    table.string('lecNo');//
    table.string('title');
    table.text('module');
  })

  await knex.schema.createTable('leave_records', table => {
    table.integer('t_id')
    table.increments('entry_id')
    table.string('leaveType')
    table.string('fromDate')
    table.string('toDate')
    table.integer('numberOfDays')
    table.text('reason')
  })

  await knex.schema.createTable('assigned_lectures', table => {
    table.integer('t_id')
    table.increments('entry_id')
    table.string('className')
    table.string('courseName')
    table.string('theoryPeriods')
    table.string('practicals')
    table.string('totalPeriods')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('teachers');
  await knex.schema.dropTableIfExists('teaching_plan');
  await knex.schema.dropTableIfExists('lecture_taken');
  await knex.schema.dropTableIfExists('leave_records');
  await knex.schema.dropTableIfExists('assigned_lectures');
};
