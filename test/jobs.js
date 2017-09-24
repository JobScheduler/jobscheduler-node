const { expect, assert } = require('chai');
const JobScheduler = require('../lib/jobscheduler');

/* eslint-disable */
describe('jobs', function () {

  describe('constructor', () => {

    it('should return a new instance', () => {

      const jobScheduler = new JobScheduler(process.env.JOBSCHEDULER_API_KEY);

      expect(jobScheduler.jobs.client).is.exist
      expect(jobScheduler.jobs.client.request).is.exist
    })
  })

  describe('createJob', () => {
    it('should create a job', (done) => {
      const jobScheduler = new JobScheduler(process.env.JOBSCHEDULER_API_KEY);

      const data = {
        name: "Unit test create job",
        action_type: "http",
        action_method: "POST",
        action_url: "https://requestb.in/r9sabbr9",
        cron_rule: "*/10 * * * *",
        action_query_parameters:{"secret": 42},
        action_headers: {"token": 42},
        action_body: {"job": 42, "source": "salesforce"}
      }

      jobScheduler.jobs.createJob(data)
        .then((response) => {
          // console.log(response);
          return response
        })
        .then((response) => jobScheduler.jobs.disableJob(response.id))
        .then((response) => jobScheduler.jobs.deleteJob(response.id))
        .then(() => done())
        .catch((error) => {
          console.error(error);
        })
    })
  })

  describe('getAllJobs', () => {

    it('should get the all jobs', (done) => {

      const jobScheduler = new JobScheduler(process.env.JOBSCHEDULER_API_KEY);
      // console.log(jobScheduler.jobs);
      jobScheduler.jobs.getAllJobs()
        .then((response) => {
          // console.log(response);
          done()
        })
        .catch((error) => {
          console.error(error);
        })
    })
  })

  describe('getJob', () => {

    it('should get a job with an id', (done) => {

      const jobScheduler = new JobScheduler(process.env.JOBSCHEDULER_API_KEY);
      const jobId = 'da7289e7-f0f3-43e7-8309-0e8e3c8038f3'

      jobScheduler.jobs.getJob(jobId)
        .then((response) => {
          // console.log(response);
          done()
        })
        .catch((error) => {
          console.error(error);
        })
    })
  })

  describe('deleteJob', () => {

    it.skip('should delete a job with an id', (done) => {

      const jobScheduler = new JobScheduler(process.env.JOBSCHEDULER_API_KEY);
      const jobId = '840cfd18-daac-4f75-85ec-7e2ea3c9a923'

      jobScheduler.jobs.deleteJob(jobId)
        .then((response) => {
          // console.log(response);
          done()
        })
        .catch((error) => {
          console.error(error);
        })
    })
  })

  describe('updateJob', () => {

    it('should update a job', (done) => {
      const jobScheduler = new JobScheduler(process.env.JOBSCHEDULER_API_KEY);
      const jobId = 'da7289e7-f0f3-43e7-8309-0e8e3c8038f3'

      const dataUpdate = {
        is_active: false
      }

      jobScheduler.jobs.updateJob(jobId, dataUpdate)
        .then((response) => {
          // console.log(response);
          done()
        })
        .catch((error) => {
          console.error(error);
        })
    })

  })

  describe('enableJob', () => {

    it('should enable a job', (done) => {
      const jobScheduler = new JobScheduler(process.env.JOBSCHEDULER_API_KEY);
      const jobId = 'da7289e7-f0f3-43e7-8309-0e8e3c8038f3'

      jobScheduler.jobs.enableJob(jobId)
        .then((response) => {
          // console.log(response);
          done()
        })
        .catch((error) => {
          console.error(error);
        })
    })
  })

  describe('disableJob', () => {

    it('should disable a job', (done) => {
      const jobScheduler = new JobScheduler(process.env.JOBSCHEDULER_API_KEY);
      const jobId = 'da7289e7-f0f3-43e7-8309-0e8e3c8038f3'

      jobScheduler.jobs.disableJob(jobId)
        .then((response) => {
          // console.log(response);
          done()
        })
        .catch((error) => {
          console.error(error);
        })
    })
  })

})

/* eslint-enable */
