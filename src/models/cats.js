//////////////////////////////////////////////////////////////////////
// this is the original way to do it

import mongoose from 'mongoose';

// // http://mongoosejs.com/docs/models.html

// //this is a Schema template and you will name and call an instance of it
const Cat = mongoose.Schema({
  name: { type: String, uppercase: true, required:true },
  color: { type: String, uppercase: true, required:true },
});

// //this is exporting an instance of our Cat Schema
export default mongoose.model('cats', Cat);
//////////////////////////////////////////////////////////////////////
// to test
// first check if GET all is []
// do post and make sure doesnt fail
// then GET all and show ['Etta James']

// assuming DB is empty otherwise its not going to work
//length of my list 
// do a get before my post to see if its empty


// need to obliterate all the data to test the get and post etc
// but you dont want to do that so you have a test DB
// DO THE BELOW

//////////////////////////////////////////////////////////////////////
// import mongoose, {Schema} from 'mongoose';

// const schema = Schema({
//   name: { type: String, default: 'Garfield', required:true },
//   color: { type: String, required:true },
// });

// this is important when deploying
// const skipInit = process.env.NODE_ENV === 'test';

// export default mongoose.model('Cat', schema, 'cat', skipInit);


//this accepts a body like the below?????

/*


{
  name: 'Felix',
  color: 'Brown'
}

*/