//Import Models
const models = require('../models')
const City = models.city
const User = models.user
const Dorm = models.dorm

//FUNCTION UTAMA CRUD
exports.index = (req, res) => {
  User.findAll().then(data => res.send(data))
}
exports.show = (req, res) => {
  User.findOne({
    where: { id: req.params.id }
  }).then(data => {
    res.send({
      data
    })
  })
}
exports.patch = async (req, res) => {
  const { username, name, password, telp } = req.body //Is Required
  if (username != null) {
    const adaUser = await User.findOne({ where: { username } })
    if (adaUser) {
      return res.status(400).json({
        error: true,
        message: "Username is already exist"
      });
    }
  } else {
    User.update(
      req.body, {
        where: { id: req.params.id }
      }
    ).then(data => {
      res.send({
        message:"success"
      })
    }) 
  }
}
exports.delete = (req, res) => {
  User.destroy({
    where: { id: req.params.id }
  }
  ).then(data => {
    res.send({
      message: "success"
    })
  })
}