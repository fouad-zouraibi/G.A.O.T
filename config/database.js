const mongoose  = require('mongoose');

const uri = "mongodb://localhost:27017/e-commerce";

mongoose.connect(uri, (err) => {
    if(err)
        console.log('error connect to database')
    else
        console.log('connect successfully to database')
});
