import React, { Component } from 'react';
import './App.css';
import Company from './Company.js';
import Job from './Job.js';

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
            <Job />
          </div>
          <br />
          <br />
          <div className="Company-blocks">
            <Company />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
