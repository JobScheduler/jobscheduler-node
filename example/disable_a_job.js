const JobScheduler = require('../lib/index');

const jobScheduler = JobScheduler(process.env.JOBSCHEDULER_API_KEY);

jobScheduler.jobs.disableJob('<job_id>')
  .then(response => console.log(response))
  .catch(error => console.error(error));
