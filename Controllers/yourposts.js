const postmodel = require('../Schemas/post');
const session = require('express-session');

const dashboard = async (req, res) => {
    const mail = req.session.usermail;
    try {
        const posts = await postmodel.find({ createdby: mail });
        const postsWithImages = posts.map(post => {
            const imagePath = "/" + post.postimage.data.toString();
            const contentType = post.postimage.contentType;
            const likeCount = post.like.length;
            const commentCount= post.comment.length;
            return { ...post._doc, imagePath, contentType ,likeCount,commentCount};
        });
        res.render('yourposts', { posts: postsWithImages });
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = dashboard;
