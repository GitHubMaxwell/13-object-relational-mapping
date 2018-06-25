'use strict';
// let app = require('../../../src/app.js');

import superagent from 'superagent';
import app from '../../../src/app.js';

afterAll(() => {
  app.stop();
});

describe('API MODULE 1', () => {
  
  beforeAll(() => {
    app.start(3000);
  });

  it('POST SUCCESS: test', (done) => {
    let obj = {
      name:'max',
      color:'brown',
    };
    console.log('OBJ: ', obj);
    superagent.post('http://localhost:3000/api/v1/cats')
      .send(obj)
      .then(data => {
        console.log('DATA: ', data);
        expect(data.body.color).toEqual('brown');
        expect(data.status).toEqual(200);
        done();
      })
      .catch(err => {
        console.log('ERR: ');
        done();
      });
  });

  xit('GET SUCCESS: test', (done) => {
    let obj = {
      content:'max',
      title:'maxtitle',
    };
  
    superagent.post('http://localhost:3000/api/v1/cats')
      .send(obj)
      .then(data => {
        // console.log('RES BODY: ', res.body);
        // console.log('RES BODY STATUS: ', res.status);
        superagent.get(`http://localhost:3000/api/v1/cats/${data.body.id}`)
          .then(res => {
            expect(res.body.title).toEqual('maxtitle');
            expect(res.status).toEqual(200);
            done();
          });
      });
  });

  xit('PUT SUCCESS: test', (done) => {
    let obj = {
      content:'max',
      title:'maxtitle',
    };
  
    superagent.post('http://localhost:3000/api/v1/cats')
      .send(obj)
      .then(data => {
        superagent.put(`http://localhost:3000/api/v1/cats/${data.body.id}`)
          .send({content: 'john', title: 'smith'})
          .then(res => {
            expect(res.body.title).toEqual('smith');
            expect(res.status).toEqual(200);
            done();
          });
      });
  });

  xit('GET ALL SUCCESS: test', (done) => {
    superagent.get('http://localhost:3000/api/v1/cats')
      .then(data => {
        let database = data.body;
        // let element = '';
        let elementArr = [];
        for (var property in database) {
          elementArr.push(database[property].title);
        }
        // console.log('DATABASE', database);
        for (let i = 0; i < elementArr.length; i++) {
          expect(elementArr[i]);
        }
        expect(elementArr[0]).toEqual('maxtitle');
        expect(data.status).toEqual(200);
        done();
      });
  });

  xit('DELETE ALL SUCCESS: test', (done) => {
    superagent.delete('http://localhost:3000/api/v1/cats')
      .then(data => {
        expect(data.status).toEqual(200);
        done();
      });
  });

}); //closing describe
