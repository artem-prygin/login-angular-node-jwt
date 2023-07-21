import db from '../util/database.js';

export default class {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  static findUser(email) {
    return db.execute(
        'SELECT * from users WHERE email = ?',
        [email],
    );
  }

  static saveUser(user) {
    return db.execute(
        'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
        [user.name, user.email, user.password],
    );
  }
}
