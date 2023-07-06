const mongoose = require('mongoose');

const likeobject = mongoose.Schema({
  count: {
    type: Number,
    required: true
  },
  user: {
    type: String,
    required: false
  }
});





const commentobject = mongoose.Schema({
  name: {
    type: String,
    required: false
    },
    comment:{
        type: String,
        require:false
    }
});


const postschema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    caption: {
        type: String,
        require:true
    },
    description: {
        type: String,
        require:true
    },
    createedat: {
        type: Date,
        default: Date.now
    },
    createdby: {
        type: String,
        require:true
    },
    postimage: {
        data: Buffer,
        contenttype:String,  
    },
    like: [likeobject],

    comment: [commentobject],

    theme: {
        type: String,
        require: true,
        lowercase: true
    }
})


postschema.pre('save', function (next) {
  if (this.theme) {
    this.theme = this.theme.toLowerCase()
  }
  else {
    this.theme = "not mentioned";
  }
  next();
});


const postmodel = mongoose.model('post', postschema);

module.exports = postmodel;