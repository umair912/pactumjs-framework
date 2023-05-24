const { addMsg } = require('jest-html-reporters/helper');

export const PactumJestHtmlReporterAppender = {

    name: 'PactumJestHtmlReporterAppender',
        
    afterSpec(spec) {
      //Append each request made by pactum to the test that is running
      addMsg({message:JSON.stringify(spec, null, 2)});
    },
  
    afterStep(step) {
      
    },
  
    afterTest(test) {
      
    },
  
    end() {
      
    },
  
    reset() {
      
    }
}