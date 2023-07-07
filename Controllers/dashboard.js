const session = require('express-session');
const postmodel = require('../Schemas/post');
const userschema = require('../Schemas/user');

const latestpost = async () => {
  try {
    const posts = await postmodel.find().sort({ createedat: -1 });
    const postsWithImages = posts.map(post => {
      const imagePath = "/" + post.postimage.data.toString();
      const contentType = post.postimage.contentType;
      const likeCount = post.like.length;
      const commentCount = post.comment.length;
      return { ...post._doc, imagePath, contentType, likeCount, commentCount };
    });
    return postsWithImages;
  } catch (error) {
    console.log("error");
    return []; // Return an empty array in case of an error
  }
};


const getMostLikedPosts = async () => {
  try {
    const posts = await postmodel.find();
    const postsWithImages = posts.map(post => {
      const imagePath = `/${post.postimage.data.toString()}`;
      const contentType = post.postimage.contentType;
      const likeCount = post.like.length; // Calculate likeCount separately
      const commentCount = post.comment.length;
      return { ...post._doc, imagePath, contentType, likeCount, commentCount };
    });
    const sortedPosts = postsWithImages.sort((a, b) => b.likeCount - a.likeCount); // Sort based on likeCount
    return sortedPosts;
  } catch (error) {
    console.log(error);
    return []; // Return an empty array in case of an error
  }
};


const dashboard = async (req, res) => {
  const mail = req.session.usermail;

  try {

    const themes = await postmodel.distinct('theme');
    const latestposts = await latestpost();
    const mostLikedPosts = await getMostLikedPosts();
      // console.log(mostLikedPosts)
    const userdata = await userschema.findOne({ mail: mail })
    res.render('dashboard', { userdata: userdata, latestposts: latestposts, themes: themes, mostliked: mostLikedPosts });
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = dashboard;
