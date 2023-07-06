const postmodel = require('../Schemas/post');

const likepost = async (req, res) => {
  const user = req.session.usermail;
  const id = req.params.id;

  try {
    const post = await postmodel.findById(id);

    // Check if the user has already liked the post
    const userLikedIndex = post.like.findIndex((like) => like.user === user);
    
    if (userLikedIndex === -1) {
      // User has not liked the post, add their like
      post.like.push({ count: 1, user: user });
    } else {
      // User has already liked the post, remove their like
      post.like.splice(userLikedIndex, 1);
    }

    await post.save();

    res.redirect(`/readblog/${id}`);
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = likepost;
