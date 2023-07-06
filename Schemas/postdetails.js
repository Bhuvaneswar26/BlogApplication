const mongoose = require('mongoose');


const likeobject = new Schema({
  name: {
    type: String,
    required: true
    },
    likenumber:{
        type:Number
    }
});

const commentbject = new Schema({
  name: {
    type: String,
    required: true
    },
    comment:{
        type:String
    }
});


const postdetailsschema = mongoose.Schema({

    postid: {
        type: String,
        require:true
    },
    like: [likeobject],

    comment: [commentbject],

    report: [String]
        
})

const postdetailsmodel = mongoose.model('post', postdetailsschema);

module.exports = postdetailsmodel;