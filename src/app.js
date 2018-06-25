//app js is the boss and index.js is like the doorman
//gives
import cors from 'cors';
import express from 'express';
import router from '../src/api/api.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
 
//forgot to import and use router
app.use(router);
// app.get('/ping', (req,res) => {
//   res.send('PONG');
// });

//just to quickly test to see if stuff is connected and so on nodemon start up this will be in the console. IT WORKS!!!
// import cat from '../src/models/cats_model.js';
// cat.create({name:'Felix', color: 'Brown'})
//   .then(cat => console.log(cat))
//   .catch(err => console.error(err));

let serverOn = false;
let server;

module.exports = {
  start: (port) => {
    if(!serverOn) {
      server = app.listen(port, (err) => {
        if(err) {throw err;}
        console.log('LISTENING ON PORT: ', port);
      });
    } else {
      console.log('Server is already running');
    }
  },
  stop: () => {
    server.close( () => {
      console.log('Server has stopped');
    });
  },
};

//really simple express server
// module.exports = {
//   start: port => app.listen(port, () => console.log('listening on port:', port)),
//   stop: () => app.close(),
// };