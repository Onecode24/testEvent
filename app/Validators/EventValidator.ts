import { schema , rules} from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'


export  class EventValidator {
  constructor(protected ctx: HttpContextContract) {}

  /*
   * Define schema to validate the "shape", "type", "formatting" and "integrity" of data.
   *
   * For example:
   * 1. The username must be of data type string. But then also, it should
   *    not contain special characters or numbers.
   *    ```
   *     schema.string({}, [ rules.alpha() ])
   *    ```
   *)
   * 2. The email must be of data type string, formatted as a valid
   *    email. But also, not used by any other user.
   *    ```
   *     schema.string({}, [
   *       rules.email(),
   *       rules.unique({ table: 'users', column: 'email' }),
   *     ])
   *    ```
   */
   public schema = schema.create({
    event_name : schema.string(),
    description : schema.string(),
    prix : schema.number([rules.unsigned()]),
    lieu : schema.string(),
    date : schema.date({
      format : 'yyyy-MM-dd HH:mm:ss'
    }),
    liens : schema.string(),
    contact : schema.string(),
  })

  /**
   * Custom messages for validation failures. You can make use of dot notation `(.)`
   * for targeting nested fields and array expressions `(*)` for targeting all
   * children of an array. For example:
   *
   * {
   *   'profile.username.required': 'Username is required',
   *   'scores.*.number': 'Define scores as valid numbers'
   * }
   *
   */
  public messages = {}
}

export  class EventUpdate{

  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    event_name : schema.string.optional(),
    description : schema.string.optional(),
    prix : schema.number.optional([rules.unsigned()]),
    lieu : schema.string.optional(),
    date : schema.date.optional({
      format : 'yyyy-MM-dd HH:mm:ss'
    }),
    liens : schema.string.optional(),
    contact : schema.string.optional(),
  })

}
