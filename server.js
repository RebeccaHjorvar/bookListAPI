const express = require('express')
    app = express()
    port = process.env.PORT || 9000 // set port to 9000, 3000 didn't work
    mongoose = require('mongoose')
    uri = 'mongodb://localhost/Bookdb';
    Book = require('./api/models/bookListModel') // created model loading here
    
// mongoose instance connection url

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(res => {
    console.log('DB connected');
}).catch(err => {
    console.log(Error, err.message);
});

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// importing route
const routes = require('./api/routes/bookListRoutes');

// register the route
routes(app);

app.get('*', (req,res) => {
    res.status(404).send({url: req.originalUrl + ' not found '})
});
    
app.listen(port);
console.log('book list RESTful API server started on: ' + port);
