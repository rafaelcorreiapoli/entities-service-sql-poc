import * as bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'
import { IContext } from '../../context';
import { createUser, lookupUser, findUserByEmail } from '../../../db/user'

export const auth = {
  async signup(parent, { email, password, name }, { models, config }: IContext, info) {
    const encryptedPassword = await bcrypt.hash(password, 10)
    
    const existingUser = await findUserByEmail(email, models.User)

    if (existingUser) {
      throw new Error(`E-mail ${email} already exists.`)
    }
    const user = await createUser({
      email,
      password: encryptedPassword,
      name,
      scopes: ['viewer'],
    }, models.User)

    
    return {
      token: jwt.sign({
        id: user.id,
        scopes: user.scopes,
      }, config.hashSecret),
      user: user.toJSON(),
    }
  },

  // async login(parent, { email, password }, ctx, info) {
  //   const user = await ctx.db.query.user({ where: { email } })
  //   if (!user) {
  //     throw new Error(`No such user found for email: ${email}`)
  //   }

  //   const valid = await bcrypt.compare(password, user.password)
  //   if (!valid) {
  //     throw new Error('Invalid password')
  //   }

  //   return {
  //     token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
  //     user,
  //   }
  // },
}
