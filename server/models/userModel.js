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

    const user =  await  db.select(`SELECT * FROM users WHERE login="${login}"`)

    if (user.length > 0) {
      throw Error("Пользователь с данным логином уже существует")
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    await db.insert(`INSERT INTO users (login, password, name, surname, patronymic, phone, language) VALUES('${login}', '${hash}', '${name}', '${surname}', '${patronymic}', '${phone}', '${language}')`)

    return data;
  }

  async login(data) {
    const match = await bcrypt.compare('admin123', '$2b$10$I6Uez4aki0qHLRKUbyXzl.SGL3Mmx6JXIBLCl6Lsl/EuKu7gLwYsm');

    if (match) {
      console.log(true)
    }

    return data;
  }
}

module.exports = UserModel;