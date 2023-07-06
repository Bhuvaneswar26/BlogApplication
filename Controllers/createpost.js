const postmodel = require("../Schemas/post");
const session = require("express-session");
const multer = require("multer");

const createpost = (req, res) => {
  res.render("createpost");
};

const createpostverify = async (req, res) => {
  try {
    if (req.file) {
      console.log(req.session.usermail);
      const data = postmodel({
        title: req.body.title,
        description: req.body.description,
        caption: req.body.caption,
        postimage: {
          data: req.file.filename,
          contenttype: "image/jpg/png",
        },
        createdby: req.session.usermail,
        like: [],
        Comment: [],
        theme:req.body.theme
      });

      // Save the data to the database
      await data.save()
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    res.redirect("/dashboard");
  } catch (error) {
    console.log("Error:", error);
  }
};

module.exports = { createpost, createpostverify };
