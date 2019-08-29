//Import Lib
const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')
const multer = require('multer');
const path = require('path');

//Init Identifier
const app = express()
// const port = 5000
const port = process.env.PORT || 5000
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/public', express.static(__dirname + "/public"))

//Init Controllersasf
const DormsController = require('./controller/dorms')
const UsersController = require('./controller/users')
const CitiesController = require('./controller/city')
const BookingsController = require('./controller/booking')
const UserBookingsController = require('./controller/userBooking')
const UserLoginsController = require('./controller/userLogin')
const AuthController = require('./controller/auth')

//Init Middleware
const { authenticated } = require('./middleware')

// ROUTES
app.get('/', function (req, res) {
  res.send('Welcome to Express , This is Root !')
});
/*
//set storage engine
const storage = multer.diskStorage({
  destination: path.join(__dirname + '/public/images/'),
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() +
      path.extname(file.originalname));
  }
});
//init upload
const uploadImage = multer({
  storage: storage
}).single('picture'); //Picture adalah key / id dari fieldnya
app.post('/dorm', function (req, res) {
  uploadImage(req, res, err => {
    res.send({
      data:req.body,
      message: req.file.filename
    })
  });
});
*/


//Init Route
app.group("/api/v1", (router) => {

  //auth API
  router.post('/login', AuthController.login)
  router.post('/register', AuthController.register);
  
  //Users API
  router.get('/users', authenticated,UsersController.index);
  router.get('/user/:id',authenticated, UsersController.show);
  router.patch('/user/:id', authenticated, UsersController.patch);
  router.delete('/user/:id', authenticated, UsersController.delete);

  //Users API
  router.get('/cities', CitiesController.index);
  router.get('/city/:id', CitiesController.show);
  router.post('/city', CitiesController.store);
  router.patch('/city/:id', CitiesController.patch);
  router.delete('/city/:id', CitiesController.delete);

  //Dorms API
  router.get('/dorms', DormsController.index);
  router.get('/dorms/sort/:sortBy/:typeSort', DormsController.index);
  router.get('/dorms/search/:city', DormsController.index);
  router.get('/dorm/:id',authenticated, DormsController.show);
  router.post('/dorm', authenticated, DormsController.store);
  router.patch('/dorm/:id', authenticated, DormsController.patch);
  router.delete('/dorm/:id', authenticated, DormsController.delete);

  //Booking API
  router.get('/bookings', authenticated, BookingsController.index);
  router.get('/booking/:id', authenticated, BookingsController.show);
  router.post('/booking', authenticated, BookingsController.store);
  router.patch('/booking/:id', authenticated, BookingsController.patch);
  router.delete('/booking/:id', authenticated, BookingsController.delete);

  //User Tapi ListBooking API
  router.get('/userBookings', authenticated, UserBookingsController.index);
  router.get('/userBooking/:id', authenticated, UserBookingsController.show);

  //User LoginCheck
  // router.get('/userLogin/:username/:password', authenticated, UserLoginsController.show);
})

//Init Listener Port
app.listen(port, () => console.log(`Listening on port ${port}!`))