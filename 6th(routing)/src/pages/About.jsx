function About(){
    return(
        <div style={{
            padding:"20px",
            textAlign:"center"
        }}>
            <h1>About this Project</h1>
        <p>
        This is a Student Management Portal built using React Router.
      </p>

      <p>
        It helps students learn important routing concepts like:
      </p>
      <ul style={{
        listStyle:"none",
        padding:0
      }}>
       <li>Routes</li>
       <li>Links</li>
       <li>Dynamic Routes</li>
       <li>Protected Routes</li>
       <li>Nested Routes</li>
      </ul>
         <p>
        This project is created for learning React step by step.
      </p>
        </div>
    )
}
export default About;