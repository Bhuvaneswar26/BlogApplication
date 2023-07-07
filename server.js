//default packages

const express = require('express');
const bodyparser = require('body-parser')
const cookieparser = require('cookie-parser');
const session = require('express-session')
const mongosession = require('connect-mongodb-session')(session)
const morgan = require('morgan')
const dotenv = require('dotenv');
const methodOverride = require('method-override');




//importing routes
const dbconnect = require('./Dbconnections/db');
const login = require('./Routes/login')
const dashboard = require('./Routes/dashboard')
const createpost = require('./Routes/createpost')
const updateposts = require('./Routes/updateposts')
const updateprofile = require('./Routes/updateprofile')
const readblog = require('./Routes/readblog')
const yourposts = require('./Routes/yourposts')
const allblogs = require('./Routes/allblogs')
const likepost = require('./Routes/likepost')
const postcomment = require('./Routes/postcomment');
const themeblogs = require('./Routes/themeblogs');
const adminviewpost = require('./Routes/adminviewpost')
const admincreatepost = require('./Routes/admincreatepost')
const admindashboard = require('./Routes/admindashboard')
const adminupdatepost = require('./Routes/adminupdatepost')



dotenv.config();
const app = express();

app.use(methodOverride('_method'));



app.use(cookieparser())

app.use(express.static('Public'))
app.use(express.static('uploads'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//template engine
app.set('view engine', 'ejs');
app.set('views', 'views');

//dbconnection
const dburl = process.env.DBURL;
dbconnect(dburl);




const store = new mongosession(
    {
        uri: dburl,
        collection: "mysession"
    }
)


app.use(session({
    key: "thisiskey",
    secret: "THISISSECRET",
    saveUninitialized: false,
    resave: false,
    cookie: {
        expires: 1000 * 60 * 60 * 24
    },
    store: store
}))


const isAuth = (req, res, next) => {
  if (req.session && req.session.isAuth) {
    res.redirect('/dashboard');
  } else {
    if (req.url !== '/login') {
      res.redirect('/login');
    } else {
      next();
    }
  }
};



const port = process.env.PORT || 8000;



app.get('/', (req, res) => {
  res.redirect('/login');
});



app.use('/', login)
app.use('/dashboard', dashboard)
app.use('/createpost', createpost)
app.use('/yourposts', yourposts)
app.use('/updateposts', updateposts)
app.use('/updateprofile',updateprofile)
app.use('/allblogs', allblogs)
app.use('/readblog', readblog)
app.use('/likepost', likepost)
app.use('/postcomment', postcomment)
app.use('/themeblogs', themeblogs)
app.use('/admindashboard',admindashboard)
app.use('/admincreatepost', admincreatepost)
app.use('/adminviewpost', adminviewpost)
app.use('/adminupdatepost',adminupdatepost)


app.listen(port, (req, res) => {
    console.log(`server is running at ${port}`);
})


module.exports = { isAuth }