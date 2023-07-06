const mongoose = require('mongoose');

const dbconnect = async (dburl) => {
    try {
        await mongoose.connect(dburl, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
        )
        console.log("data base connected with database", dburl);
    }

    catch (err) {
        console.log("cant connect to database", err);
    }
}

module.exports = dbconnect;