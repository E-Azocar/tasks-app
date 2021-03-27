const express = require('express');
const morgan = require('morgan');
const cors = require('cors')

// Initializations
const app = express();
require('./database');

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', require('./routes/tasks'));

// Start Server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});