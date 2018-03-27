import React, { Component } from 'react';
import './App.css';
import Company from './Company';
import Job from './Job';
import NewCompany from './NewCompany';
import NewJob from './NewJob';
import CompanyDetails from './CompanyDetails';
import JobDetails from './JobDetails';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Junior Developer',
      companyName: 'Apple',
      type: 'tech',
      description: 'This role is for an entry level associate to',
      location: 'Columbia, MD',
      contactPerson: 'Jane Doe',
      salary: '$80,000',
      jobStatus: 'Interview Pending',
      contactStatus: 'Phone Interview'
    };
    console.log(this.state.companyName);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <div className="Job-blocks">
            <JobDetails />
          </div>
          <br />
          <br />
          <div className="Company-blocks">
            <CompanyDetails />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
