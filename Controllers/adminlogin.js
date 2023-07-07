const express = require('express');


const adminlogin = (req, res) => {
    res.render('adminlogin');
};

const adminloginverify = async (req, res) => {
    const maill = req.body.mail;
    const password = req.body.password;

    try {

        if (maill !="admin@admin.in" || password != "admin") {
            res.render('adminlogin');
        } else {
            req.session.isAuth = true;
            req.session.usermail = maill;
            res.redirect('/admindashboard');
        }
    } catch (error) {
        console.error(error);
        res.send('error');
    }
};



const adminlogout = (req, res) => {
  req.session.destroy(err => {
    if (err) {
      console.error(err);
      res.send('Error occurred during logout');
    } else {
      res.redirect('/adminlogin');
    }
  });
};

module.exports = { adminlogin, adminloginverify, adminlogout };

