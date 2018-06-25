'use strict';

// import requireAll from 'require-directory';
// const models = requireAll('/models');
// console.log('MODELS:', models);
/*
  models: {
    'players': {
      'default': Function()
    }
  }
 */

import cats from '../models/cats.js';

export default (req, res, next) => {
  req.model = cats;
  next();
};

// export default (req,res,next) => {
//   let model = req.params.model;
//   // If we have a valid model specified and available as a module, assign that to req.model
//   // and then continue on with the application, otherwise, force an error state
//   if(model && models[model] && models[model].default ) {
//     req.model = models[model].default;
//     next();
//   }
//   else {
//     next('Model Not Found');
//   }
// };