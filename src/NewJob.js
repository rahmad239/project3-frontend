import React, { Component } from 'react';

class NewJob extends Component {
  render() {
    return (
      <form>
        Title:
        <input type="text" name="title" />
        Company Name:
        <input type="text" name="companyName" />
        Description:
        <textarea name="description" />
        Location:
        <input type="text" name="location" />
        Salary:
        <input type="text" name="salary" />
        Status:
        <select>
          <option value="will-apply">Will Apply</option>
          <option value="applied">Applied</option>
          <option value="unresponsive">Unresponsive</option>
          <option value="phone-interview">Phone Interview</option>
          <option value="in-person-interview">In-Person Interview</option>
          <option value="offer">Offer</option>
        </select>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NewJob;

//set to a controlled component

//Will Apply, Applied, Unresponsive, Phone Interview, In-Person Interview, Offer
//reactjs.org/docs/forms.html//
