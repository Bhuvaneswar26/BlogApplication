
const userschema = require("../Schemas/user");

const updateprofile = async (req, res) => {
    const mail = req.params.mail
    await userschema.findOne({mail:mail})
        .then((data) => {
            // console.log(data)
            res.render('updateprofile', { userdata: data })
        })
        .catch((err) => {
            console.log(err);
        }
        )
};

const verifyupdateprofile = async (req, res) => {
    const mail = req.params.mail;
    // console.log(mail)
    const updateData = {
        name: req.body.name,
        mail: req.body.mail,
    };

    // console.log(updateData)
    await userschema.findOneAndUpdate({ mail: mail }, updateData)
        .then((data) => {
            // console.log('Post updated successfully');
            res.redirect('/dashboard'); // Redirect to home page or any other desired location
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send('Internal Server Error');
        });
};


module.exports = { updateprofile, verifyupdateprofile };
