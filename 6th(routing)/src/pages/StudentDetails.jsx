import { useParams } from "react-router-dom";

function StudentDetails() {
  const { id } = useParams();

  const students = [
    { id: 1, name: "Deepu", age: 19, course: "React" },
    { id: 2, name: "Rahul", age: 20, course: "Node.js" },
    { id: 3, name: "Priya", age: 18, course: "JavaScript" }
  ];

  const student = students.find((s) => s.id === Number(id));

  if (!student) {
    return <h2>Student Not Found</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Student Details</h1>

      <p><strong>ID:</strong> {student.id}</p>
      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Age:</strong> {student.age}</p>
      <p><strong>Course:</strong> {student.course}</p>
    </div>
  );
}

export default StudentDetails;