'use strict'

const User = use('App/Models/User');

class UserController {
  // auth paramter is build in AdonisJS and it can be found in config, auth.js. In that file, there are 3 types of authentication.
  // Assigning a token to a user
  async login({ request, auth }) {
    const { email, password } = request.all();
    const token = await auth.attempt(email, password);
    return token;
  }

  // Registering a user and modifying the login function by passing the arguments.
  async register({ request }) {
    const { email, password } = request.all();
    await User.create({
      email,
      password,
      username: email,
    })
    return this.login(...arguments);
  }
}

module.exports = UserController
