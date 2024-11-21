 import React, { useState } from 'react';
 import './contact.css';

const UserForm = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    address: '',
    email: '',
    mobile: ''
  });

  const [submitted, setSubmitted] = useState(false);

  // Handling input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handling form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation logic (example)
    if (!formData.name || !formData.age || !formData.address || !formData.email || !formData.mobile) {
      alert("Please fill in all fields");
      return;
    }

    setSubmitted(true);
    console.log('Form Data:', formData);
  };

  return (
    <div className="form-container">
      <h2>User Information Form</h2>

      {submitted ? (
        <div>
          <h3>Form Submitted Successfully!</h3>
          <p>Name: {formData.name}</p>
          <p>Age: {formData.age}</p>
          <p>Address: {formData.address}</p>
          <p>Email: {formData.email}</p>
          <p>Mobile: {formData.mobile}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label>Age:</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Enter your age"
              required
            />
          </div>

          <div>
            <label>Address:</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your address"
              required
            />
          </div>

          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label>Mobile Number:</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Enter your mobile number"
              required
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default UserForm;

