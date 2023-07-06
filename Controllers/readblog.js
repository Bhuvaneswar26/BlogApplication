const postschema = require('../Schemas/post');
const session = require('express-session')

const readblog = async (req, res) => {
  const id = req.params.id;
  const user = req.session.usermail; // Assuming the user's email is stored in the session as 'mail'

  try {
    const data = await postschema.findById(id);
    if (data && data.postimage && data.postimage.data) {
      const imagePath = "/" + data.postimage.data.toString();
      const contentType = data.postimage.contenttype;
      console.log(imagePath);

      // Check if the current user has already liked the post

      const likeStatus = data.like.some(like => like.user === user);


      console.log(user,likeStatus)

      res.render('blogview', { blogdata: data, imagePath, contentType, likeStatus });
    } else {
      res.status(404).send('Image not found');
    }
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = readblog;
