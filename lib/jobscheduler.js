'use strict'

const axios = require('axios');
const assert = require('assert')
const Jobs = require('./jobs')
const Logs = require('./logs')

class JobScheduler {

  constructor(apiKey) {
    this.apiKey = apiKey || process.env.JOBSCHEDULER_API_KEY || null;
    this.apiBaseUrl = process.env.JOBSCHEDULER_API_BASE_URL || 'https://jobscheduler.xyz/api/v1';

    assert(this.apiKey, 'API Key is missing');

    this.request = axios.create({
      baseURL: this.apiBaseUrl,
      headers: {
        authorization: this.apiKey,
      },
      timeout: 1000,
    });

    this.jobs = new Jobs(this);
    this.logs = new Logs(this);
  }

   handleResponse(response) {
    const data = response.data || null;
    return data;
  }

  handleError(error) {
    const { data } = error.response || null;
    throw data;;
  }

}

module.exports = JobScheduler
