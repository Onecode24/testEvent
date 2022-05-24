import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Event extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public event_name: String

  @column()
  public description : String

  @column()
  public prix : Number

  @column()
  public lieu : String

  @column.dateTime()
  public date : DateTime

  @column()
  public liens : String

  @column()
  public contact : String

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
