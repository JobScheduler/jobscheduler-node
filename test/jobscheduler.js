const { expect, assert } = require('chai');
const JobScheduler = require('../lib/jobscheduler');

/* eslint-disable */
describe('jobscheduler', function () {

  describe('constructor', () => {

    it('should check if the api key exist', () => {
      function newJobScheduler() {
        return new JobScheduler();
      }
      assert.throw(newJobScheduler, Error, 'API Key is missing')
    })

    it('should create a new instnace', () => {
      const jobScheduler = new JobScheduler('my_awesome_api_key');

      expect(jobScheduler.api_key).equal('my_awesome_api_key');
    })
  })

  it('should provide access to jobs and logs', () => {
    const jobScheduler = new JobScheduler('my_awesome_api_key');

    console.log(jobScheduler);
    expect(jobScheduler.jobs).is.exist
    expect(jobScheduler.logs).is.exist
  })
})
/* eslint-enable */
