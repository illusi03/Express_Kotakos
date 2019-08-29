const jwt = require('jsonwebtoken')

const models = require('../models')
const User = models.user
const Cryptr = require('cryptr');

const prepareEncrypt = new Cryptr('reactnative'); //init secret Key

exports.login = (req, res) => {
  //check if email and pass match in db tbl user
  const username = req.body.username
  const password = req.body.password 
  if (!username || !password) {
    return res.status(400).json({
      error: true,
      message: "Please insert all Field"
    });
  }
  User.findOne({ where: { username } }).then((user) => {
    if (!user) {
      return res.status(400).json({
        error: true,
        message: 'Username not found'
      })
    }
    const passEncrypt = prepareEncrypt.decrypt(user.password); 
    if (passEncrypt === req.body.password) {
      const token = jwt.sign({
        userObj: user
      }, 'reactnative')
      res.send({
        token
      })
    }else{
      return res.status(400).json({
        error:true,
        message:'Wrong password'
      })
    }
  }).catch(err => {
    res.send({
      error: true,
      message: `Error : ${err}`
    })
  })
}
exports.register = async (req, res) => {
  const { username, name, password, telp } = req.body //Is Required
  if (!username || !name || !password || !telp) {
    return res.status(400).json({
      error: true,
      message: "Please insert all field"
    });
  }
  User.findOne({ where: { username } }).then(user => {
    if (!user) {
      req.body.password = prepareEncrypt.encrypt(req.body.password); //EncryptPass
      const token = jwt.sign({
        userObj: req.body
      }, 'reactnative')
      User.create(req.body).then(data => {
        res.send({
          data,
          token
        })
      })
    } else {
      res.send({
        error: true,
        message: "Username is already exist"
      })
    }
  }).catch(err => {
    res.send({
      error: true,
      message: `Error : ${err}`
    })
  })
}