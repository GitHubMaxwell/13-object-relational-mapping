'use strict';

import cats from '../models/cats.js';

export default (req, res, next) => {
  req.model = cats;
  next();
};