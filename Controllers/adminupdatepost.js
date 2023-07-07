const postmodel = require("../Schemas/post");

const adminupdatepost = async (req, res) => {
    const id = req.params.id
    await postmodel.findById(id)
        .then((data) => {
            res.render('adminupdatepost', { data: data })
        })
        .catch((err) => {
            console.log(err);
        }
        )
};

const adminverifyupdatepost = async (req, res) => {
    const id = req.params.id;
    // console.log(id)
    const updateData = {
        title: req.body.title,
        caption: req.body.caption,
        description: req.body.description
    };

    // console.log(updateData)
   await postmodel.findByIdAndUpdate(id, updateData)
        .then((data) => {
            // console.log('Post updated successfully');
            res.redirect('/admindashboard') // Redirect to home page or any other desired location
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send('Internal Server Error');
        });
};


module.exports = { adminupdatepost, adminverifyupdatepost };
