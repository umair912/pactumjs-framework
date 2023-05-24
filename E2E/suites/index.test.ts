const { practiceSpecs, bookSpecs } = require('../specs');
const pjr = require('pactum-json-reporter');
const pactum = require('pactum');

pactum.request.setBaseUrl("https://demoqa.com");

describe('Get All Books', () => {
    // @ts-ignore
    // beforeAll(()=> {
    //     console.log("before All");
    // })
    // beforeEach(()=> {
    //     console.log("before Each");
    // })
    // afterEach(() => {
    //     console.log("After Each");
    // })
    // @ts-ignore
    // afterAll(()=>{
    //     console.log("after All");
    // })
  it('should return a 200 status code', async () => {
    await pactum.spec(bookSpecs.getBooks, { status: 200 })
  });
});