import { CustomMessages, rules, schema } from '@ioc:Adonis/Core/Validator'

import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateUserValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    username: schema.string({}),
    password: schema.string({}, [rules.minLength(4)]),
    email: schema.string({}, [rules.email()]),
  })

  public messages: CustomMessages = {}
}
