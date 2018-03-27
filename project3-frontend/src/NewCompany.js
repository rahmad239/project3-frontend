import React, { Component } from 'react';

class NewCompany extends Component {
  render() {
    return (
      <form>
        Company Name:
        <input type="text" name="companyName" />
        Type:
        <input type="text" name="type" />
        Contact Info:
        <input type="text" name="contactInfo" />
        Contact Person:
        <input type="text" name="contactPerson" />
        Status:
        <select>
          <option value="contact-made">Contact Made</option>
          <option value="pending-response">Pending Response</option>
          <option value="outreach Needed">Outreach Needed</option>
        </select>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NewCompany;

//set to a controlled component

//do we want to add location into the model?        Location:
// <input type="text" name="location" />
//are the names camelcased?
//Contact Made, Pending Response, Outreach Needed
//reactjs.org/docs/forms.html//
