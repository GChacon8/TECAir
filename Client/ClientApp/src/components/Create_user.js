import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import '../Css/Styles.css';

function Create_user() {
  const [firstName, setFirstName] = useState('');
  const [lastName1, setLastName1] = useState('');
  const [lastName2, setLastName2] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [isStudent, setIsStudent] = useState(false);
  const [university, setUniversity] = useState('');
  const [studentId, setStudentId] = useState('');

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'firstName') {
      setFirstName(value);
    } else if (name === 'lastName1') {
      setLastName1(value);
    } else if (name === 'lastName2') {
      setLastName2(value);
    } else if (name === 'phoneNumber') {
      setPhoneNumber(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'isStudent') {
      setIsStudent(event.target.checked);
    } else if (name === 'university') {
      setUniversity(value);
    } else if (name === 'studentId') {
      setStudentId(value);
    }
  };

  const handleSubmit = () => {
    // Aquí puedes hacer lo que necesites con los datos del formulario
    console.log('Datos del usuario:', {
      firstName,
      lastName1,
      lastName2,
      phoneNumber,
      email,
      isStudent,
      university,
      studentId,
    });
    // Luego puedes redirigir a la vista que necesites
    navigate('/Client_view');
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className="login">
      <h1>Sign In</h1>
      <div>
        <label htmlFor="firstName">Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={firstName}
          onChange={handleInputChange}
          style={{ marginBottom: '10px' }}
        />
      </div>
      <div>
        <label htmlFor="lastName1">LastName1:</label>
        <input
          type="text"
          id="lastName1"
          name="lastName1"
          value={lastName1}
          onChange={handleInputChange}
          style={{ marginBottom: '10px' }}
        />
      </div>
      <div>
        <label htmlFor="lastName2">Apellido2:</label>
        <input
          type="text"
          id="lastName2"
          name="lastName2"
          value={lastName2}
          onChange={handleInputChange}
          style={{ marginBottom: '10px' }}
        />
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          value={phoneNumber}
          onChange={handleInputChange}
          style={{ marginBottom: '10px' }}
        />
      </div>
      <div>
        <label htmlFor="email">Mail:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={handleInputChange}
          style={{ marginBottom: '10px' }}
        />
      </div>
      <div>
        <label>
         Student:
          <input
            type="checkbox"
            id="isStudent"
            name="isStudent"
            checked={isStudent}
            onChange={handleInputChange}
          />
        </label>
      </div>
      {isStudent && (
        <div>
          <label htmlFor="university">College:</label>
          <input
            type="text"
            id="university"
            name="university"
            value={university}
            onChange={handleInputChange}
            style={{ marginBottom: '10px' }}
          />
        </div>
      )}
      {isStudent && (
        <div>
          <label htmlFor="studentId">Student ID:</label>
          <input
            type="text"
            id="studentId"
            name="studentId"
            value={studentId}
            onChange={handleInputChange}
            style={{ marginBottom: '10px' }}
          />
        </div>
      )}
      <div className="btn-group">
        <button className="btn btn-secondary" onClick={handleCancel}>
          Cancel
        </button>
        <button className="btn btn-primary" onClick={handleSubmit}>
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Create_user;
