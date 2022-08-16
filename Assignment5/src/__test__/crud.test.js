const request = require('supertest')
const app = require('../../server')

describe('Post Endpoints', () => {
  it('CRUD Operations', async () => {
    const res = await request(app)
      .post('/create')
      .send({
        name: 'Kiran', 
        author: 'Myself', 
        id: 2356,
        price: 346.32,
      })
    console.log("Post Response ==>"+JSON.stringify(res.body, null, 2))
    let data = JSON.stringify(res.body, null, 2)
    let respID = data.split(',')[4].split(':')[1].replace('\"','').replace('\"','')
    let givenId = data.split(',')[2].split(':')[1]
    
    //console.log("Respone ID="+respID)
    expect(res.statusCode).toEqual(200)

    //Get request
    const getResp = await request(app).get(`/message/${respID.trim()}`);
    console.log("Get Response ==>"+JSON.stringify(getResp.body, null, 2))
    expect(getResp.statusCode).toEqual(200);

    //Update request
    const updateResp = await request(app)
                                                .put(`/message/${respID.trim()}`)
                                                .send({
                                                "id": 4567
                                                })
    console.log("Update Response ==>"+JSON.stringify(updateResp.body, null, 2))
    expect(updateResp.statusCode).toEqual(200);

    //Delete request
    const deleteResp = await request(app).delete(`/message/${respID.trim()}`);
    console.log("Delete Response ==>"+JSON.stringify(deleteResp.body, null, 2))
    expect(deleteResp.statusCode).toEqual(200);                                            

  })  
});





    