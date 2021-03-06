import Knex from 'knex'

export async function up(Knex: Knex) {
    return await Knex.schema.createTable('connections', table => {
        table.increments('id').notNullable().primary();
        


        table.integer('user_id').
        notNullable().
        references('id').
        inTable('proffys').
        onDelete('CASCADE').
        onUpdate('CASCADE')


        table.timestamp('created_at')
        .defaultTo(Knex.raw('CURRENT_TIMESTAMP'))
            .notNullable()
    })
}


export async function down(knex: Knex) {
    return await knex.schema.dropTable('connections')
}
