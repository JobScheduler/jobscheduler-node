'use strict'

const axios = require('axios');
const assert = require('assert')
const Jobs = require('./jobs')
const Logs = require('./logs')

class JobScheduler {

  constructor(api_key) {
    this.api_key = api_key || process.env.JOBSCHEDULER_API_KEY || null;
    this.api_base_url = process.env.JOBSCHEDULER_API_BASE_URL || 'https://jobscheduler.com/api/v1';

    assert(this.api_key, 'API Key is missing');

    this.request = axios.create({
      baseURL: this.api_base_url,
      headers: {
        'authorization': this.api_key
      },
      timeout: 1000,
    })

    this.jobs = new Jobs(this)
    this.logs = new Logs(this)

  }

}

module.exports = JobScheduler
