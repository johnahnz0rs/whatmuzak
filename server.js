// set us up the server
let express = require('express');
let cors = require('cors');
let path = require('path');
let bodyParser = require('body-parser');
let dotenv = require('dotenv');

dotenv.config();
let app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// require j00r dbase
require('./server/config/database.js');
require('./server/models/user.js');

// serve react files


// require j00r route files
app.use(require('./server/config/routes.js'));
// app.use(require('./server/config/catch-all.routes.js'));
// app.use('/api', require('./app/config/routes.js'));

// start backend server
const port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log(`*** johnahnz0rs is l33t on port ${port}***`);
});