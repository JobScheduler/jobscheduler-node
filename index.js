const JobScheduler = require('./lib/jobscheduler');

module.exports = (apiKey) => {
  return new JobScheduler(apiKey);
};

module.exports.Client = JobScheduler;
