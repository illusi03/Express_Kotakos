//Import MySQL
// const conn = require('../db')

//Import Models
const models = require('../models')
const City = models.city
const User = models.user
const Dorm = models.dorm
const multer = require('multer');
const path = require('path');
const rootPath = path.dirname(require.main.filename);
const fs = require('fs');

//set storage engine
const storage = multer.diskStorage({
  destination: path.join(rootPath + '/public/images/'),
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() +
      path.extname(file.originalname));
  }
});
//init upload
const uploadImage = multer({
  storage: storage
}).single('photo'); //Picture adalah key / id dari fieldnya


//FUNCTION UTAMA CRUD
exports.index = (req, res) => {
  const sortBy = req.params.sortBy;
  const jenisSort = req.params.typeSort;
  const city = req.params.city;
  if (sortBy) {
    Dorm.findAll({
      order: [
        [`${sortBy}`, `${jenisSort}`]
      ],
      include: [
        {
          model: User
        }
      ]
    }).then(dorms => res.send(dorms))
  } else if (city) {
    Dorm.findAll({
      include: [
        {
          model: User
        }
      ],
      where: {
        city: req.params.city
      }
    }).then(dorms => res.send(dorms))
  } else {
    Dorm.findAll({
      order: [
        [`id`, `desc`]
      ],
      include: [
        {
          model: User
        }
      ]
    }).then(dorms => res.send(dorms))
  }
}
exports.show = (req, res) => {
  Dorm.findAll({
    include: [
      {
        model: User
      }
    ],
    where: {
      id: req.params.id
    }
  }).then(dorms => res.send(dorms))
}

/*
exports.store = (req, res) => {
let x = req.user.userId;
const { name, type, room, size, price, userId } = req.body
  // const { lat, long, photo, description, wc, wifi, keyRoom, bed, electric, provice, city, region, village } = req.body
  return res.json(req.body)
  if (!name || !type || !room || !size || !price || !userId) {
    return res.status(400).json({
      error: true,
      message: "Please insert all Field"
    });
  }
  // await uploadImage(req, res, err => {
  //   req.body.photo = req.file.filename
  // });
  Dorm.create(req.body).then(data => {
    res.send({
      data
    })
  })
}
*/

exports.store = (req, res) => {
  uploadImage(req, res, err => {
    const { name, type, room, size, price, userId } = req.body
    if (!name || !type || !room || !size || !price || !userId) {
      return res.status(400).json({
        error: true,
        message: "Please insert all Field"
      });
    }
    if (req.file.filename != null) {
      req.body.photo = `${req.headers.host}/public/images/${req.file.filename}`
    }
    Dorm.create(req.body).then(data => {
      res.send({
        data
      })
    })
  })
}

exports.patch = (req, res) => {
  Dorm.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(data => {
    res.send({
      message: "success"
    })
  })
}
exports.delete = async (req, res) => {
  let photoUrl = null;
  const objDorm = await Dorm.findOne({
    where: {
      id: req.params.id
    }
  })
  if (objDorm.photo) {
    photoUrl = objDorm.photo
    var photoUrlArr = photoUrl.split("/");
    //Hapus Photo
    fs.unlink(path.join(`${rootPath}/public/images/${photoUrlArr[3]}`), function () {
      res.status(200).send({
        message: "success"
      });
    });
  }
  Dorm.destroy({
    where: {
      id: req.params.id
    }
  }).then(data => {
    res.send({
      message: "success"
    })
  })
}
