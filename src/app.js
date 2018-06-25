import cors from 'cors';
import express from 'express';
import router from '../src/api/api.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(router);


let serverOn = false;
// let server;

module.exports = {
  start: (port) => {
    if(!serverOn) {
      app.listen(port, (err) => {
        if(err) {throw err;}
        console.log('LISTENING ON PORT: ', port);
      });
    } else {
      console.log('Server is already running');
    }
  },
  stop: () => {
    app.close( () => {
      console.log('Server has stopped');
    });
  },
  server: app,
};

// module.exports = {

//   start: port => app.listen(port, console.log('Listening on PORT', port)),
//   stop: () => app.close(),
//   server: app,
// };