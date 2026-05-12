import React, { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    resume: "",
    password: "",
    confirmPassword: "",
    skills: []
  });

  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const skillOptions = ["React", "JavaScript", "CSS", "Node.js"];

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSkillChange = (e) => {
    const { value, checked } = e.target;

    setForm({
      ...form,
      skills: checked
        ? [...form.skills, value]
        : form.skills.filter((skill) => skill !== value)
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!form.fullName.trim()) newErrors.fullName = "Name is required";
    if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Enter valid email";
    if (!/^\d{10}$/.test(form.phone))
      newErrors.phone = "Phone must be 10 digits";
    if (!form.position) newErrors.position = "Select position";
    if (form.password.length < 8)
      newErrors.password = "Minimum 8 characters";
    if (form.password !== form.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      setSubmittedData(form);
      setErrors({});
      alert("Application Submitted Successfully!");

      setForm({
        fullName: "",
        email: "",
        phone: "",
        position: "",
        experience: "",
        resume: "",
        password: "",
        confirmPassword: "",
        skills: []
      });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="container">
      <h1>Job Application Form</h1>

      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={form.fullName}
          onChange={handleChange}
        />
        <p className="error">{errors.fullName}</p>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <p className="error">{errors.email}</p>

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
        />
        <p className="error">{errors.phone}</p>

        <select
          name="position"
          value={form.position}
          onChange={handleChange}
        >
          <option value="">Select Position</option>
          <option>Frontend Developer</option>
          <option>Backend Developer</option>
          <option>Full Stack Developer</option>
        </select>
        <p className="error">{errors.position}</p>

        <input
          type="number"
          name="experience"
          placeholder="Experience"
          value={form.experience}
          onChange={handleChange}
        />

        <input
          type="text"
          name="resume"
          placeholder="Resume Link"
          value={form.resume}
          onChange={handleChange}
        />

        <div className="skills-box">
          <label>Skills:</label>
          {skillOptions.map((skill) => (
            <div className="skill-item" key={skill}>
              <input
                type="checkbox"
                value={skill}
                checked={form.skills.includes(skill)}
                onChange={handleSkillChange}
              />
              {skill}
            </div>
          ))}
        </div>

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />
        <p className="error">{errors.password}</p>

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={handleChange}
        />
        <p className="error">{errors.confirmPassword}</p>

        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div className="result">
          <h2>Submitted Details</h2>
          <p><strong>Name:</strong> {submittedData.fullName}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Phone:</strong> {submittedData.phone}</p>
          <p><strong>Position:</strong> {submittedData.position}</p>
        </div>
      )}
    </div>
  );
}

export default App;

