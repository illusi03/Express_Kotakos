//Import Models
const models = require('../models')
const City = models.city

//FUNCTION UTAMA CRUD
exports.index = (req, res) => {
  City.findAll().then(data => res.send(data))
}
exports.show = (req, res) => {
  City.findOne({
    where: { id: req.params.id }
  }).then(data => res.send(data))
}
exports.store = (req, res) => {
  City.create(req.body).then(data => {
    res.send({
      message: "success",
      data
    })
  })
}
exports.patch = (req, res) => {
  City.update(
    req.body, {
      where: { id: req.params.id }
    }
  ).then(data => {
    res.send({
      message: "success"
    })
  })
}
exports.delete = (req, res) => {
  City.destroy({
    where: {
      id: req.params.id
    }
  });
}
