const postmodel = require("../Schemas/post");
const multer = require("multer");

const admincreatepost = (req, res) => {
  res.render("admincreatepost");
};

const admincreatepostverify = async (req, res) => {
  try {
    if (req.file) {
      const data = postmodel({
        title: req.body.title,
        description: req.body.description,
        caption: req.body.caption,
        postimage: {
          data: req.file.filename,
          contenttype: "image/jpg/png",
        },
        createdby: "admin",
        like: [],
        Comment: [],
        theme:req.body.theme
      });

      // Save the data to the database
      await data.save()
        .then((data) => {
          // console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    res.redirect("/admindashboard");
  } catch (error) {
    console.log("Error:", error);
  }
};

module.exports = { admincreatepost, admincreatepostverify };
