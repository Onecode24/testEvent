import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Events extends BaseSchema {
  protected tableName = 'events'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string("eventName",200).notNullable()
      table.string("description",1000).notNullable()
      table.integer("prix").notNullable()
      table.string("lieu",255).notNullable()
      table.date("date").notNullable()
      table.time("heure").notNullable()
      table.string("lien images",1000).notNullable()
      table.string("contact",50).notNullable()
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
