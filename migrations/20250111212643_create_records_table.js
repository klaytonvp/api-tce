exports.up = function(knex) {
    return knex.schema.createTable('records', function(table) {
        table.string('idUnico').primary();
        table.string('nomeEstagiario');
        table.integer('ultimaVersao');
        table.timestamp('dataCriacao').defaultTo(knex.fn.now());
        table.timestamp('dataAlteracao').defaultTo(knex.fn.now());
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('records');
};
