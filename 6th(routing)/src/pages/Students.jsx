import { useState } from "react";
import { Link } from "react-router-dom";

function Students() {
  const [students, setStudents] = useState([
    { id: 1, name: "Deepu", age: 19, course: "React" },
    { id: 2, name: "Rahul", age: 20, course: "Node.js" }
  ]);

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    course: ""
  });

  const [editId, setEditId] = useState(null);
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const addOrUpdateStudent = () => {
    if (!formData.name || !formData.age || !formData.course) {
      alert("Please fill all fields");
      return;
    }

    if (editId) {
      const updatedStudents = students.map((student) =>
        student.id === editId
          ? { ...student, ...formData }
          : student
      );

      setStudents(updatedStudents);
      setEditId(null);
    } else {
      const newStudent = {
        id: students.length + 1,
        ...formData
      };

      setStudents([...students, newStudent]);
    }

    setFormData({
      name: "",
      age: "",
      course: ""
    });
  };

  const deleteStudent = (id) => {
    setStudents(
      students.filter((student) => student.id !== id)
    );
  };

  const editStudent = (student) => {
    setFormData(student);
    setEditId(student.id);
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Student Management</h1>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          className="input"
          value={formData.name}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="number"
          name="age"
          placeholder="Enter Age"
          className="input"
          value={formData.age}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="course"
          placeholder="Enter Course"
          className="input"
          value={formData.course}
          onChange={handleChange}
        />

        <br /><br />

        <button className="button" onClick={addOrUpdateStudent}>
          {editId ? "Update Student" : "Add Student"}
        </button>

        <br /><br />

        <input
          type="text"
          placeholder="Search student..."
          className="input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <hr />

        <ul className="student-list">
          {students
            .filter((student) =>
              student.name
                .toLowerCase()
                .includes(search.toLowerCase())
            )
            .map((student) => (
              <li key={student.id}>
                <Link
                  className="student-link"
                  to={`/student/${student.id}`}
                >
                  {student.name} - {student.course}
                </Link>

                <button
                  className="edit-btn"
                  onClick={() => editStudent(student)}
                >
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() => deleteStudent(student.id)}
                >
                  Delete
                </button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Students;