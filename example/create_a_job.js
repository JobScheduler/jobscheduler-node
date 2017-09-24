const JobScheduler = require('../lib/index');

const jobScheduler = JobScheduler(process.env.JOBSCHEDULER_API_KEY);

const data = {
  name: 'Unit test create job',
  action_type: 'http',
  action_method: 'POST',
  action_url: 'https://requestb.in/r9sabbr9',
  cron_rule: '*/10 * * * *',
  action_query_parameters: { secret: 42 },
  action_headers: { token: 42 },
  action_body: { job: 42, source: 'salesforce' },
};

jobScheduler.jobs.createJob(data)
  .then(response => console.log(response))
  .catch(error => console.error(error));
