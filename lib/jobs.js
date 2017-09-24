const assert = require('assert');

class Jobs {
  constructor(client) {
    this.client = client;
    // this.api_key = client.api_key || null
    // this.api_base_url = client.api_base_url || null
  }

  createJob(dataCreate) {
    assert(dataCreate, 'A data object must be provided');

    return this.client.request.post('/jobs', dataCreate)
      .then(response => this.client.handleResponse(response))
      .catch(error => this.client.handleError(error));
  }

  getAllJobs() {
    return this.client.request.get('/jobs')
      .then(response => this.client.handleResponse(response))
      .catch(error => this.client.handleError(error));
  }

  getJob(id) {
    assert(id, 'An id must be provided');

    return this.client.request.get(`/jobs/${id}`)
      .then(response => this.client.handleResponse(response))
      .catch(error => this.client.handleError(error));
  }

  deleteJob(id) {
    assert(id, 'An id must be provided');

    return this.client.request.delete(`/jobs/${id}`)
      .then(response => this.client.handleResponse(response))
      .catch(error => this.client.handleError(error));
  }

  updateJob(id, dataUpdate) {
    assert(id, 'An id must be provided');
    assert(dataUpdate, 'A data object must be provided');

    return this.client.request.put(`/jobs/${id}`, dataUpdate)
      .then(response => this.client.handleResponse(response))
      .catch(error => this.client.handleError(error));
  }

  enableJob(id) {
    assert(id, 'An id must be provided');

    const dataUpdate = {
      is_active: true,
    };
    return this.client.request.put(`/jobs/${id}`, dataUpdate)
      .then(response => this.client.handleResponse(response))
      .catch(error => this.client.handleError(error));
  }

  disableJob(id) {
    assert(id, 'An id must be provided');

    const dataUpdate = {
      is_active: false,
    };
    return this.client.request.put(`/jobs/${id}`, dataUpdate)
      .then(response => this.client.handleResponse(response))
      .catch(error => this.client.handleError(error));
  }
}

module.exports = Jobs;
