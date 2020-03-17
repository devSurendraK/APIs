
    const express = require('express'),  
    app = express(),  
    cors = require('cors'), 
    path = require('path'),  
    bodyParser = require('body-parser')  
    
  const errorHandler = require('./_helpers/error-handler');
   mongoose = require('mongoose'),  
   config = require('./_helpers/DB');
   
   console.log(config)
   const productRoute = require('./routes/product.route'); 
   const postRoutes = require('./routes/blog_post');  
    mongoose.Promise = global.Promise;  
    
    
    mongoose.connect(config.DB, { useNewUrlParser: true }).then(  
      () => {console.log('Database is connected') },  
      err => { console.log('Can not connect to the database'+ err)}  
    );  
    app.use(bodyParser.json());  
    app.use(cors()); 

    // api routes
    app.use('/products', productRoute); 
    app.use('/blogs', postRoutes);   
    app.use('/users', require('./models/users/users.controller'));


    app.use(errorHandler);
    // start server
    const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
    const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
    }); 