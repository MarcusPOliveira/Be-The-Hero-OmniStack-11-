//UP -> responsável pela criação da table
exports.up = function(knex) {
  return knex.schema.createTable("incidents", function(table) {
    table.increments();

    table.string("title").notNullable();
    table.string("description").notNullable();
    table.decimal("value").notNullable(); //float

    //relacionamento com a tabela Ongs
    table.string("ong_id").notNullable();
    //chave-estrangeira
    table
      .foreign("ong_id")
      .references("id")
      .inTable("ongs");
  });
};

//DOWN -> responsável por deletar alguma table

exports.down = function(knex) {
  return knex.schema.dropTable("incidents");
};
