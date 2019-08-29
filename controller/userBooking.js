//Import MySQL
// const conn = require('../db')

//Import Models
const models = require('../models')
const Dorm = models.dorm
const User = models.user
const Booking = models.booking

//FUNCTION UTAMA CRUD
exports.index = (req, res) => {
  User.findAll({
    include: [
      {
        model: Booking,
        include :[
          {
            model: Dorm
          }
        ],
        order:[
          ['id','desc']
        ]
      }
    ],
    order:[
      ['id','desc']
    ]
  }).then(x => res.send(x))
}
exports.show = (req, res) => {
  User.findAll({
    include: [
      {
        model: Booking,
        include :[
          {
            model: Dorm
          }
        ],
        order:[
          ['id','desc']
        ]
      }
    ],
    order:[
      ['id','desc']
    ],
    where :{
      id:req.params.id
    }
  }).then(x => res.send(x))
}