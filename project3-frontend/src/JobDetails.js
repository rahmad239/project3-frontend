import React, { Component } from 'react';

class JobDetails extends Component {
  render() {
    return (
      <div className="full-listing">
        <div className="card-title">
          <h1>Title</h1>
        </div>
        <h4>Company Name</h4>
        <h4>Location</h4>
        <h4>Salary</h4>
        <h4>Status</h4>
        <p>Description</p>
      </div>
    );
  }
}

export default JobDetails;

//decide where we want the description to populate
