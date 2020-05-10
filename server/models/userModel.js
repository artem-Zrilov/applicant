const db = new (require('../database.js'));
const bcrypt = require('bcrypt');
const constants = require('../../config_const');

class UserModel {

  constructor() {
    this.add = this.add.bind(this);
  }

  async add(data) {
    const {
      login,
      password,
      name,
      surname,
      patronymic,
      phone,
      language
    } = data;

    const user = await db.select(`SELECT * FROM users WHERE login="${login}"`)

    if (user.length > 0) {
      throw Error("already registered")
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const result = await db.insert(`INSERT INTO users (login, password, name, surname, patronymic, phone, language) VALUES('${login}', '${hash}', '${name}', '${surname}', '${patronymic}', '${phone}', '${language}')`)

    return {
      id: result.insertId
    };
  }

  async login(data) {

    const user = await db.select('SELECT * FROM users WHERE login="${login}"');

    const match = await bcrypt.compare(data.password, user.password);

    if (match) {
      console.log(true)
    }

    return data;
  }
}

module.exports = UserModel;