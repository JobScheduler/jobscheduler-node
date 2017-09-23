'use strict'

const JobScheduler = require('./jobscheduler')

module.exports = (api_key) {
  return new JobScheduler(api_key)
}

module.exports.Client = JobScheduler
