const userModel = new (require('../models/userModel.js'));

class  UserController {

  constructor() {
    this.add = this.add.bind(this);
  }

  add(req, res) {
    userModel.add(req.body)
     .then((result) => {
       res.status(201).json(result);
     })
     .catch(err => {
       res.status(400).json({
         error: true,
         message: err.message
       });
     });

  }
}

module.exports = UserController;

