'use strict';
import express from 'express';
//simple example of linking up directly with our model
import Cat from '../models/cats.js';
import sendJSON from '../middleware/sendJSON.js';
// import cats from '../models/cats_model.js';
const router = express.Router();

//dynamic model finder
// import modelFinder from '../middleware/models.js';
// router.param('model', modelFinder);

router.get('/api/v1/cats/:id', (req,res,next) => {
  // req.model.findById(req.params.id)
  Cat.findById(req.params.id)
    .then( data => sendJSON(res,data))
    .catch( next );
});
//this is where we are defining the ability to use req.model being attached to the Cats class constructor
router.get('/api/v1/cats', (req, res, next) => {
  // why putting empty object braces in the find
  // console.log('GET ALL MODEL:', req.model);
  // req.model.find({})
  Cat.find({})
    .then( data => {
      console.log('GET ALL ROUTE / INSIDE THEN');
      res.send(data);})
    // .catch( err => res.send(err));
    .catch( next);
});

router.post('/api/v1/cats', (req,res,next) => {
  //below is for the dynamic model finder thats not hooked up yet
  // let newCat = new req.model(req.body);
  //below is hard coded to the model Cat
  console.log('POST ROUTE / req.body =', req.body);

  let newCat = new Cat(req.body);
  newCat.save()
    .then( data => sendJSON(res,data))
    .catch( next);
});

router.put('/api/v1/cats/:id', (req,res,next) => {
  let updateTarget = { _id: `${req.params.id}` };
  let  updateContent;

  if(req.body.name){
    updateContent = { name : `${req.body.name}`};
  } else {
    updateContent = { color : `${req.body.color}`};

  }
  Cat.findOneAndUpdate(updateTarget, updateContent)
    .then( data => sendJSON(res,data))
    .catch( next );
});

router.delete('/api/v1/deleteall/cats', (req,res,next) => {
  Cat.deleteMany({})
    .then( data => sendJSON(res,data))
    .catch( next );
});

router.delete('/api/v1/cats/:id', (req,res,next) => {
  Cat.remove({_id: `${req.params.id}`})
    .then( data => sendJSON(res,data))
    .catch( next );
});



//calling the then results 'cats' is called shadowing and its shadowing the import cats in that they can be called the same because they are in different scopes

export default router;