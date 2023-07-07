//importing required packages and modules
const express = require('express');
const app = express();
const route = express.Router();
const session= require('express-session')


const { login, loginverify, logout } = require('../Controllers/login');
const { signup, signupverify } = require('../Controllers/signup');
const {adminlogin,adminloginverify,adminlogout} = require('../Controllers/adminlogin')





const isAuth = (req, res, next) => {
  if (req.session && req.session.isAuth) {
    res.redirect('/dashboard');
  } else {
    next();
  }
};




route.get('/login',isAuth,login)
route.post('/login', isAuth, loginverify)
route.get('/logout',logout)

route.get('/signup',isAuth,signup)
route.post('/signup', isAuth, signupverify)


route.get('/adminlogin',isAuth,adminlogin)
route.post('/adminlogin', isAuth, adminloginverify)
route.get('/adminlogout',adminlogout)





module.exports = route;