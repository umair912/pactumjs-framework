const { bookSpecs } = require('../../specs');
const pactum = require('pactum');
import { reporter, request } from 'pactum'
const pjr = require("pactum-json-reporter");

pactum.request.setBaseUrl('https://demoqa.com');

describe('Get All Books', () => {
  // @ts-ignore
  beforeAll(() => {
    reporter.add(pjr);
  });
  // beforeEach(()=> {
  //     console.log("before Each");
  // })
  // afterEach(() => {
  //     console.log("After Each");
  // })
  // @ts-ignore
  afterAll(() => {
    request.removeDefaultHeaders();
    reporter.end();
  });
  it('should return a 200 status code', async () => {
    await pactum.spec(bookSpecs.getBooks, { status: 200 });
  });
});
