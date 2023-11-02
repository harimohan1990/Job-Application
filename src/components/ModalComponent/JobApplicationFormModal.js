import React, { useState } from 'react';
import TextAreaCoverLetter from './TextAreaCoverLetter';

import './JobApplicationFormModal.css';

export default function JobApplicationFormModal() {
  const [name, setName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [resume, setResume] = useState(null);
  const [coverLetter, setCoverLetter] = useState(null);
  const [textareashow, setTextareashow] = useState(false);

  const [textareaContent, setTextareaContent] = useState('');

  const toggleTextarea = () => {
    setTextareashow(!textareashow);
  };

  const nameChange = (e) => {
    setName(e.target.value);
  };

  const nameLastnameChange = (e) => {
    setLastName(e.target.value);
  };

  const emailChange = (e) => {
    setEmail(e.target.value);
  };

  const phoneChange = (e) => {
    setPhone(e.target.value);
  };

  const locationChange = (e) => {
    setLocation(e.target.value);
  };

  const resumeChange = (e) => {
    // Assuming you are using an input element with type="file" for resume
    setResume(e.target.files[0]);
  };

  const coverletterChange = (e) => {
    // Assuming you are using an input element with type="file" for cover letter
    setCoverLetter(e.target.files[0]);
  };

  const textareaChange = (content) => {
    setTextareaContent(content);
  };

  const validateForm = () => {
    if (!name || !lastname || !email || !phone || !location || !resume) {
      alert('Please fill in all required fields.');
      return false;
    }

    // Add validation for email format
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return false;
    }

    // You can add more specific validations for phone number, name, and other fields as needed.

    // If using file inputs for Resume and Cover Letter, check if files were selected.
    if (!resume) {
      alert('Please upload a Resume/CV file.');
      return false;
    }

    // Optionally, check the file type and size for the resume and cover letter here.

    // Add additional validation as needed

    return true;
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      console.log('Name:', name);
      console.log('Lastname:', lastname);
      console.log('Email:', email);
      console.log('Phone:', phone);
      console.log('Location:', location);
      console.log('Resume:', resume);
      console.log('Cover Letter:', coverLetter);
      console.log('Textarea Content', textareaContent);

      // Perform any further actions (e.g., sending data to the server) here
    }
  };

  return (
    <div>
      <form>
        <div>
          <input onChange={nameChange} type="text" name="name" placeholder='Name *' />
        </div>
        <div>
          <input onChange={nameLastnameChange} type="text" name="lastname" placeholder='Lastname *' />
        </div>
        <div>
          <input onChange={emailChange} type="email" name="email" placeholder='Email *' />
        </div>
        <div>
          <input onChange={phoneChange} type="tel" name="phone" placeholder='Phone *' />
        </div>
        <div>
          <input onChange={locationChange} type="text" name="location" placeholder='Location *' />
        </div>
        <div>
          <label>Resume/CV *</label>
          <input onChange={resumeChange} type="file" name="Resume/cv" accept=".pdf,.doc,.docx" />
        </div>
        <div>
          <label>Cover Letter</label>
          <input onChange={coverletterChange} type="file" name="coverLetter" accept=".pdf,.doc,.docx" placeholder='Attach' />
        </div>
        <div>
          <label>Paste</label>
          <button type="button" onClick={toggleTextarea}>
            Toggle Textarea
          </button>
          {textareashow && <TextAreaCoverLetter onTextareaChange={textareaChange} />}
        </div>
        <div>
          <input className='submitbtn' style={{
     
    }} type="submit" value="Submit" onClick={onSubmit} />
        </div>
      </form>
    </div>
  );
}
