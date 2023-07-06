const postmodel = require('../Schemas/post');

const userschema = require('../Schemas/user')

const postcomment = async (req, res) => {
    console.log("hii");
    const user = req.session.usermail;
    const name = await userschema.findOne({mail:user})
    const id = req.params.id;
    const newcomment = {
        name: name.name,
        comment: req.body.comment
    };
    console.log(newcomment)
    try {
        await postmodel.findById(id).then((data) => {
            data.comment.push(newcomment);
            data.save()
            res.redirect(`/readblog/${id}`);

        })
    }
    catch (error){
        console.log("error in catch",error)
    }

};

module.exports = postcomment;
