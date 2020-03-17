
const mongoose = require('mongoose');  
const Schema = mongoose.Schema;  
// Define collection and schema for Product  
let Product = new Schema({  
  ProductName: {  
    type: String  
  },  
  ProductDescription: {  
    type: String  
  },  
  ProductPrice: {  
    type: Number  
  }  
},{  
    collection: 'blog_post'  
});  
module.exports = mongoose.model('blog_post', Product);  