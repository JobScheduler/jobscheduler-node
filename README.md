# JobScheduler Node Library

The node js library to use the [jobscheduler.xyz](
https://jobscheduler.xyz) service


## Installation

Install the package [jobscheduler-client](https://www.npmjs.com/package/jobscheduler-client)

```bash
npm install --save jobscheduler-client
```


## Setup

```js
const jobScheduler = require('jobcheduler-client')(process.env.JOBSCHEDULER_API_KEY);

// OR

const Client = require('jobcheduler-client').Client
const jobScheduler = new Client(process.env.JOBSCHEDULER_API_KEY)
```

## Usage

### Create a job

```js
const data = {
  name: 'Unit test create job',
  action_type: 'http',
  action_method: 'POST',
  action_url: 'https://example.com',
  cron_rule: '*/10 * * * *',
  action_query_parameters: { secret: 42 },
  action_headers: { token: 42 },
  action_body: { job: 42, source: 'salesforce' },
};

jobScheduler.jobs.createJob(data)
  .then(response => console.log(response))
  .catch(error => console.error(error));
```


# Contribution

## Test

### Coding style

Run the linter `npm run lint`

Style guide Airbnb


## Architecture


### Available functions

- Jobs
  - get all jobs
  - get a job
  - create a job
  - update a job
    - enable a job
    - disable a job
  - delete a job
- Logs
  - get all logs
  - get a log of a job


### Modules

axios
