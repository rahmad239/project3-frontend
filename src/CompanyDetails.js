import React, { Component } from 'react';

class CompanyDetails extends Component {
  render() {
    return (
      <div className="company-full-listing">
        <div className="card-title">
          <h1>Company Name</h1>
        </div>
        <h4>Type</h4>
        <h4>Contact Info</h4>
        <h4>Contact Person</h4>
        <h4>Status</h4>
      </div>
    );
  }
}

export default CompanyDetails;
