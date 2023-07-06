const postmodel = require('../Schemas/post');

const themeblogs = async (req, res) => {
    console.log(req.params.theme)
  const theme = req.params.theme.toLowerCase(); // Convert theme to lowercase
  try {
      const themeblogs = await postmodel.find({ theme: theme });
      // const themeblogsWithCounts = themeblogs.map(post => {
      //       return {
      //           ...post._doc,
      //           likeCount: post.like.length,
      //           commentCount: post.comment.length,
      //       };
      // });
    
     const postsWithImages = themeblogs.map(post => {
            const imagePath = "/" + post.postimage.data.toString();
            const contentType = post.postimage.contentType;
            const likeCount = post.like.length;
            const commentCount= post.comment.length;
            return { ...post._doc, imagePath, contentType ,likeCount,commentCount};
        });
        res.render('themeblogs', { themes: postsWithImages , theme:theme });
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = themeblogs;
