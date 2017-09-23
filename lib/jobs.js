const axios = require('axios');

class Jobs {
  constructor(client) {
    this.client = client;
    // this.api_key = client.api_key || null
    // this.api_base_url = client.api_base_url || null
  }

  createJob(dataCreate) {
    return this.client.request.post('/jobs', dataCreate)
      .then((response) => {
        const data = response.data || null;
        return data;
      })
      .catch((error) => {
        const { data } = error.response;
        throw data;
      });
  }

  getAllJobs() {
    return this.client.request.get('/jobs')
      .then((response) => {
        const data = response.data || null;
        return data;
      })
      .catch((error) => {
        const { data } = error.response;
        throw data;
      });
  }

  getJob(id) {
    return this.client.request.get(`/jobs/${id}`)
      .then((response) => {
        const data = response.data || null;
        return data;
      })
      .catch((error) => {
        const { data } = error.response;
        throw data;
      });
  }

  deleteJob(id) {
    return this.client.request.delete(`/jobs/${id}`)
      .then((response) => {
        const data = response.data || null;
        return data;
      })
      .catch((error) => {
        const { data } = error.response;
        throw data;
      });
  }

  updateJob(id, dataUpdate) {
    return this.client.request.put(`/jobs/${id}`, dataUpdate)
      .then((response) => {
        const data = response.data || null;
        return data;
      })
      .catch((error) => {
        const { data } = error.response;
        throw data;
      });
  }

  enableJob(id) {
    const dataUpdate = {
      is_active: true,
    };
    return this.client.request.put(`/jobs/${id}`, dataUpdate)
      .then((response) => {
        const data = response.data || null;
        return data;
      })
      .catch((error) => {
        const { data } = error.response;
        throw data;
      });
  }

  disableJob(id) {
    const dataUpdate = {
      is_active: false,
    };
    return this.client.request.put(`/jobs/${id}`, dataUpdate)
      .then((response) => {
        const data = response.data || null;
        return data;
      })
      .catch((error) => {
        const { data } = error.response;
        throw data;
      });
  }
}

module.exports = Jobs;
