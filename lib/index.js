const JobScheduler = require('./jobscheduler');

module.exports = (apiKey) => {
  return new JobScheduler(apiKey);
};

module.exports.Client = JobScheduler;
