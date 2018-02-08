import * as bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'
import { IContext } from '../../context'
import { createUser, lookupUser, findUserByEmail, findUserByEmailAndPassword } from '../../../db/user'


const generateJwt = (user, secret) => {
  return jwt.sign({
    id: user.id,
    scopes: user.scopes,
  }, secret)
}
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
      token: generateJwt(user, config.hashSecret),
      user: user.toJSON(),
    }
  },

  async login(parent, { email, password }, { models, config }: IContext, info) {
    const user = await findUserByEmail(email, models.User)

    if (!user) {
      throw new Error(`No such user found for email: ${email}`)
    }

    const valid = await bcrypt.compare(password, user.password)
    if (!valid) {
      throw new Error('Invalid password')
    }

    return {
      token: generateJwt(user, config.hashSecret),
      user,
    }
  },
}
