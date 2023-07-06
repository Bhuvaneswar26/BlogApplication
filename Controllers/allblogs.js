const postmodel = require('../Schemas/post');

const allblogs = async (req, res) => {
    const user = req.session.mail;
    try {
        const posts = await postmodel.find();
        const postsWithImages = posts.map(post => {
            const imagePath = "/" + post.postimage.data.toString();
            const contentType = post.postimage.contentType;
            const likeCount = post.like.length;
            const commentCount= post.comment.length;
            return { ...post._doc, imagePath, contentType ,likeCount,commentCount};
        });
        res.render('allblogs', { posts: postsWithImages });
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = allblogs;
