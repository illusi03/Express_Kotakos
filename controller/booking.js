//Import MySQL
// const conn = require('../db')

//Import Models
const models = require('../models')
const Dorm = models.dorm
const User = models.user
const Booking = models.booking

//FUNCTION UTAMA CRUD
exports.index = (req, res) => {
  Booking.findAll({
    include: [
      {
        model: User
      },
      {
        model: Dorm
      }
    ]
  }).then(dorms => res.send(dorms))
}
exports.show = (req, res) => {
  Booking.findAll({
    include: [
      {
        model: User
      },
      {
        model: Dorm
      }
    ],
    where: {
      id: req.params.id
    }
  }).then(dorms => res.send(dorms))
}
exports.store = (req, res) => {
  const {userId, dormId, checkInDate, checkOutDate, duration} = req.body
  if (!userId || !dormId || !checkInDate || !checkOutDate || !duration) {
    return res.status(400).json({
      error: true,
      message: "Please insert all field"
    });
  }
  Booking.create(req.body).then(data => {
    res.send({
      data
    })
  })
}
exports.patch = (req, res) => {
  Booking.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(data => {
    res.send({
      message: "success"
    })
  })
}
exports.delete = (req, res) => {
  Booking.destroy({
    where: {
      id: req.params.id
    }
  }).then(data => {
    res.send({
      message: "success"
    })
  })
}