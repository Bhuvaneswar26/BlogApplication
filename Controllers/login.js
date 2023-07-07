const express = require('express');
const session = require('express-session');
const mongosession = require('connect-mongodb-session')(session);
const usermodel = require('../Schemas/user'); 


const login = (req, res) => {
    res.render('login');
};

const loginverify = async (req, res) => {
    const maill = req.body.mail;
    const password = req.body.password;
    // console.log(maill, password);

    try {
        const user = await usermodel.findOne({ mail: maill });

      if (!user || user.password !== password) {
          res.render('login');
        } else {
            req.session.isAuth = true;
            req.session.usermail = maill;
            res.redirect('/dashboard');
        }
    } catch (error) {
        console.error(error);
        res.send('error');
    }
};



const logout = (req, res) => {
  req.session.destroy(err => {
    if (err) {
      console.error(err);
      res.send('Error occurred during logout');
    } else {
      res.redirect('/login');
    }
  });
};

module.exports = { login, loginverify, logout };

