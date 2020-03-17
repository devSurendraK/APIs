const express = require('express');  
const app = express();  
const postRoutes = express.Router();  
// Require Product model in our routes module  
let post = require('../models/post');  
// Defined store route  
postRoutes.route('/add').post(function (req, res) {  
  let post = new post(req.body);  
  post.save()  
    .then(product => {  
      res.status(200).json({'Product': 'Product has been added successfully'});  
    })  
    .catch(err => {  
    res.status(400).send("unable to save to database");  
    });  
});  
// Defined get data(index or listing) route  
postRoutes.route('/').get(function (req, res) {  
    post.find(function (err, posts){  
    if(err){  
      console.log(err);  
    }  
    else {  
      res.json(posts);  
    }  
  });  
});  
// Defined edit route  
// productRoutes.route('/edit/:id').get(function (req, res) {  
//   let id = req.params.id;  
//   Product.findById(id, function (err, product){  
//       res.json(product);  
//   });  
// });  
// //  Defined update route  
// productRoutes.route('/update/:id').post(function (req, res) {  
//   Product.findById(req.params.id, function(err, product) {  
//     if (!product)  
//       res.status(404).send("Record not found");  
//     else {  
//       product.ProductName = req.body.ProductName;  
//       product.ProductDescription = req.body.ProductDescription;  
//       product.ProductPrice = req.body.ProductPrice;  
//  product.save().then(product => {  
//           res.json('Update complete');  
//       })  
//       .catch(err => {  
//             res.status(400).send("unable to update the database");  
//       });  
//     }  
//   });  
// });  
// // Defined delete | remove | destroy route  
// productRoutes.route('/delete/:id').get(function (req, res) {  
//     Product.findByIdAndRemove({_id: req.params.id}, function(err, product){  
//         if(err) res.json(err);  
//         else res.json('Successfully removed');  
//     });  
// });  
module.exports = postRoutes;  