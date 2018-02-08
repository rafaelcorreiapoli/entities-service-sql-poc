export const createUser = async ({
  email,
  password,
  name,
  scopes,
}, User) => User.create({
  email,
  password,
  name,
  scopes
})

export const lookupUser = async (id, User) => User.findbyId(id)
export const findUserByEmail = async (email, User) => User.findOne({
  where: {
    email
  }
})

export const findUserByEmailAndPassword = async (email, password, User) => User.findOne({
  where: {
    email,
    password
  }
})