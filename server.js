const express = require('express');
const mongoose = require('mongoose');
const path = require('path')
const router = require('./routes.js')
const app = express();
const port = process.env.PORT || 3000;

mongoose.connect('mongodb://admin:admin123@ds213615.mlab.com:13615/projekat', {useNewUrlParser: true},function(err){
    if(err) {
        console.log('Some problem with the connection ' +err);
    } else {
        console.log('The Mongoose connection is ready');
    }
})

app.use('/', express.static(path.join(__dirname, 'public')))

app.use('/api', router)

app.get('*', function(req, res){
    res.sendFile(path.join(__dirname + 'public/index.html'))
})

app.listen(port, function(){
    console.log("Listening on " + port)
})