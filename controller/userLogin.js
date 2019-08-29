//Import Models
const models = require('../models')
const City = models.city
const User = models.user
const Dorm = models.dorm
const Booking = models.booking

exports.show = (req, res) => {
  User.findOne({
    where: { username: req.params.username ,password: req.params.password}
  }).then(data => res.send(data))
  User.findOne({
    include: [
      {
        model: Booking,
        include :[
          {
            model: Dorm
          }
        ]
      }
    ]
  }).then(x => res.send(x))
}