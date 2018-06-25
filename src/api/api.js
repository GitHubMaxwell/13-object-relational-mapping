'use strict';
import express from 'express';
import Cat from '../models/cats.js';
import sendJSON from '../middleware/sendJSON.js';
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

router.get('/api/v1/cats', (req, res, next) => {
  Cat.find({})
    .then( data => {
      console.log('GET ALL ROUTE / INSIDE THEN');
      res.send(data);})
    .catch( next);
});

router.post('/api/v1/cats', (req,res,next) => {
  let newCat = new Cat(req.body);
  newCat.save()
    .then( data => sendJSON(res,data))
    .catch( next);
});

router.put('/api/v1/cats/:id', (req,res,next) => {
  let updateTarget = { _id: `${req.params.id}` };
  let updateContent;

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
  //findOneDelete
    .then( data => sendJSON(res,data))
    .catch( next );
});

export default router;